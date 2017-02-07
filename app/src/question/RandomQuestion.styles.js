import {StyleSheet} from 'react-native';

const randomQuestionStyles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e34373',
        padding: 15
    },
    mainQuestion: {
        color: '#ffffff',
        fontFamily: 'System',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        textShadowColor: '#333',
        textShadowRadius: 7,
        marginTop: 70,
        textShadowOffset: {
            width: 0,
            height: 1
        },
        padding: 5
    },
    separator: {
        height: 1,
        backgroundColor: '#ffffff',
        marginTop: 40,
        marginBottom: 40,
        shadowColor: '#ffffff',
        shadowOpacity: 1,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 0
        }
    },
    answerContainer: {
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexDirection: 'column',
        padding: 5,
        height: 130,
        marginBottom: 60
    },
    answerButton: {
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
        flexDirection: 'column',
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
