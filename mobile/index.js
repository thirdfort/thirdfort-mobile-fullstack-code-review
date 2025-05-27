// **Start of TextEncoding Polyfill**
// This is a polyfill for TextEncoder and TextDecoder for React Native
// using the FastEncoder library.
// This is required because the Hermes engine does not support the
// TextEncoder and TextDecoder APIs natively (Expo does not have this
// problem).
import { polyfillGlobal } from 'react-native/Libraries/Utilities/PolyfillFunctions';
// TODO - text-encoding is deprecated and dead...
import { TextEncoder, TextDecoder } from 'text-encoding';
polyfillGlobal('TextEncoder', () => TextEncoder);
polyfillGlobal('TextDecoder', () => TextDecoder);
// **End of TextEncoding Polyfill**

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
