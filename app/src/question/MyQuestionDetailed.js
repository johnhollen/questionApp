import React, {PropTypes} from 'react';
import {
    View,
    Text,
    Modal,
    TouchableOpacity
} from 'react-native';
import {formatQuestion} from './RandomQuestion';
import styles from './MyQuestionDetailed.styles';

const MyQuestionDetailed = ({visible, onDismiss, question}) => {
    const shouldRenderContent = question !== null;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            {
                shouldRenderContent ? (
                    <View style={styles.container}>
                        <Text style={styles.questionText}>{formatQuestion(question.text)}</Text>
                        <TouchableOpacity onPress={onDismiss}>
                            <View style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>Stäng</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ) : null
            }
        </Modal>
    );
};

MyQuestionDetailed.propTypes = {
    question: PropTypes.object,
    visible: PropTypes.bool,
    onDismiss: PropTypes.func
};

export default MyQuestionDetailed;
