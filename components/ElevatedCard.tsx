import { Text, StyleSheet, View, ScrollView } from 'react-native';
import React, { Component } from 'react';

export default class ElevatedCard extends Component {
  render() {
      return (
          <View>
              <Text style={styles.sectionTitle}>ElevatedCard</Text>
          
              
              <ScrollView
              showsHorizontalScrollIndicator={false}    horizontal={true} style={styles.container}>
                  
                  <View style={[styles.card,styles.cardOne]}>
                      <Text>K</Text>
                  </View>
                  <View style={[styles.card,styles.cardTwo]}>
                      <Text>K</Text>
                  </View>
                  <View style={[styles.card,styles.cardThree]}>
                      <Text>K</Text>
                  </View>
                  <View style={[styles.card,styles.cardFour]}>
                      <Text>K</Text>
                  </View>
              </ScrollView>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 12,
    },

    container: {
        padding: 8,
  }
    ,

    card: {
        fontSize: 20,
        width: 140,
        height: 100,
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: 4,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingBottom: 10,
        shadowOffset: {
            width: 100,
            height:100,
        },
        shadowColor: 'red',

    },
    cardOne: {
        backgroundColor: '#FFFFFF',
        elevation:5,
    },
    cardTwo: {
        backgroundColor: '#624E88',
        elevation:5,
    },
    cardThree: {
        backgroundColor: '#F05A7E',
        elevation:5,
    },cardFour: {
        backgroundColor: '#FF6600',
        elevation:5,
    },
    cardFive: {
        backgroundColor: '#624E88',
        elevation:5,
    },
    cardSix: {
        backgroundColor: '#F05A7E',
        elevation:5,

    },
});