import {StyleSheet} from 'react-native';

const BarChartStyles = {
    container: {
        padding: 10
    },
    barContainer: {
        marginTop: 10,
        marginBottom: 10
    },
    label: {
        color: 'white',
        fontFamily: 'System',
        fontWeight: 'bold',
        fontSize: 20,
        textShadowColor: '#333',
        textShadowRadius: 4,
        textShadowOffset: {
            width: 0,
            height: 1
        }
    },
    bar: {
        height: 20,
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#333',
        shadowRadius: 4,
        shadowOpacity: 0.7,
        shadowOffset: {
            width: 0,
            height: 1
        }
    }
};

export default StyleSheet.create(BarChartStyles);
