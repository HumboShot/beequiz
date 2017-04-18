import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
//conceptual 'stack' navigation, 
//where each new screen is put on the top of the stack 
//and going back removes a screen from the top of the stack
import { StackNavigator } from 'react-navigation';
import ChatWithClass from './components/ChatScreen';
import  Data from './FillDb.js';
import realm from './realm.js'

class App extends Component {
    static navigationOptions = {
        title: 'Welcome'
    };
   
    render() {
        
        // We have wrapped our App component into the StackNavigator. 
        // The StackNavigator exposes the navigation properties.
       
        const { navigate } = this.props.navigation;

        //console.log(this.state)
       Data.fillDb();


        return (
            <View style={styles.container}>

                <Text >num of questions - {realm.objects('Question').length}</Text>

                <Text style={styles.text}>Welcome to beequizzz!</Text>
                <Button
                    onPress={() => navigate('Chat')}
                    title="Chat with class"
                />
            </View>
        )
        
    }

}

const Navigator = StackNavigator({
    Home: { screen: App },
    Chat: { screen: ChatWithClass }
})

const styles = {
    container: {
        padding: 5
    },
    text: {
        margin: 20,
        textAlign: 'center'
    }
}

export default Navigator;