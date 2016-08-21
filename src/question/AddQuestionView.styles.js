import {StyleSheet} from 'react-native';

const addQuestionViewStyles = {
    container: {
        backgroundColor: 'deepskyblue',
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 15,
        paddingTop: 50
    },
    title: {
        color: '#ffffff',
        fontFamily: 'System',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        textShadowColor: '#333',
        textShadowRadius: 7,
        textShadowOffset: {
            width: 0,
            height: 1
        },
        padding: 5
    },
    provideAnswers: {
        marginTop: 20
    },
    addButton: {
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        shadowColor: '#333',
        shadowOpacity: 0.7,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 0
        },
        backgroundColor: '#e34373',
        marginTop: 30
    },
    addButtonText: {
        fontFamily: 'System',
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center'
    }
};

export default StyleSheet.create(addQuestionViewStyles);
