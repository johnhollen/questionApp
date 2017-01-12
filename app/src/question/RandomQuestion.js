import React, {PropTypes, Component} from 'react';
import endsWith from 'lodash/endsWith';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import {
    View, Text,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import LoadingIndicator from '../sharedComponents/LoadingIndicator';
import {bindActionCreators} from 'redux';
import {fetchRandomQuestion} from './redux/questionActions';
import {
    getRandomQuestion,
    randomQuestionIsLoading
} from './redux/questionSelectors';
import styles from './RandomQuestion.styles.js';

class RandomQuestion extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {onFetchRandomQuestion} = this.props;
        onFetchRandomQuestion();
    }

    renderQuestion() {
        const {randomQuestion} = this.props;
        if (isEmpty(randomQuestion)) {
            return (
                <View>
                    <Text style={styles.mainQuestion}>Det finns inga frågor just nu.</Text>
                </View>
            );
        }

        const questionText = endsWith(randomQuestion.text, '?') ? randomQuestion.text : `${randomQuestion.text}?`;
        const answers = map(randomQuestion.options, (answer, index) => {
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
    }

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
}

RandomQuestion.propTypes = {
    onFetchRandomQuestion: PropTypes.func,
    randomQuestion: PropTypes.object,
    randomQuestionIsLoading: PropTypes.bool
};

const mapStateToProps = (state) => ({
    randomQuestion: getRandomQuestion(state),
    randomQuestionIsLoading: randomQuestionIsLoading(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onFetchRandomQuestion: fetchRandomQuestion
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RandomQuestion);
