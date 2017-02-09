import {StyleSheet} from 'react-native';

const navBarStyles = {
    navBar: {
        backgroundColor: '#ffffff'
    },
    navBarTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 5,
        color: '#444444',
        fontFamily: 'System'
    },
    navBarButtonText: {
        fontSize: 15,
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
        marginTop: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 12,
        paddingRight: 12,
        borderStyle: 'solid',
        borderColor: '#eeeeee',
        borderWidth: 1
    }
};

export default StyleSheet.create(navBarStyles);
