import { Crashlytics } from 'react-native-fabric'
import { Platform } from 'react-native'

/**
 * Logger service
 * Methods:
 * debug/group/groupEnd => traces for development
 * info => usefull logs that should be log on Fabric
 * warn => YellowBoxes for development (react-native), logs on Fabric for prod
 * error => RedBox for development (react-native), fatal error logs on Fabric for prod
 */
const Logger = (function override (originalConsole) {
  let methods = {
    debug: () => {},
    group: () => {},
    groupEnd: () => {},
    info (...args) {
      originalConsole.log('[INFO]', ...args)
    },
    warn (...args) {
      originalConsole.warn(args)
    },
    error (...args) {
      originalConsole.error(args)
    }
  }
  if (__DEV__) {
    methods = Object.assign(methods, {
      debug (...args) {
        originalConsole.log('[DEBUG]', ...args)
      },
      group (text) {
        originalConsole.group && originalConsole.group(text)
      },
      groupEnd () {
        originalConsole.groupEnd && originalConsole.groupEnd()
      }
    })
  } else {
    // Production environment
    methods = Object.assign(methods, {
      info (...args) {
        Crashlytics.log(`[INFO] ${args}`)
      },
      warn (...args) {
        Crashlytics.log(`[WARN] ${args}`)
      },
      error (message) {
        Platform.OS === 'ios'
          ? Crashlytics.recordError(message) // Record a non-fatal JS error only on iOS
          : Crashlytics.logException(message) // Record a non-fatal JS error only on Android
      }
    })
  }
  return methods
})(console)

export default Logger
