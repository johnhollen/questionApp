import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addQuestionIsShowing} from './redux/questionSelectors';
import {showOrHideAddQuestionModal} from './redux/questionActions';
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Modal
} from 'react-native';
import Input from '../sharedComponents/Input';
import styles from './AddQuestion.styles';

export const CREATING = 'CREATING';
export const LOADING = 'LOADING';
export const CREATED = 'CREATED';

class AddQuestion extends Component {
    constructor(props) {
        super(props);
        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss() {
        const {onClose} = this.props;
        onClose(false);
    }

    renderCreateMode() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Ställ din fråga</Text>
                <Input placeHolder='Skriv din fråga...' />
                <Text style={[styles.title, styles.provideAnswers]}>Ange dina svar</Text>
                <Input placeHolder='Första svaret...' />
                <Input placeHolder='Andra svaret...' />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => console.log('Add button press')}>
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
        const {createState} = this.props;
        switch (createState) {
            case CREATING:
                return this.renderCreateMode();
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
    onClose: PropTypes.func,
    visible: PropTypes.bool
};

const mapStateToProps = (state) => ({
    visible: addQuestionIsShowing(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onClose: showOrHideAddQuestionModal
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);
