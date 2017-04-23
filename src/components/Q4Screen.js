import React, { Component } from 'react';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { View, Text, Button, Alert } from 'react-native';
import realm from '../realm';

export default class Q4Screen extends Component {
    static navigationOptions = {
        title: 'Question 4'
    };



    render() {
const { navigate } = this.props.navigation;

        let q = realm.objects('Question');
        let q1 = q.filtered('id = 4')[0];
        let ans = realm.objects('Answer').filtered('questionId = 4');

handleNext4 = function () {
   
    navigate('Question_5');
}

        return (
            <View>

                <Text>Q4Screen</Text>
                <View>
                    <Text style={styles.text}> {JSON.stringify(q1.question)} </Text>
                </View>
                <View>
                    <Text style={styles.text}>answers =  {ans.length} </Text>

                </View>
                <View>

                    <View style={styles.button}>
                        <Button title={ans[0].answer} onPress={() => handlePress4(0)} ></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title={ans[1].answer} onPress={() => handlePress4(1)} ></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title={ans[2].answer} onPress={() => handlePress4(2)} ></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title='Next question' onPress={() => handleNext4()} ></Button>
                    </View>
                </View>
            </View>
        )
    }
}

handlePress4 = function (i) {
    let ans = realm.objects('Answer').filtered('questionId = 4');

    if (ans[i].flag) {
        realm.write(() => {
            realm.create('Question', { id: 4, questionStatus: 1 }, true);
        });
         Alert.alert('Your answere is Correct');
    } else {
        realm.write(() => {
            realm.create('Question', { id: 4, questionStatus: 2 }, true);
        });
        Alert.alert('Your answere is Incorrect');
    }
  
}




const styles = {
    container: {
        padding: 5
    },
    text: {
        margin: 20,
        textAlign: 'center'
    },

    button: {
        margin: 5,
        padding: 5
    }

}