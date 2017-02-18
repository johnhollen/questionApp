import {StyleSheet} from 'react-native';

const randomQuestionStyles = {
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-around',
        backgroundColor: '#e34373'
    },
    questionContainer: {
        justifyContent: 'space-between',
        alignItems: 'stretch',
        padding: 20,
        paddingTop: 40,
        marginTop: 70,
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: '#cc325e',
        borderRadius: 4,
        borderColor: 'white',
        borderWidth: 1,
        shadowColor: '#333',
        shadowOpacity: 0.7,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 0
        }
    },
    mainQuestion: {
        color: 'white',
        fontFamily: 'System',
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'center',
        padding: 5,
        textShadowColor: '#333',
        textShadowRadius: 7,
        textShadowOffset: {
            width: 0,
            height: 1
        }
    },
    separator: {
        height: 1,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        shadowColor: 'white',
        shadowOpacity: 1,
        shadowRadius: 3,
        marginTop: 40,
        marginBottom: 40,
        shadowOffset: {
            width: 0,
            height: 0
        }
    },
    answerButton: {
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        shadowColor: '#333',
        marginBottom: 20,
        shadowOpacity: 0.7,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 0
        }
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
        backgroundColor: 'deepskyblue',
        height: 70,
        width: 70,
        padding: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderWidth: 1,
        shadowColor: '#333',
        shadowOpacity: 0.7,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 0
        }
    },
    addButtonText: {
        fontFamily: 'System',
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 40,
        textAlign: 'center',
        padding: 0,
        margin: 0,
        marginTop: -5
    }
};

export default StyleSheet.create(randomQuestionStyles);
