import {StyleSheet} from 'react-native';

const navBarStyles = {
    navBar: {
        backgroundColor: '#fff',
        shadowColor: '#222222',
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowOpacity: 0.6,
        shadowRadius: 3
    },
    navBarTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 5,
        color: '#555',
        fontFamily: 'System'
    },
    navBarButtonText: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'System',
        marginBottom: 3,
        color: '#555'
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
        borderColor: '#999999',
        borderWidth: 1
    }
};

export default StyleSheet.create(navBarStyles);
