import React, {PropTypes, Component} from 'react';
import {TextInput, View} from 'react-native';
import {noop} from 'lodash';
import styles from './Input.styles';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {placeHolder, onChange} = this.props;
        return (
            <View style={styles.wrapper}>
                <TextInput style={styles.input}
                           placeholder={placeHolder}
                           onChangeText={(text) => {console.log(text)}}
                           keyboardAppearance='dark' 
                           returnKeyType='done' 
                           placeholderTextColor='#f3f3f3' />
            </View>
        );        
    }
};

Input.propTypes = {
    placeHolder: PropTypes.string,
    onChange: PropTypes.func
};

export default Input;
