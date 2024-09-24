import { Text, StyleSheet, View, Linking, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class ActionCard extends Component {
    render() {
        function openWebsite(websiteLink: string) {
            Linking.openURL(websiteLink);
      }
        
    return (
      <View>
            <Text style={styles.headingText} >Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>Learn More About Flood In Bangladesh</Text>
                </View>

                <Image style={styles.cardImage}
                    source={{
                    uri:'https://chibapcmart.com/images/products/16-macbook-air-i5-4gb-ram-128gb-ssd-a-reliable-lightweight-powerhouse-for-everyday-use-1.jpg?_=1726946604'
                    }} />
                
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={2} >Sometimes, you might be getting encoded image data from a REST API call. You can use the 'data:' URI scheme to use these images. Same as for network resources, you will need to manually specify the dimensions of your image.</Text>
                    
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                    onPress={()=>openWebsite('https://reactnative.dev/docs/touchableopacity')}>
                       <Text> Profile Link</Text>
                    </TouchableOpacity>
                </View>


            </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 25,
        fontWeight: 'semibold',
        paddingHorizontal:10,
    },
    card: {
        height: 480,
        width: 340,
        backgroundColor: '#87A2FF',
        borderRadius: 10,
        marginHorizontal: 30,
        marginVertical:8,
       
    
    },
    elevatedCard: {},
    headingContainer: {},
    headerText: {},
    cardImage: {
        height:400,
    },
    bodyContainer: {},
    footerContainer:{},
    
    
})