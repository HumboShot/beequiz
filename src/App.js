import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
//conceptual 'stack' navigation, 
//where each new screen is put on the top of the stack 
//and going back removes a screen from the top of the stack
import { StackNavigator } from 'react-navigation';
import Q1 from './components/Q1Screen';
import  Data from './FillDb.js';
import realm from './realm.js'

class App extends Component {
    static navigationOptions = {
        title: 'Welcome to BeeQuiz'
    };
   
    render() {
        
        // We have wrapped our App component into the StackNavigator. 
        // The StackNavigator exposes the navigation properties.
       
        const { navigate } = this.props.navigation;

        //console.log(this.state)
      // Data.fillDb();


        return (
            <View style={styles.container}>

                <Text >num of questions - {realm.objects('Question').length}</Text>

                <Text style={styles.text}>Welcome to beequizzz!</Text>
                <Button
                    onPress={() => navigate('Question_1')}
                    title="Start Quiz"
                />
            </View>
        )
        
    }

}

const Navigator = StackNavigator({
    Home: { screen: App },
    Question_1: { screen: Q1 }
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