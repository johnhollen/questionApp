import {StyleSheet} from 'react-native';

const randomQuestionStyles = {
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-around',
        backgroundColor: '#e373a3'
    },
    questionContainer: {
        justifyContent: 'space-between',
        alignItems: 'stretch',
        padding: 20,
        paddingTop: 40,
        marginTop: 70,
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: '#ffffff',
        borderRadius: 4
    },
    mainQuestion: {
        color: '#555555',
        fontFamily: 'System',
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'center',
        padding: 5
    },
    separator: {
        height: 1,
        backgroundColor: '#555555',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 40,
        marginBottom: 40
    },
    answerButton: {
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        marginBottom: 20
    },
    answerButtonText: {
        fontFamily: 'System',
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center'
    },
    leftAnswer: {
        backgroundColor: 'mediumslateblue'
    },
    rightAnswer: {
        backgroundColor: 'mediumseagreen'
    },
    addButton: {
        borderRadius: 100,
        backgroundColor: '#ffffff',
        height: 70,
        width: 70,
        padding: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addButtonText: {
        fontFamily: 'System',
        fontWeight: 'bold',
        color: 'deepskyblue',
        fontSize: 40,
        textAlign: 'center',
        padding: 0,
        margin: 0,
        marginTop: -5
    }
};

export default StyleSheet.create(randomQuestionStyles);
