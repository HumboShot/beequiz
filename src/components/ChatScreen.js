import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ChatScreen extends Component {
    static navigationOptions = {
        title: 'Chat with class'
    };

    render() {
        return (
            <View>
                <Text style={styles.text}>Chat with react native class!</Text>
            </View>
        )
    }
}

const styles = {
    container: {
        padding: 5
    },
    text: {
        margin: 20, 
        textAlign: 'center' 
    }

}