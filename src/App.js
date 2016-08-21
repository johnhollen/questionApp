import React from 'react';
import {
    View, Text,
    StatusBar, Navigator,
    StyleSheet, TouchableOpacity
} from 'react-native';
import RandomQuestionView from './question/RandomQuestionView';
import AddQuestionView from './question/AddQuestionView';
import navBarStyles from './sharedComponents/Navbar.styles';

const routes = [
    {title: 'Fråga', index: 'randomQuestionView'},
    {title: 'Skapa Fråga', index: 'addQuestionView'}
];

const NavigationBarContent = {
    LeftButton(route, navigator, index, navState) {
        switch (route.index) {
            case 'randomQuestionView':
                return (
                    <TouchableOpacity onPress={() => navigator.pop()}>
                        <View style={navBarStyles.navBarButton}>
                            <Text style={navBarStyles.navBarButtonText}>Mina Frågor</Text>
                        </View>
                    </TouchableOpacity>
                );
            case 'addQuestionView':
                return (
                    <TouchableOpacity onPress={() => navigator.pop()}>
                        <View style={navBarStyles.navBarButton}>
                            <Text style={navBarStyles.navBarButtonText}>Avbryt</Text>
                        </View>
                    </TouchableOpacity>
                );
            default:
                return null;
        }       
    },

    RightButton(route, navigator, index, navState) {
        if (route.index === 'randomQuestionView') {
            return (
                <TouchableOpacity onPress={() => navigator.push(routes[1])}>
                    <View style={navBarStyles.navBarButton}>
                        <Text style={navBarStyles.navBarButtonText}>{'Skapa'}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
        return null;        
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
        case 'addQuestionView':
            return <AddQuestionView navigator={navigator} />;
        default:
            return <RandomQuestionView />
    }
};

const configureScene = (route, routeStack) => {
    switch (route.index) {
        default:
            return Navigator.SceneConfigs.PushFromRight;
    }
}

// App Entry
const App = React.createClass({
    render() {
        return (
            <Navigator initialRoute={routes[0]}
                       initialRouteStack={routes}
                       navigationBar={
                            <Navigator.NavigationBar routeMapper={NavigationBarContent}
                                                     style={navBarStyles.navBar} />
                        }
                        renderScene={renderScene}
                        configureScene={configureScene} />
        );
    }
});

export default App;
