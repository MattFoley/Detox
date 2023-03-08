const { exec } = require('child-process-promise');
const osascript = require('node-osascript');
const { Lock } = require('semaphore-async-await');

const log = require('../../../../utils/logger').child({ cat: 'device,xcuitest' });

async function launchXCUITest(
  simulatorId,
  detoxServer,
  detoxSessionId,
  bundleId,
  debugVisibility,
  disableDumpViewHierarchy,
  testTargetServerPort
) {
  log.debug('[XCUITest] Launch was called');

  const lock = new Lock();
  await _runLaunchCommand(
    simulatorId,
    detoxServer,
    detoxSessionId,
    bundleId,
    debugVisibility,
    disableDumpViewHierarchy,
    testTargetServerPort,
    () => {
      log.debug('[XCUITest] Releasing lock');
      lock.release();
    }
  );

  log.debug('[XCUITest] Waiting for the lock to be released..');

  await lock.acquire();
  await lock.acquire();
  log.debug('[XCUITest] Lock was released');
}

async function _runLaunchCommand(
  simulatorId,
  detoxServer,
  detoxSessionId,
  bundleId,
  debugVisibility,
  disableDumpViewHierarchy,
  testTargetServerPort,
  callback
) {
  log.info(`Launching XUICTest runner. See target logs using:\n` +
    `\t/usr/bin/xcrun simctl spawn ${simulatorId} log stream --level debug --style compact ` +
    `--predicate 'process == "DetoxTester-Runner" && subsystem == "com.wix.DetoxTester.xctrunner"'`);

  let command = `TEST_RUNNER_IS_DETOX_ACTIVE='1' ` +
    `TEST_RUNNER_DETOX_SERVER='${detoxServer}' ` +
    `TEST_RUNNER_DETOX_SESSION_ID='${detoxSessionId}' ` +
    `TEST_RUNNER_TEST_TARGET_SERVER_PORT='${testTargetServerPort}' ` +
    `TEST_RUNNER_BUNDLE_ID='${bundleId}' ` +
    `TEST_RUNNER_DETOX_DEBUG_VISIBILITY='${debugVisibility}' ` +
    `TEST_RUNNER_DETOX_DISABLE_VIEW_HIERARCHY_DUMP='${disableDumpViewHierarchy}' ` +
    `xcodebuild ` +
    `-workspace ../ios/DetoxTester.xcworkspace ` +
    `-scheme DetoxTester ` +
    `-sdk iphonesimulator ` +
    `-allowProvisioningUpdates ` +
    `-destination 'platform=iOS Simulator,id=${simulatorId}' ` +
    `test`;

  exec(command, { maxBuffer: 1024 * 1024 * 500 })
    .then(function (result) {
      log.info(`XCUITest runner execution finished`);
      log.debug(`xcodebuild output:\n${result.stdout.toString()}`);
    })
    .catch(function (error) {
      log.error(`xcodebuild error has occurred during XCUITest execution, see debug logs for more details`);
      log.debug(`xcodebuild error message:\n${error.stderr.toString()}`);
    });

  await _allowNetworkPermissionsXCUITest(callback);
}

async function _allowNetworkPermissionsXCUITest(callback) {
  log.debug(`[XCUITest] Allowing network permissions`);

  osascript.execute(
    `tell application "System Events"
    set frontmost of process "UserNotificationCenter" to true
      tell process "UserNotificationCenter"
              repeat until (exists button "Allow" of window 1)
                  delay 1
              end repeat

              repeat while exists button "Allow" of window 1
                  if exists button "Allow" of window 1 then
                      click button "Allow" of window 1
                  end if
              end repeat
      end tell
    end tell`,
    function(err, _, __) {
      if (err) {
        log.error(`[XCUITest] Failed to approve network permissions for XCUITest target:\n\t${err}`);
      } else {
        log.debug(`[XCUITest] Network permissions are allowed`);
      }

      callback();
    });
}

module.exports = {
  launchXCUITest
};
