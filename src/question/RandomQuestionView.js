import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchRandomQuestion} from './redux/questionActions';
import {randomQuestionSelectors} from './redux/questionSelectors';

const RandomQuestionView = React.createClass({
    componentWillMount() {
        const {actions} = this.props;
        actions.fetchRandomQuestion();
    },

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

function mapStateToProps(state) {
    const randomQuestion = randomQuestionSelectors.data(state);
    const loading = randomQuestionSelectors.loading(state);

    return {
        randomQuestion,
        loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            fetchRandomQuestion
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomQuestionView);
