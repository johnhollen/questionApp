import React from 'react';
import {View, Text, StatusBar, Navigator, StyleSheet, TouchableOpacity} from 'react-native';
import RandomQuestionView from './question/RandomQuestionView';

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
    color: '#444444',
    fontFamily: 'System'
  },
  navBarRightButtonText: {
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'System',
      marginBottom: 3,
      color: '#444444'
  },
  navBarButton: {
      borderRadius: 100,
      backgroundColor: '#f5f5f5',
      marginLeft: 15,
      marginRight: 15,
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      width: 40,
      borderStyle: 'solid',
      borderColor: '#eeeeee',
      borderWidth: 1
  } 
});

const routes = [
    {title: 'Fråga', index: 'randomQuestionView'}
];

const NavigationBarContent = {
    LeftButton(route, navigator, index, navState) {
        return null;
    },

    RightButton(route, navigator, index, navState) {
        return (
            <TouchableOpacity onPress={() => console.log('Button Clicked')}>
                <View style={styles.navBarButton}>
                    <Text style={styles.navBarRightButtonText}>+</Text>
                </View>
            </TouchableOpacity>
        )
    },

    Title(route, navigator, index, navState) {
        return (
            <Text style={styles.navBarTitle}>{route.title}</Text>
        );
    }
};

const renderScene = (route, navigator) => {
    switch (route.index) {
        case 'randomQuestionView': 
            return <RandomQuestionView />;
        default:
            return <RandomQuestionView />
    }
};


// App Entry
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

export default App;
