import React, {PropTypes, Component} from 'react';
import {TextInput, View} from 'react-native';
import noop from 'lodash/noop';
import styles from './Input.styles';

class Input extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(text) {
        const {onChange} = this.props;
        onChange(text);
    }

    render() {
        const {placeHolder, appearance = 'light'} = this.props;
        return (
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    placeholder={placeHolder}
                    onChangeText={this.handleInputChange}
                    keyboardAppearance={appearance}
                    returnKeyType='done'
                    placeholderTextColor='#f3f3f3'
                    multiline={true}
                />
            </View>
        );
    }
};

Input.propTypes = {
    placeHolder: PropTypes.string,
    onChange: PropTypes.func,
    appearance: PropTypes.string
};

export default Input;
