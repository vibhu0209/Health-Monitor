import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';
import db from '../config';
import firebase from 'firebase';
export default class WaterDiary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewNo1: 0,

      item: null,
      dropdownHeight1: 40,
    };
  }
  componentDidMount() {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var finalDate = date + '|' + month + '|' + year;
    this.setState({
      date: finalDate,
    });
    console.log(finalDate);
  }
  async addPoints() {
    let points = this.state.previewNo1;
    console.log(points);

    db.ref('points/' + this.state.date + '/').update({
      waterPoints: points,
    });
    console.log('hello');
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.iconImage}></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Water Intake</Text>
          </View>
          <View style={styles.dateTextContainer}>
            <Text style={styles.dateText}>{this.state.date} </Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <Image
            source={require('../assets/water-chart.png')}
            style={styles.previewImage}></Image>{' '}
          <ScrollView>
            <View
              style={{
                height: RFValue(this.state.dropdownHeight),
                
              }}>
              <DropDownPicker
                items={[
                  { label: '0-1 Glass', value: 1 },
                  { label: '2-4 Glass', value: 2 },
                  { label: '5-6 Glass', value: 3 },
                  { label: '7-8 Glass', value: 4 },
                  { label: 'More than 8 Glass', value: 5 },
                ]}
                defaultValue={this.state.previewNo1}
                containerStyle={{
                  height: 40,
                  borderRadius: 20,
                  marginBottom: 10,
                }}
                onOpen={() => {
                  this.setState({ dropdownHeight1: 170 });
                }}
                onClose={() => {
                  this.setState({ dropdownHeight1: 40 });
                }}
                style={{ backgroundColor: '#ff7579' }}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{ backgroundColor: '#ff7579' }}
                labelStyle={{
                  color: 'white',
                }}
                arrowStyle={{
                  color: 'white',
                }}
                onChangeItem={(item) =>
                  this.setState({
                    previewNo1: item.value,
                  })
                }
                placeholder="Glasses"
              />
            </View>

            <TouchableOpacity
              onPress={() => this.addPoints()}
              style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}
//#FF7249
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff7579',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.1,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  iconImage: {
    width: RFValue(65),
    height: RFValue(60),
  },
  appTitleTextContainer: {
    flex: 0.6,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(20),
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: RFValue(300),
    height: RFValue(250),
    alignSelf: 'center',
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: 'contain',
  },
  dateText: {
    color: 'white',
    fontSize: RFValue(15),
  },
  
  dateTextContainer: {
    flex: 0.3,
    justifyContent: 'end',
  },
  submitButton: {
    backgroundColor: '#ff0069',
    width: 100,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    marginLeft: 130,
    alignItems: 'center',
  },
  submitButtonText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
