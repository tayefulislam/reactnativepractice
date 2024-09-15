import { Text, StyleSheet, View,Pressable, Button, TouchableOpacity, Linking } from 'react-native'
import React, { Component } from 'react'

export default class ActionCard extends Component {
    render() {
      
        function openWebsite(websiteLink: string) {
            Linking.openURL(websiteLink);
        }
    return (
      <View>
            <Text style={styles.sectionTitle}>ActionCard 2</Text>
            <View>
                <Pressable onPress={()=>openWebsite('https://blooddonationen1.web.app/')}>
                    <Text>Learn More</Text>
               </Pressable>
            </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 12,
        paddingHorizontal: 10,
}

})