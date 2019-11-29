import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import './config/Reactotron';

import Routes from './routes';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#141419" barStyle="light-content" />
      <Routes />
    </Provider>
  );
}
