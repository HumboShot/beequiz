import React, { Component } from 'react';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { View, Text, Button, Alert } from 'react-native';
import realm from '../realm';


export default class Q1Screen extends Component {
    static navigationOptions = {
        title: 'Question 1'
    };



    render() {
        let q = realm.objects('Question');
        let q1 = q.filtered('id = 1')[0];
        let ans = realm.objects('Answer').filtered('questionId = 1');

        /* var radio_props = [
             { label: ans[0].answer, value: ans[0].flag },
             { label: ans[1].answer, value: ans[1].flag },
             { label: ans[2].answer, value: ans[2].flag }
         ];*/



        return (
            <View>

                <View>
                    <Text style={styles.text}> {JSON.stringify(q1.question)} </Text>
                </View>
                <View>
                    <Text style={styles.text}>answers =  {ans.length} </Text>

                </View>
                <View>

                    <View style={styles.button}>
                        <Button title={ans[0].answer} onPress={() => hanlePress(0)} ></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title={ans[1].answer} onPress={() => hanlePress(1)} ></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title={ans[2].answer} onPress={() => hanlePress(2)} ></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title='Next question' onPress={() => hanleNext()} ></Button>
                    </View>



                </View>
            </View>
        )
    }
}
hanlePress = function (i) {
    let ans = realm.objects('Answer').filtered('questionId = 1');

    if (ans[i].flag) {
        realm.write(() => {
            realm.create('Question', { id: 1, questionStatus: 1 }, true);
        });
    } else {
        realm.write(() => {
            realm.create('Question', { id: 1, questionStatus: 2 }, true);
        });
    }
    let status = realm.objects('Question').filtered('id = 1')[0].questionStatus
    Alert.alert('hej', JSON.stringify(status));
}

/*hanleNext = function (i) {
    let ans = realm.objects('Answer').filtered('questionId = 1');

    if (ans[i].flag) {
        realm.write(() => {
            realm.create('Question', { id: 1, questionStatus: 1 }, true);
        });
    } else {
        realm.write(() => {
            realm.create('Question', { id: 1, questionStatus: 2 }, true);
        });
    }
    let status = realm.objects('Question').filtered('id = 1')[0].questionStatus
    Alert.alert('hej', JSON.stringify(status));
}*/


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