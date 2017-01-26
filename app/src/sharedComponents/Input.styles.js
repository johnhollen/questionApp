import {StyleSheet} from 'react-native';

const inputStyles = {
    input: {
        height: 40,
        fontFamily: 'System',
        fontWeight: 'bold',
        fontSize: 18,
        flex: 1,
        color: '#ffffff',
        paddingTop: 3
    },
    wrapper: {
        flexDirection: 'row',
        margin: 10,
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 4,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.08)'
    }
};

export default StyleSheet.create(inputStyles);
