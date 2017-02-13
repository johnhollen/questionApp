import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    ListView,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoadingIndicator from '../sharedComponents/LoadingIndicator';
import {myQuestionsAreLoading, getMyQuestions} from './redux/questionSelectors';
import {fetchMyQuestions} from './redux/questionActions';
import styles from './MyQuestions.styles';

const QuestionListItem = ({question}) => (
    <TouchableOpacity onPress={() => {}}>
        <View style={styles.listItem}>
            <Text style={styles.listItemText}>{question.text}</Text>
        </View>
    </TouchableOpacity>
);

QuestionListItem.propTypes = {
    question: PropTypes.object
};

class MyQuestions extends Component {
    constructor(props) {
        super(props);
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row, nextRow) => row !== nextRow
        });
    }

    componentWillMount() {
        const {onFetchMyQuestions} = this.props;
        onFetchMyQuestions();
    }

    renderRow(question) {
        return (
            <QuestionListItem
                key={question._id}
                question={question}
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
