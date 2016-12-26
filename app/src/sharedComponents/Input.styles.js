import {StyleSheet} from 'react-native';

const inputStyles = {
    input: {
        height: 40,
        padding: 10,
        fontFamily: 'System',
        fontWeight: 'bold',
        flex: 1,
        color: '#ffffff',
        backgroundColor: 'rgba(255, 255, 255, 0.08)'
    },
    wrapper: {
        flexDirection: 'row',
        margin: 10,
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 4
    }    
};

export default StyleSheet.create(inputStyles);
