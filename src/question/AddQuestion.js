import React, {PropTypes, Component} from 'react';
import {
    View, Text,
    TouchableOpacity, KeyboardAvoidingView
} from 'react-native';
import Input from '../sharedComponents/Input';
import styles from './AddQuestion.styles.js';

class AddQuestion extends Component {
    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView behavior='position'>
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
                </KeyboardAvoidingView>
            </View>
        );
    }
};

export default AddQuestion;
