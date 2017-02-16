import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    ListView,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import truncate from 'lodash/truncate';
import LoadingIndicator from '../sharedComponents/LoadingIndicator';
import {myQuestionsAreLoading, getMyQuestions} from './redux/questionSelectors';
import {fetchMyQuestions} from './redux/questionActions';
import {formatQuestion} from './RandomQuestion';
import styles from './MyQuestions.styles';

const QuestionListItem = ({question, onClick}) => {
    const {options} = question;
    const sumOfAnswers = options[0].counter + options[1].counter;
    const text = truncate(question.text, {
        length: 20,
        omission: '...?'
    });

    return (
        <TouchableOpacity onPress={() => onClick(question)}>
            <View style={styles.listItem}>
                <Text style={styles.listItemText}>{formatQuestion(text)}</Text>
                <Text style={styles.listItemText}>{sumOfAnswers} svar</Text>
            </View>
        </TouchableOpacity>
    );
};

QuestionListItem.propTypes = {
    question: PropTypes.object,
    onClick: PropTypes.func
};

class MyQuestions extends Component {
    constructor(props) {
        super(props);
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row, nextRow) => row !== nextRow
        });
        this.handleQuestionClick = this.handleQuestionClick.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    componentWillMount() {
        const {onFetchMyQuestions} = this.props;
        onFetchMyQuestions();
    }

    handleQuestionClick(question) {
        console.log(question);
    }

    renderRow(question) {
        return (
            <QuestionListItem
                key={question._id}
                question={question}
                onClick={this.handleQuestionClick}
            />
        );
    }

    render() {
        const {isLoading, myQuestions} = this.props;

        return (
            <View style={styles.container}>
                <LoadingIndicator loading={isLoading} size="large" color="#ffffff">
                    <ListView
                        contentContainerStyle={styles.myQuestionList}
                        dataSource={this.dataSource.cloneWithRows(myQuestions)}
                        renderRow={this.renderRow}
                        removeClippedSubviews={false}
                    />
                </LoadingIndicator>
            </View>
        );
    }
}

MyQuestions.propTypes = {
    isLoading: PropTypes.bool,
    myQuestions: PropTypes.array,
    onFetchMyQuestions: PropTypes.func
};

const mapStateToProps = (state) => ({
    myQuestions: getMyQuestions(state),
    isLoading: myQuestionsAreLoading(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onFetchMyQuestions: fetchMyQuestions
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MyQuestions);
