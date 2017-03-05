import React, {PropTypes} from 'react';
import {
    View,
    Text,
    Modal,
    TouchableOpacity
} from 'react-native';
import map from 'lodash/map';
import {formatQuestion} from './RandomQuestion';
import BarChart from '../sharedComponents/BarChart';
import styles from './MyQuestionDetailed.styles';

const MyQuestionDetailed = ({visible, onDismiss, question}) => {
    const shouldRenderContent = question !== null;

    const colors = ['mediumslateblue', 'mediumseagreen'];

    const barChartData = shouldRenderContent ? map(question.options, (option, index) => ({
        label: option.text,
        count: option.counter,
        color: colors[index]
    })) : [];

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
                        <BarChart data={barChartData} />
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
