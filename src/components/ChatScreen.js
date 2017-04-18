import React, { Component } from 'react';
import { View, Text } from 'react-native';
import realm from '../realm';

export default class ChatScreen extends Component {
    static navigationOptions = {
        title: 'Chat with class'
    };

    render() {
        return (
            <View>
                <Text style={styles.text}>Num of answeres = {realm.objects('Answer').length}</Text>
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