import React from 'react';
import {
    View, Text,
    StatusBar, Navigator,
    StyleSheet, TouchableOpacity
} from 'react-native';
import RandomQuestionView from './question/RandomQuestionView';
import navBarStyles from './NavBar.styles';

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
                <View style={navBarStyles.navBarButton}>
                    <Text style={navBarStyles.navBarRightButtonText}>+</Text>
                </View>
            </TouchableOpacity>
        )
    },

    Title(route, navigator, index, navState) {
        return (
            <Text style={navBarStyles.navBarTitle}>{route.title}</Text>
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
                                            style={navBarStyles.navBar}/>
                 }
                 renderScene={renderScene}
            />
        )
    }
});

export default App;
