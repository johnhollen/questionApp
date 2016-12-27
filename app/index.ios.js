import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import applicationStore from './src/configureStore';
import App from './src/App';

const QuestionApp = () => (
    <Provider store={applicationStore}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('nativeApp', () => QuestionApp);
