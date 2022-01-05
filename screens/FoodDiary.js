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
import firebase from 'firebase';
import db from '../config';
import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';

export default class FoodDiary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewNo1: 0,
      previewNo2: 0,
      previewNo3: 0,
      previewNo4: 0,
      item: null,
      date: '',
      dropdownHeight1: 40,
      dropdownHeight2: 40,
      dropdownHeight3: 40,
      dropdownHeight4: 40,
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
    let points = Math.round(
      (this.state.previewNo1 +
        this.state.previewNo2 +
        this.state.previewNo3 +
        this.state.previewNo4) /
        4
    );
    console.log(points);

    db.ref('points/' + this.state.date + '/').update({
      foodPoints: points,
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
            <Text style={styles.appTitleText}>Food Diary</Text>
          </View>
          <View style={styles.dateTextContainer}>
            <Text style={styles.dateText}>{this.state.date} </Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <ScrollView>
            <Image
              source={require('../assets/Chart.png')}
              style={styles.previewImage}></Image>
            <View
              style={{
                height: RFValue(this.state.dropdownHeight),
                marginTop: 10,
              }}>
              <DropDownPicker
                items={[
                  { label: '1 Points', value: 1 },
                  { label: '2 Points', value: 2 },
                  { label: '3 Points', value: 3 },
                  { label: '4 Points', value: 4 },
                  { label: '5 Points', value: 5 },
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
                placeholder="8am - 12pm"
              />
            </View>
            <View
              style={{
                height: RFValue(this.state.dropdownHeight),
                marginTop: 10,
              }}>
              <DropDownPicker
                items={[
                  { label: '1 Points', value: 1 },
                  { label: '2 Points', value: 2 },
                  { label: '3 Points', value: 3 },
                  { label: '4 Points', value: 4 },
                  { label: '5 Points', value: 5 },
                ]}
                defaultValue={this.state.previewNo2}
                containerStyle={{
                  height: 40,
                  borderRadius: 20,
                  marginBottom: 10,
                }}
                onOpen={() => {
                  this.setState({ dropdownHeight2: 170 });
                }}
                onClose={() => {
                  this.setState({ dropdownHeight2: 40 });
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
                    previewNo2: item.value,
                  })
                }
                placeholder="12pm - 4pm"
              />
            </View>
            <View
              style={{
                height: RFValue(this.state.dropdownHeight),
                marginTop: 10,
              }}>
              <DropDownPicker
                items={[
                  { label: '1 Points', value: 1 },
                  { label: '2 Points', value: 2 },
                  { label: '3 Points', value: 3 },
                  { label: '4 Points', value: 4 },
                  { label: '5 Points', value: 5 },
                ]}
                defaultValue={this.state.previewNo3}
                containerStyle={{
                  height: 40,
                  borderRadius: 20,
                  marginBottom: 10,
                }}
                onOpen={() => {
                  this.setState({ dropdownHeight3: 170 });
                }}
                onClose={() => {
                  this.setState({ dropdownHeight3: 40 });
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
                    previewNo3: item.value,
                  })
                }
                placeholder="4pm - 8pm"
              />
            </View>
            <View
              style={{
                height: RFValue(this.state.dropdownHeight),
                marginTop: 10,
              }}>
              <DropDownPicker
                items={[
                  { label: '1 Points', value: 1 },
                  { label: '2 Points', value: 2 },
                  { label: '3 Points', value: 3 },
                  { label: '4 Points', value: 4 },
                  { label: '5 Points', value: 5 },
                ]}
                defaultValue={this.state.previewNo4}
                containerStyle={{
                  height: 40,
                  borderRadius: 20,
                  marginBottom: 10,
                }}
                onOpen={() => {
                  this.setState({ dropdownHeight4: 170 });
                }}
                onClose={() => {
                  this.setState({ dropdownHeight4: 40 });
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
                    previewNo4: item.value,
                  })
                }
                placeholder="8pm - 12am"
              />
            </View>
          </ScrollView>
          <TouchableOpacity
            onPress={() => this.addPoints()}
            style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
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
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: RFValue(72.5),
    height: RFValue(72.5),
  },
  appTitleTextContainer: {
    flex: 0.49,
    justifyContent: 'center',
    paddingLeft: 40,
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(25),
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
    fontSize: RFValue(14.5),
  },

  dateTextContainer: {
    flex: 0.2,
    justifyContent: 'start',
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
