import {AppRegistry} from 'react-native';
import ReduxExample2 from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './Root/store';
import React from 'react';
// import console = require('console');

const store = configureStore();

const RNRedux = () => {
  <Provider store={store}>
      {
        console.log("<><><><><><><>22222")
    }
    <ReduxExample2 />
    {
        console.log("<><><><><><><>11111")
    }
  </Provider>;
};

AppRegistry.registerComponent('reduxEx2', () => RNRedux);
