import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

let stories = require('./motivation.json');
let rand = Math.floor(Math.random() * 34);
export default class Motivation extends Component {
  render() {
    console.log(rand);
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ff7579',
        }}>
        <View
          style={{
            flex: 0.1,
            alignItems: 'center',
            marginTop: 10,
            justifyContent: 'center',
          }}>
          <Text style={styles.heading}>Motivation</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 0.75,
          }}>
          <Text style={styles.quote}>{stories[rand].quote}</Text>
          <Text style={[styles.quote, styles.quoteBy]}>by</Text>
          <Text style={[styles.quote, styles.quoteAuthor]}>
            {stories[rand].author}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  heading: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },

  quote: {
    lineHeight: 15,
    paddingTop: 15,
    paddingLeft: 10,
    color: 'white',
  },
  quoteBy: {
    alignSelf: 'center',
  },
  quoteAuthor: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
