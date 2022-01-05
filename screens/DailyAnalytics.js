import React, { Component } from 'react';
import { Text, View,  StyleSheet, ScrollView , StatusBar,} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { LineChart } from 'react-native-line-chart';

export default class DailyAnalytics extends Component {
  constructor() {
    super();
    this.state = {
      waterPoints: 0,
      foodPoints: 0,
      excercisePoints: 0,
      date: '',
      data1: [],
      data2: [],
    };
  }

  database() {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var finalDate = date + '|' + month + '|' + year;
    this.setState({
      date: finalDate,
    });
    console.log(finalDate);
    var readPoints = db.ref('points/' + finalDate + '/');
    readPoints.on('value', (data) => {
      var pointsVal = data.val();
      console.log(pointsVal);
      this.setState({
        waterPoints: pointsVal.waterPoints,
        foodPoints: pointsVal.foodPoints,
        excercisePoints: pointsVal.excercisePoints,
      });
    });
    console.log(this.state.foodPoints);
  }
  componentDidMount() {
    this.setState({});
    this.database();
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LineChart
          data={{
            labels: ['WaterPoints', 'FoodPoints', 'ExercisePoints'],
            datasets: [
              {
                data: [
                  this.state.waterPoints,
                  this.state.foodPoints,
                  this.state.excercisePoints,
                ],
              },
            ],
          }}
          width={325} // from react-native
          height={275}
          chartConfig={{
            backgroundColor: '#ff7579',
            backgroundGradientFrom: '#ff7579',
            backgroundGradientTo: '#ff7579',
            decimalPlaces: 0, 
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 30,
            },
            
          }}
          bezier
          style={{
            marginVertical: 10,
            borderRadius: 30,
          }}
          
        />
      </View>
    );
  }
}
