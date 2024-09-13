import { Text, StyleSheet, View, Image } from 'react-native';
import React, { Component } from 'react';

export default class FlatCard extends Component {
  render() {
      return (
          <View>
              <Text style={styles.sectionTitle}>FlatCard</Text>
              <View style={styles.container}>
                  <View style={[styles.card,styles.cardOne]}>
                      <Text>AAA</Text>
                      <Image source={{
                          uri: 'https://chibapcmart.com/images/products/4-zte-libero-5g-iv-brand-new-japan-1.jpg?_=1706782644',
                          headers: {
                            Pragma: 'no-cache',
                          },
                          method: 'POST',
                          body:'Product Image',
                      }}/>
                  </View>
                  <View style={[styles.card,styles.cardTwo]}>
                      <Text>BBB</Text>
                  </View>
                  <View style={[styles.card,styles.cardThree]}>
                      <Text>CCC</Text>
                  </View>
                  <View style={[styles.card,styles.cardOne]}>
                      <Text>AAA</Text>
                  </View>
              </View>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 12,
    },
    container: {
        flex: 1,
        flexDirection:'row',
    },
    card: {
        width: '20%',
        height: 100,
        margin: 10,
        borderRadius: 8,
        paddingTop:5,
        alignItems: 'center',
    },
    cardOne: {
        backgroundColor: '#FF6600',
    },
    cardTwo: {
        backgroundColor: '#624E88',
    },
    cardThree: {
        backgroundColor: '#F05A7E',
    },
});