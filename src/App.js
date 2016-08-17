import React from 'react';
import {View, Text, StatusBar, Navigator, StyleSheet, TouchableHighlight} from 'react-native';
import RandomQuestionView from './question/RandomQuestionView';

const routes = [
    {title: 'questionApp', index: 0}
];

const NavigationBarContent = {
    LeftButton(route, navigator, index, navState) {
        return null;
    },

    RightButton(route, navigator, index, navState) {
        return null;
    },

    Title(route, navigator, index, navState) {
        return (
            <Text style={styles.navBarTitle}>{route.title}</Text>
        );
    }
};

const renderScene = (route, navigator) => {
    switch (route.index) {
        case 0: 
            return <RandomQuestionView />;
        default:
            return <RandomQuestionView />
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
