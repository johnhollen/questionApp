import React from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableOpacity
} from 'react-native';
import RandomQuestion from '../question/RandomQuestion';
import MyQuestions from '../question/MyQuestions';
import navBarStyles from '../sharedComponents/Navbar.styles';

const RANDOM_QUESTION = 'RANDOM_QUESTION';
const MY_QUESTIONS = 'MY_QUESTIONS';

const routes = [
    {title: 'Fråga', index: RANDOM_QUESTION},
    {title: 'Mina Frågor', index: MY_QUESTIONS}
];

const NavigationBarContent = {
    LeftButton(route, navigator) {
        switch (route.index) {
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

    RightButton(route, navigator) {
        switch (route.index) {
            case RANDOM_QUESTION:
                return (
                    <TouchableOpacity onPress={() => navigator.push(routes[1])}>
                        <View style={navBarStyles.navBarButton}>
                            <Text style={navBarStyles.navBarButtonText}>Mina Frågor</Text>
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
        case MY_QUESTIONS:
            return <MyQuestions />;
        default:
            return <RandomQuestion />;
    }
};

const NavigationBar = (
    <Navigator.NavigationBar
        routeMapper={NavigationBarContent}
        style={navBarStyles.navBar}
    />
);

const Navigation = () => (
    <Navigator
        initialRoute={routes[0]}
        navigationBar={NavigationBar}
        renderScene={renderScene}
    />
);

export default Navigation;
