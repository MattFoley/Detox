import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';
import { RemoteDevice } from './RemoteDevice';
import { WebDriverClient } from '../webdriver';
import { WebDriverFetchWrapper } from '../webdriver/http';
import IosClientAPI from '@detox/client-plugin-ios';
import { InvocationManager } from './InvocationManager';

interface DetoxSessionConfig {
  server: CreateAxiosDefaults;
  capabilities: DetoxDriverCapabilities;
}

interface DetoxDriverCapabilities {
  /**
   * The platform of the device under test.
   * @example 'ios'
   * @example 'android'
   */
  platformName: string;
  /**
   * The driver name.
   * @example 'ios.simulator'
   * @example 'android.emulator'
   */
  'detox:driverName': string;
  'detox:driverOptions'?: unknown;
  'detox:driverInfo'?: any;

  [capability: string]: unknown;
}

class RemoteDetoxSession {
  #sessionId: string;
  #capabilities: DetoxDriverCapabilities;
  #device: RemoteDevice;
  #fetch: AxiosInstance;
  #wd?: WebDriverClient;
  #clientApi?: IosClientAPI;

  constructor(options: DetoxSessionConfig) {
    this.#sessionId = '';
    this.#capabilities = options.capabilities;
    this.#fetch = axios.create({
      baseURL: 'http://localhost:4444/wd/hub',
      ...options.server,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        ...options.server?.headers,
      },
    });
  }

  async init() {
    const wdw = new WebDriverFetchWrapper(this.#fetch);
    const session = await wdw.post('/session', {
      capabilities: {
        alwaysMatch: this.#capabilities,
      },
    });

    this.#sessionId = session.sessionId;
    this.#capabilities = session.capabilities;

    this.#wd = new WebDriverClient({
      fetch: this.#fetch,
      sessionId: this.#sessionId,
      capabilities: this.#capabilities,
    });

    this.#device = new RemoteDevice({
      wd: this.#wd,
      info: {
        id: 'emulator-5554',
        name: 'emulator-5554 (Pixel_API_29)',
        platform: 'android',
        appLaunchArgs: {},
      },
    });

    const invocationManager = new InvocationManager(this.#wd);
    this.#clientApi = new IosClientAPI(invocationManager);
  }

  get device() {
    return this.#device;
  }

  get element() {
    return this.#clientApi.element;
  }

  get expect() {
    return this.#clientApi.expect;
  }

  get waitFor() {
    return this.#clientApi.waitFor;
  }

  get by() {
    return this.#clientApi.by;
  }

  async cleanup() {
    await this.#wd.http.destroy();
  }
}

let sessions: RemoteDetoxSession[] = [];

export async function createSession(options: DetoxSessionConfig): Promise<RemoteDetoxSession> {
  const session = new RemoteDetoxSession(options);
  sessions.push(session);

  await session.init();
  return session;
}

export async function cleanupSessions() {
  await Promise.all(sessions.map(async (session) => {
    await session.cleanup();
  }));
}
