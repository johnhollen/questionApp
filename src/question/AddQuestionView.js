import React, {PropTypes} from 'react';
import {
    View, Text,
    Navigator
} from 'react-native';
import Input from '../sharedComponents/Input';
import styles from './AddQuestionView.styles';

const AddQuestionView = React.createClass({
    render() {
        const Navigator = this.props.navigator;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Ställ din fråga</Text>
                <Input placeHolder='Skriv din fråga...' />
            </View>
        );
    }
});

export default AddQuestionView;
