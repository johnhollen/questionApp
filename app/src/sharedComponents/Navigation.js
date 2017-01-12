import React, {Component} from 'react';
import {
    View, Text,
    StatusBar, Navigator,
    StyleSheet, TouchableOpacity
} from 'react-native';
import RandomQuestion from '../question/RandomQuestion';
import AddQuestion from '../question/AddQuestion';
import MyQuestions from '../question/MyQuestions';
import navBarStyles from '../sharedComponents/Navbar.styles';

const RANDOM_QUESTION = 'RANDOM_QUESTION';
const ADD_QUESTION = 'ADD_QUESTION';
const MY_QUESTIONS = 'MY_QUESTIONS';

const routes = [
    {title: 'Fråga', index: RANDOM_QUESTION},
    {title: 'Skapa Fråga', index: ADD_QUESTION},
    {title: 'Mina Frågor', index: MY_QUESTIONS}
];

const NavigationBarContent = {
    LeftButton(route, navigator) {
        switch (route.index) {
            case RANDOM_QUESTION:
                return (
                    <TouchableOpacity onPress={() => navigator.push(routes[2])}>
                        <View style={navBarStyles.navBarButton}>
                            <Text style={navBarStyles.navBarButtonText}>Mina Frågor</Text>
                        </View>
                    </TouchableOpacity>
                );
            case ADD_QUESTION:
                return (
                    <TouchableOpacity onPress={() => navigator.pop()}>
                        <View style={navBarStyles.navBarButton}>
                            <Text style={navBarStyles.navBarButtonText}>Tillbaka</Text>
                        </View>
                    </TouchableOpacity>
                );
            default:
                return null;
        }
    },

    RightButton(route, navigator) {
        switch(route.index) {
            case RANDOM_QUESTION:
                return (
                    <TouchableOpacity onPress={() => navigator.push(routes[1])}>
                        <View style={navBarStyles.navBarButton}>
                            <Text style={navBarStyles.navBarButtonText}>Skapa</Text>
                        </View>
                    </TouchableOpacity>
                );
            case MY_QUESTIONS:
                return (
                    <TouchableOpacity onPress={() => navigator.pop()}>
                        <View style={navBarStyles.navBarButton}>
                            <Text style={navBarStyles.navBarButtonText}>Tillbaka</Text>
                        </View>
                    </TouchableOpacity>
                );
            default:
                return null;
        }
    },

    Title(route) {
        return (
            <Text style={navBarStyles.navBarTitle}>{route.title}</Text>
        );
    }
};

const renderScene = (route) => {
    switch (route.index) {
        case RANDOM_QUESTION:
            return <RandomQuestion />;
        case ADD_QUESTION:
            return <AddQuestion />;
        case MY_QUESTIONS:
            return <MyQuestions />;
        default:
            return <RandomQuestion />;
    }
};

const configureScene = (route) => {
    switch (route.index) {
        case MY_QUESTIONS:
            return Navigator.SceneConfigs.FloatFromLeft;
        case ADD_QUESTION:
            return Navigator.SceneConfigs.FloatFromRight;
        default:
            return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
    }
}

const NavigationBar = <Navigator.NavigationBar routeMapper={NavigationBarContent} style={navBarStyles.navBar} />;

const Navigation = () => (
    <Navigator
        initialRoute={routes[0]}
        navigationBar={NavigationBar}
        renderScene={renderScene}
        configureScene={configureScene}
    />
);

export default Navigation;
