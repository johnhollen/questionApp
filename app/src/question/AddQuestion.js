import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Modal
} from 'react-native';
import {addQuestionIsShowing, getAddQuestionViewMode} from './redux/questionSelectors';
import {showOrHideAddQuestionModal, createQuestion} from './redux/questionActions';
import LoadingIndicator from '../sharedComponents/LoadingIndicator';
import Input from '../sharedComponents/Input';
import styles from './AddQuestion.styles';

export const CREATING = 'CREATING';
export const LOADING = 'LOADING';
export const CREATED = 'CREATED';

class AddQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionText: '',
            firstAnswer: '',
            secondAnswer: ''
        };
        this.onDismiss = this.onDismiss.bind(this);
        this.handleQuestionTextChange = this.handleQuestionTextChange.bind(this);
        this.handleFirstAnswerTextChange = this.handleFirstAnswerTextChange.bind(this);
        this.handleSecondAnswerTextChange = this.handleSecondAnswerTextChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
    }

    onDismiss() {
        const {onClose} = this.props;
        onClose(false);
    }

    handleQuestionTextChange(text) {
        this.setState({questionText: text});
    }

    handleFirstAnswerTextChange(text) {
        this.setState({firstAnswer: text})
    }

    handleSecondAnswerTextChange(text) {
        this.setState({secondAnswer: text})
    }

    handleCreate() {
        const {questionText, firstAnswer, secondAnswer} = this.state;
        const {onCreateQuestion} = this.props;
        onCreateQuestion({
            questionText,
            firstAnswer,
            secondAnswer
        });
    }

    renderCreateMode() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Ställ din fråga</Text>
                <Input placeHolder='Skriv din fråga...' onChange={this.handleQuestionTextChange} />
                <Text style={[styles.title, styles.provideAnswers]}>Ange dina svar</Text>
                <Input placeHolder='Första svaret...' onChange={this.handleFirstAnswerTextChange} />
                <Input placeHolder='Andra svaret...' onChange={this.handleSecondAnswerTextChange} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={this.handleCreate}>
                        <View style={styles.addButton}>
                            <Text style={styles.addButtonText}>Skapa</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onDismiss}>
                        <View style={styles.closeButton}>
                            <Text style={styles.addButtonText}>Avbryt</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    getViewToRender() {
        const {viewMode} = this.props;
        switch (viewMode) {
            case CREATING:
                return this.renderCreateMode();
            case LOADING:
                return (
                    <View style={styles.container}>
                        <LoadingIndicator loading={true} color='#ffffff' size='large' />
                    </View>
                );
            default:
                return this.renderCreateMode();
        }
    }

    render() {
        const {visible} = this.props;
        const view = this.getViewToRender();
        return (
            <Modal
                animationType='slide'
                transparent={true}
                visible={visible}
            >
                {view}
            </Modal>
        );
    }
}

AddQuestion.propTypes = {
    onCreateQuestion: PropTypes.func,
    onClose: PropTypes.func,
    visible: PropTypes.bool,
    viewMode: PropTypes.string
};

const mapStateToProps = (state) => ({
    visible: addQuestionIsShowing(state),
    viewMode: getAddQuestionViewMode(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onCreateQuestion: createQuestion,
    onClose: showOrHideAddQuestionModal
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);
