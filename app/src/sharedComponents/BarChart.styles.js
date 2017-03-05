import {StyleSheet} from 'react-native';

const BarChartStyles = {
    container: {
        padding: 2
    },
    barContainer: {
        marginTop: 15,
        marginBottom: 15
    },
    label: {
        color: '#555555',
        fontFamily: 'System',
        fontWeight: 'bold',
        fontSize: 20
    },
    barBackground: {
        height: 24,
        marginTop: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        padding: 2
    },
    bar: {
        height: 20,
        backgroundColor: 'green',
        borderRadius: 20
    }
};

export default StyleSheet.create(BarChartStyles);
