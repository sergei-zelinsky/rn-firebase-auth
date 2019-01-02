import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as APP_NAME} from './app.json';

AppRegistry.registerComponent(
  APP_NAME,
  () => App
);
