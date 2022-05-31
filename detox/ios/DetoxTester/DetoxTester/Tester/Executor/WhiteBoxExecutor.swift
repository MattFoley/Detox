//
//  WhiteBoxExecutor.swift (DetoxTesterApp)
//  Created by Asaf Korem (Wix.com) on 2022.
//

import Foundation
import UIKit

import DetoxInvokeHandler

/// Protocol for handling application operations directly from the app itself, in a "white-box"
/// manner.
///
/// - Note in order to be able to interact with the application using white-box handling, the app
///  must have Detox framework in its dependencies.
class WhiteBoxExecutor {
  /// Stored handlers.
  fileprivate static var handlers: [String: WhiteBoxExecutor] = [:]

  ///
  private let messageSender: AppClientMessageSenderProtocol

  ///
  private init(messageSender: AppClientMessageSenderProtocol) {
    self.messageSender = messageSender
  }

  /// Sends a message with given `message` to the application using the internal Detox framework
  /// and synchronically waits for a response.
  func execute(_ message: Message) -> Response {
    switch message {
      case .disconnect:
        return .completed

      case .cleanup:
        return .completed

      case .reloadReactNative:
        let message: [String: AnyCodable] = [
          "type": "reloadReactNative",
          "params": [:],
          "messageId": AnyCodable(5)
        ]
        let encoder = JSONEncoder()

        var result: Data?
        do {
          result = messageSender.sendMessageToClient(try encoder.encode(message))
        }
        catch {
          fatalError("failed to create a new message")
        }

        guard let result = result else {
          execLog("reloading react native failed (result is nil)", type: .error)
          fatalError("result is nil")
        }

        let decoder = JSONDecoder()

        var decoded: [String: AnyCodable]!
        do {
          decoded = try decoder.decode([String: AnyCodable].self, from: result)
        }
        catch {
          execLog("reloading react native failed (result can't be decoded): \(result)", type: .error)
          fatalError("result is invalid")
        }

        guard decoded["type"]?.value as? String == "reloadedReactNative" else {
          execLog(
            "reloading react native failed, decoded result: \(String(describing: decoded))",
            type: .error
          )
          fatalError("reloading react native failed")
        }

        return .completed

      case .shakeDevice:
        return .completed

      case .captureViewHierarchy(let viewHierarchyURL):
        return .completed

      case .waitUntilReady:
        let message: [String: AnyCodable] = [
          "type": "waitUntilReady",
          "params": [:],
          "messageId": AnyCodable(10)
        ]
        let encoder = JSONEncoder()

        var result: Data?
        do {
          result = messageSender.sendMessageToClient(try encoder.encode(message))
        }
        catch {
          fatalError("failed to create a new message")
        }

        guard let result = result else {
          execLog("waiting for ready failed (result is nil)", type: .error)
          fatalError("result is nil")
        }

        let decoder = JSONDecoder()

        var decoded: [String: AnyCodable]!
        do {
          decoded = try decoder.decode([String: AnyCodable].self, from: result)
        }
        catch {
          execLog("waiting for ready failed (result can't be decoded): \(result)", type: .error)
          fatalError("result is invalid")
        }

        guard decoded["type"]?.value as? String == "isReady" else {
          execLog(
            "waiting for ready failed, decoded result: \(String(describing: decoded))",
            type: .error
          )
          fatalError("waiting for ready failed")
        }

        return .completed

      case .setSyncSettings(let maxTimerWait, let blacklistURLs, let disabled):
        return .completed

      case .setDatePicker(let toDate, let onElement):
        return .completed

      case .verifyVisibility(let ofElement, let withThreshold):
        return .boolean(true)

      case .verifyText(let ofElement, let equals):
        return .boolean(true)

      case .findElementIDByText(let text):
        return .string("some uuid")
    }
  }

  func send(_ data: Data) -> Data {
    return messageSender.sendMessageToClient(data)
  }
}

extension WhiteBoxExecutor {
  /// Returns white-box handler, or `nil` if no white-box handler for the given `bundleIdentifier`.
  class func getHandler(for bundleIdentifier: String) -> WhiteBoxExecutor? {
    if !handlers.keys.contains(bundleIdentifier) {
      return nil
    }

    return handlers[bundleIdentifier]!
  }
}

extension WhiteBoxExecutor {
  ///
  class func setNewHandler(
    for bundleId: String, withMessageSender sender: AppClientMessageSenderProtocol
  ) {
    handlers[bundleId] = .init(messageSender: sender)
  }
}
