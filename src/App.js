import React from 'react';
import {View, Text, StatusBar, Navigator, StyleSheet, TouchableHighlight} from 'react-native';

import Hello from './Hello';
import World from './World';
import QuestionView from './question/Question';

const routes = [
    {title: 'Bra Idé', index: 0},
    {title: 'World', index: 1}
];

const NavigationBarContent = {
    LeftButton(route, navigator, index, navState) {
        if (index === 0) return null;
        return (
            <TouchableHighlight onPress={() => navigator.pop()}>
                <Text>Hello</Text>
            </TouchableHighlight>
        );
    },

    RightButton(route, navigator, index, navState) {
        if (index === 1) return null;
        return (
            <TouchableHighlight onPress={() => navigator.push(routes[1])}>
                <Text>World</Text>
            </TouchableHighlight>
        );
    },

    Title(route, navigator, index, navState) {
        return (
            <Text style={styles.navBarTitle}>{route.title}</Text>
        );
    }
};

const renderScene = (route, navigator) => {
    console.log(route, navigator);
    switch (route.index) {
        case 0: 
            return (<QuestionView />);
        case 1: 
            return (<World />);
    }
};

const App = React.createClass({
    render() {
        return (
            <Navigator initialRoute={routes[0]}
                 navigationBar={
                   <Navigator.NavigationBar routeMapper={NavigationBarContent}
                                            style={styles.navBar}/>
                 }
                 renderScene={renderScene}
            />
        )
    }
});

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#ffffff',
    opacity: 0.9,
    shadowColor: '#888',
    shadowOpacity: 0.6,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 0
    }
  },
  navBarTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5,
    color: '#444444'
  }
});

export default App;
