import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
//conceptual 'stack' navigation, 
//where each new screen is put on the top of the stack 
//and going back removes a screen from the top of the stack
import { StackNavigator } from 'react-navigation';
import Q1 from './components/Q1Screen';
import Q2 from './components/Q2Screen';
import Q3 from './components/Q3Screen';
import Q4 from './components/Q4Screen';
import Q5 from './components/Q5Screen';
import Finish from './components/FScreen';
import Data from './FillDb.js';
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



        return (
            <View style={styles.container}>
                <Button
                    onPress={() => nulstilData()} title='Reset Quiz'
                />

                <Text >num of questions - {realm.objects('Question').length}</Text>

                <Text style={styles.text}>Welcome to beequizzz!</Text>
                <Button
                    onPress={() => navigate('Question_1')}
                    title='Start Quiz'
                />
            </View>
        )

    }

}
nulstilData = function () {
    Data.fillDb();
}


const Navigator = StackNavigator({
    Home: { screen: App },
    Question_1: { screen: Q1 },
    Question_2: { screen: Q2 },
    Question_3: { screen: Q3 },
    Question_4: { screen: Q4 },
    Question_5: { screen: Q5 },
    Finish: { screen: Finish }
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