import {StyleSheet} from 'react-native';

const randomQuestionStyles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-around',
        backgroundColor: '#e34373'
    },
    mainQuestionContainer: {
        height: 170,
        backgroundColor: '#cc325e',
        justifyContent: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 1
    },
    mainQuestion: {
        color: 'white',
        fontFamily: 'System',
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'center',
        marginTop: 40,
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
        shadowOffset: {
            width: 0,
            height: 0
        }
    },
    answerContainer: {
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexDirection: 'column',
        padding: 20,
        height: 160,
        marginRight: 15,
        marginLeft: 15,
        backgroundColor: '#cc325e',
        borderRadius: 4,
        borderColor: 'white',
        borderWidth: 1
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
