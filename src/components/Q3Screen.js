import React, { Component } from 'react';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { View, Text, Button, Alert } from 'react-native';
import realm from '../realm';

export default class Q3Screen extends Component {
    static navigationOptions = {
        title: 'Question 3'
    };



    render() {
const { navigate } = this.props.navigation;

        let q = realm.objects('Question');
        let q1 = q.filtered('id = 3')[0];
        let ans = realm.objects('Answer').filtered('questionId = 3');

handleNext = function () {
   
    navigate('Question_4');
}

        return (
            <View>

                <Text>Q3Screen</Text>
                <View>
                    <Text style={styles.text}> {JSON.stringify(q1.question)} </Text>
                </View>
                <View>
                    <Text style={styles.text}>answers =  {ans.length} </Text>

                </View>
                <View>

                    <View style={styles.button}>
                        <Button title={ans[0].answer} onPress={() => handlePress(0)} ></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title={ans[1].answer} onPress={() => handlePress(1)} ></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title={ans[2].answer} onPress={() => handlePress(2)} ></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title='Next question' onPress={() => handleNext()} ></Button>
                    </View>
                </View>
            </View>
        )
    }
}

handlePress = function (i) {
    let ans = realm.objects('Answer').filtered('questionId = 3');

    if (ans[i].flag) {
        realm.write(() => {
            realm.create('Question', { id: 3, questionStatus: 1 }, true);
        });
    } else {
        realm.write(() => {
            realm.create('Question', { id: 3, questionStatus: 2 }, true);
        });
    }
    let status = realm.objects('Question').filtered('id = 3')[0].questionStatus
    Alert.alert('hej', JSON.stringify(status));
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