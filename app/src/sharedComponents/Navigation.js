import React, {Component} from 'react';
import {
    View, Text,
    StatusBar, Navigator,
    StyleSheet, TouchableOpacity
} from 'react-native';
import RandomQuestionView from '../question/RandomQuestion';
import AddQuestionView from '../question/AddQuestion';
import navBarStyles from '../sharedComponents/Navbar.styles';

const routes = [
    {title: 'Fråga', index: 'randomQuestionView'},
    {title: 'Skapa Fråga', index: 'addQuestionView'}
];

const NavigationBarContent = {
    LeftButton(route, navigator) {
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

    RightButton(route, navigator) {
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

    Title(route) {
        return (
            <Text style={navBarStyles.navBarTitle}>{route.title}</Text>
        );
    }
};

const renderScene = (route) => {
    switch (route.index) {
        case 'randomQuestionView':
            return <RandomQuestionView />;
        case 'addQuestionView':
            return <AddQuestionView />;
        default:
            return <RandomQuestionView />
    }
};

const configureScene = (route) => {
    switch (route.index) {
        default:
            return Navigator.SceneConfigs.PushFromRight;
    }
}

const NavigationBar = <Navigator.NavigationBar routeMapper={NavigationBarContent} style={navBarStyles.navBar} />;

const Navigation = () => (
    <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        navigationBar={NavigationBar}
        renderScene={renderScene}
        configureScene={configureScene}
    />
);

export default Navigation;
