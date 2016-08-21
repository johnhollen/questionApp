import {StyleSheet} from 'react-native';

const addQuestionViewStyles = {
    container: {
        backgroundColor: 'deepskyblue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
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
    }
};

export default StyleSheet.create(addQuestionViewStyles);
