import {StyleSheet} from 'react-native';

const myQuestionStyles = {
    container: {
        flex: 1,
        backgroundColor: 'mediumspringgreen'
    },
    myQuestionList: {
        marginTop: 70,
        marginRight: 15,
        marginLeft: 15
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 5,
        padding: 15,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
        backgroundColor: 'teal',
        shadowColor: '#333',
        shadowOpacity: 0.7,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 0
        }
    },
    listItemText: {
        fontFamily: 'System',
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 17,
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
