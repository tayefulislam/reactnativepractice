import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class FancyCard extends Component {
  render() {
      return (
          <View>
              <Text style={styles.sectionTitle}>FancyCard</Text>

              <ScrollView horizontal={true}>
              <View style={[styles.card, styles.cardElevated]}>
                  <Image style={styles.imageStyle} source={{
                      uri: 'https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/459795921_491982767086987_7406786002803195659_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGLY-X_1rvs-I28AzKH7klWwWaGlL4QezrBZoaUvhB7OgFQkl_r6bVEsy5Fr-7MIpdKCqQv6o5cgRRiuI4pP9a2&_nc_ohc=AwxS2_FPIB0Q7kNvgHsuRMn&_nc_ht=scontent.fdac5-1.fna&_nc_gid=AcgVTiPG0YEcnMqdkHKCBoj&oh=00_AYAryvlNENFuj3xDQlzXySSg-W9wk7hQ2VUFdqjDAxBmRg&oe=66EC8FEC',

                  }} />
                  <View style={styles.cardBody}>
                      <Text style={styles.cardTitle}>Dhaka</Text>
                      <Text style={styles.cardLevel}>Bangladesh</Text>
                      <Text numberOfLines={5} style={styles.cardDescription}>Tasnova Habib, a student of Ideal School, said: "I woke up in the morning to see it was raining. After getting ready for school, I could ot find any rickshaws. Eventually, it got too late, and I could not go to school. Later, I found out that many of my classmates also could not attend."</Text>
                      <Text style={styles.cardFooter}>Dhaka,Bangladesh</Text>
                    
                  </View>
              </View>
              <View style={[styles.card, styles.cardElevated]}>
                  <Image style={styles.imageStyle} source={{
                      uri: 'https://outspoken.newagebd.com/files/img/202409/6322eedad8111f773f81158756e4045a.jpg',

                  }} />
                  <View style={styles.cardBody}>
                      <Text style={styles.cardTitle}>Rivers in Dhaka, Barishal</Text>
                      <Text style={styles.cardLevel}>Bangladesh</Text>
                      <Text numberOfLines={5} style={styles.cardDescription}>‘Water levels of rivers in Dhaka, Barisal and Khulna divisions are increasing. According to meteorological agencies, a deep depression is located over Gangetic West Bengal and adjoining areas and heavy rainfall (44-88mm/24 hours) is expected over coastal areas and</Text>
                      <Text style={styles.cardFooter}>Dhaka,Bangladesh</Text>
                    
                  </View>
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
        paddingHorizontal: 10,
    },
    container: {},
    card: {
        width: 350,
        height:400 ,
        borderRadius: 6,
        marginHorizontal: 16,
        marginVertical: 12,
        

    },
    cardElevated: {
        backgroundColor: '#FF6600',
        elevation: 10,
        shadowOffset: {
            width: 1,
            height:1,
        }
        
    },
    textTitle: {},
    imageStyle: {
        height: 200,
        // borderRadius: 10,
        borderTopLeftRadius:6,

    },
    cardBody: {
        flex: 1,
        flexGrow:1,
        paddingHorizontal:10,
    },
    cardTitle: {
        color:'#FFFFFF',fontSize:24,
    },
    cardLevel: { color:'#FFFFFF',fontSize:12,marginBottom:10},
    cardDescription: { color:'#FFFFFF',fontSize:15},
    cardFooter: { color:'#FFFFFF',fontSize:10,marginTop:6},
})