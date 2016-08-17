import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import App from './src/App';

class nativeApp extends Component {
    render() {
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('nativeApp', () => nativeApp);
