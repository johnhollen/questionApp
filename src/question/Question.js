import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

const QuestionView = React.createClass({
    render() {
        return (
            <View style={style.container}>
                <Text style={style.text}>QuestionView</Text>
            </View>
        );
    }
});

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e34373'
    },
    text: {
        color: '#ffffff'
    }
});

export default QuestionView;
