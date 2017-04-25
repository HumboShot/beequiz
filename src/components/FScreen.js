import React, { Component } from 'react';

import { View, Text, Button, Alert, ListView } from 'react-native';
import realm from '../realm';

export default class FScreen extends Component {
    static navigationOptions = {
        title: 'Finish'
    };

    render() {
        const { navigate } = this.props.navigation;
        let q = realm.objects('Question');
        let q_true = q.filtered('questionStatus = 1');
        let q_false = q.filtered('questionStatus = 2');
        let q_notanswered = q.filtered('questionStatus = 0');

        handleNext6 = function () {

            navigate('Home');
        }

        return (
            <View>

                <Text>FinScreen</Text>

                <View>
                    <Text style={styles.text}>Number of questions  =  {q.length} </Text>
                    <Text style={styles.text}>Number of correctly answered  =  {q_true.length} </Text>
                    <Text style={styles.text}>Number of incorrectly answered  =  {q_false.length} </Text>
                    <Text style={styles.text}>Number of not answered  =  {q_notanswered.length} </Text>


                </View>

                <View>

                    <View style={styles.button}>
                        <Button title='Back to Home' onPress={() => handleNext6()} ></Button>
                    </View>
                </View>
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
    },

    button: {
        margin: 5,
        padding: 5
    }

}