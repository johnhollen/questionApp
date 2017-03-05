import {StyleSheet} from 'react-native';

const myQuestionStyles = {
    container: {
        flex: 1,
        backgroundColor: '#00a979',
        justifyContent: 'center'
    },
    myQuestionList: {
        marginTop: 70,
        marginRight: 10,
        marginLeft: 10
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 5,
        padding: 15,
        borderRadius: 4,
        backgroundColor: '#ffffff'
    },
    listItemText: {
        fontFamily: 'System',
        fontWeight: 'bold',
        color: '#555555',
        fontSize: 17,
        textAlign: 'center'
    }
};

export default StyleSheet.create(myQuestionStyles);
