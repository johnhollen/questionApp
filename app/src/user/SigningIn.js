import React from 'react';
import {
    View,
    Text
} from 'react-native';
import LoadingIndicator from '../sharedComponents/LoadingIndicator';
import styles from './SigningIn.styles';

const SigningIn = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Loggar in</Text>
        <LoadingIndicator loading={true} color="#ffffff" size="large" />
    </View>
);

export default SigningIn;
