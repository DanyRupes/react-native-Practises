/** @format */

import {AppRegistry} from 'react-native';
import React, { Component } from 'react';
 import App from './App';

import {name as appName} from './app.json';


class App extends Component {
    render(){
        return(<View>
                <Text>Hello React</Text>
            </View>)
    }
}

AppRegistry.registerComponent(appName, () => App);
