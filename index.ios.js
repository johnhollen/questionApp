import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import appStore from './src/reducers';

import App from './src/App';

const store = createStore(appStore, applyMiddleware(thunk));

class nativeApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('nativeApp', () => nativeApp);
