import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const World = React.createClass({
    render() {
        return (
            <View style={styles.world}>
                <Text>World</Text>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    world: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffffff",
        shadowColor: '#888',
        shadowOpacity: 0.6,
        shadowRadius: 10
    }
});

export default World;
