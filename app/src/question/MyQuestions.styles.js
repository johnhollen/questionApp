import {StyleSheet} from 'react-native';

const myQuestionStyles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#ff6633',
        padding: 15
    },
    myQuestionList: {
        alignSelf: 'stretch',
        marginTop: 60,
        flex: 1
    },
    listItem: {
        marginTop: 5,
        marginBottom: 5,
        padding: 15,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
        backgroundColor: '#ee5533'
    },
    listItemText: {
        fontFamily: 'System',
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
        textShadowColor: '#333',
        textShadowRadius: 7,
        textShadowOffset: {
            width: 0,
            height: 1
        }
    }
};

export default StyleSheet.create(myQuestionStyles);
