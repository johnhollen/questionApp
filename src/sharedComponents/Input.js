import React, {PropTypes} from 'react';
import {TextInput, View} from 'react-native';
import {noop} from 'lodash';
import styles from './Input.styles';

const Input = React.createClass({
    propTypes: {
        placeHolder: PropTypes.string,
        onChange: PropTypes.func
    },

    getDefaultProps() {
        return {
            placeHolder: '',
            onChange: noop
        }
    },

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
});

export default Input;
