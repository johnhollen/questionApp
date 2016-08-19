import React, {PropTypes} from 'react';
import {
    View, Text,
    TouchableHighlight, StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import LoadingIndicator from '../sharedComponents/LoadingIndicator';
import {bindActionCreators} from 'redux';
import {fetchRandomQuestion} from './redux/questionActions';
import {randomQuestionSelectors} from './redux/questionSelectors';

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e34373'
    },
    text: {
        color: '#ffffff',
        fontFamily: 'System'
    }
});

const RandomQuestionView = React.createClass({
    propTypes: {
        actions: PropTypes.object,
        randomQuestion: PropTypes.object,
        randomQuestionIsLoading: PropTypes.bool
    },

    componentWillMount() {
        const {actions} = this.props;
        actions.fetchRandomQuestion();
    },

    renderQuestion() {
        return (
            <Text style={style.text}>QuestionView</Text>
        );
    },

    render() {
        const {randomQuestionIsLoading} = this.props;
        return (
            <View style={style.container}>
                <LoadingIndicator loading={randomQuestionIsLoading} size='large' color='#ffffff'>
                    {this.renderQuestion()}          
                </LoadingIndicator>
            </View>
        );
    }
});

function mapStateToProps(state) {
    const randomQuestion = randomQuestionSelectors.data(state);
    const randomQuestionIsLoading = randomQuestionSelectors.randomQuestionIsLoading(state);

    return {
        randomQuestion,
        randomQuestionIsLoading
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
