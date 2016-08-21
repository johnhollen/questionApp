import React, {PropTypes} from 'react';
import {
    View, Text,
    Navigator
} from 'react-native';
import styles from './AddQuestionView.styles';

const AddQuestionView = React.createClass({
    render() {
        const Navigator = this.props.navigator;
        return (
            <View style={styles.container}>
                <Text>Tjenare</Text>
            </View>
        );
    }
});

export default AddQuestionView;
