import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Hello = React.createClass({
    render() {
        console.log(this.props);
        return (
            <View style={styles.hello}>
                <Text>Hello</Text>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    hello: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffffff",
        shadowColor: '#888',
        shadowOpacity: 0.6,
        shadowRadius: 3,
        shadowOffset: {
            height: 3,
            width: -1
        }
    }    
});

export default Hello;
