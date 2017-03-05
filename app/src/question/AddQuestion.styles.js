import {StyleSheet} from 'react-native';

const addQuestionViewStyles = {
    container: {
        backgroundColor: '#ffffff',
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 15,
        margin: 20,
        marginTop: 35,
        borderRadius: 4,
        borderColor: 'deepskyblue',
        borderWidth: 2,
        shadowColor: '#333',
        shadowOpacity: 0.7,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 0
        },
        height: 500
    },
    title: {
        color: '#555555',
        fontFamily: 'System',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        padding: 5
    },
    provideAnswers: {
        marginTop: 20
    },
    addButton: {
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#33cc33'
    },
    closeButton: {
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#e34373',
        marginTop: 10
    },
    addButtonText: {
        fontFamily: 'System',
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 30
    }
};

export default StyleSheet.create(addQuestionViewStyles);
