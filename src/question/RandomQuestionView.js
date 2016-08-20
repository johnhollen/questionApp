import React, {PropTypes} from 'react';
import {
    View, Text,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import LoadingIndicator from '../sharedComponents/LoadingIndicator';
import {bindActionCreators} from 'redux';
import {fetchRandomQuestion} from './redux/questionActions';
import {randomQuestionSelectors} from './redux/questionSelectors';
import styles from './RandomQuestionView.styles';
import {endsWith, isEmpty} from 'lodash';

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
        const {randomQuestion} = this.props;
        if (isEmpty(randomQuestion)) return null;

        const questionText = endsWith(randomQuestion.text, '?') ? randomQuestion.text : `${randomQuestion.text}?`;
        const answers = randomQuestion.options.map((answer, index) => {
            const buttonStyle = index === 0 ? [styles.answerButton, styles.leftAnswer] : [styles.answerButton, styles.rightAnswer];
            return (
                <TouchableOpacity onPress={() => console.log(answer.text)} key={answer._id}>
                    <View style={buttonStyle}> 
                        <Text style={styles.answerButtonText}>{answer.text}</Text>
                    </View>
                </TouchableOpacity>
            );
        });

        return (
            <View>
                <Text style={styles.mainQuestion}>{questionText}</Text>
                <View style={styles.separator} />
                <View style={styles.answerContainer}>
                    {answers}
                </View>
            </View>
        );
    },

    render() {
        const {randomQuestionIsLoading} = this.props;
        return (
            <View style={styles.container}>
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
