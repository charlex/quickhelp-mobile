/**
 * Quickhelp Android app registry shim.
 */


import { AppRegistry } from 'react-native';
import Index from './app/index';

AppRegistry.registerComponent('Quickpost', () => Index);
