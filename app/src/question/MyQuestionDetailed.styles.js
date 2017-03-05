import {StyleSheet} from 'react-native';

const MyQuestionDetailedStyles = {
    container: {
        backgroundColor: '#ffffff',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        padding: 15,
        margin: 20,
        marginTop: 35,
        borderRadius: 4,
        borderColor: 'teal',
        borderWidth: 2,
        shadowColor: '#333',
        shadowOpacity: 0.7,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 0
        },
        height: 450
    },
    questionText: {
        color: '#555555',
        fontFamily: 'System',
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center',
        padding: 5
    },
    closeButton: {
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#e34373',
        marginTop: 10
    },
    closeButtonText: {
        fontFamily: 'System',
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center'
    }
};

export default StyleSheet.create(MyQuestionDetailedStyles);
