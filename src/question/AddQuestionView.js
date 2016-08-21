import React, {PropTypes} from 'react';
import {
    View, Text,
    TouchableOpacity
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
                <Text style={[styles.title, styles.provideAnswers]}>Ange dina svar</Text>
                <Input placeHolder='Första svaret...' />
                <Input placeHolder='Andra svaret...' />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => {console.log('Add button press')}}>
                        <View style={styles.addButton}>
                            <Text style={styles.addButtonText}>Skapa</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
});

export default AddQuestionView;
