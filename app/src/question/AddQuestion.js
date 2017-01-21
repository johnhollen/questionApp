import React, {PropTypes, Component} from 'react';
import {
    View, Text,
    TouchableOpacity, KeyboardAvoidingView
} from 'react-native';
import Input from '../sharedComponents/Input';
import styles from './AddQuestion.styles.js';

class AddQuestion extends Component {
    render() {
        const {close} = this.props;
        return (
            <KeyboardAvoidingView behavior='padding'>
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
                        <TouchableOpacity onPress={close}>
                            <View style={styles.closeButton}>
                                <Text style={styles.addButtonText}>Avbryt</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

AddQuestion.propTypes = {
    close: PropTypes.func
};

export default AddQuestion;
