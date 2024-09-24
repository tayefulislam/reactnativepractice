import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'
import React, { Component } from 'react'

export default class ContactList extends Component {

    
    render() {
        const contactList = [{
            "id": "5b2eee0a8fdd5b71c8148490",
            "age": 29,
            "name": "Campos York",
            "gender": "male",
            "company": "AVENETRO",
            "email": "camposyork@avenetro.com",
            "photo": "https://randomuser.me/api/portraits/men/3.jpg"
          },
          {
            "id": "5b2eee0a9cd29e820c10edad",
            "age": 20,
            "name": "Esperanza Boone",
            "gender": "female",
            "company": "COSMETEX",
            "email": "esperanzaboone@cosmetex.com",
            "photo": "https://randomuser.me/api/portraits/men/48.jpg"
          },
          {
            "id": "5b2eee0a582ba867abbd7ce7",
            "age": 39,
            "name": "Holden Barry",
            "gender": "male",
            "company": "CODAX",
            "email": "holdenbarry@codax.com",
            "photo": "https://randomuser.me/api/portraits/men/45.jpg"
          },
          {
            "id": "5b2eee0afe5f471c63fa7acf",
            "age": 22,
            "name": "Daniels Barlow",
            "gender": "male",
            "company": "OPTICOM",
            "email": "danielsbarlow@opticom.com",
            "photo": "https://randomuser.me/api/portraits/men/13.jpg"
          },
          {
            "id": "5b2eee0af534aab9ece2f890",
            "age": 23,
            "name": "Leigh Burris",
            "gender": "female",
            "company": "KINETICUT",
            "email": "leighburris@kineticut.com",
            "photo": "https://randomuser.me/api/portraits/men/43.jpg"
          },
          {
            "id": "5b2eee0ac42f319d1c980d93",
            "age": 35,
            "name": "Floyd Little",
            "gender": "male",
            "company": "FURNAFIX",
            "email": "floydlittle@furnafix.com",
            "photo": "https://randomuser.me/api/portraits/men/40.jpg"
          },
          {
            "id": "5b2eee0a20b705a9c1d4b8c9",
            "age": 28,
            "name": "Josie Henson",
            "gender": "female",
            "company": "MICROLUXE",
            "email": "josiehenson@microluxe.com",
            "photo": "https://randomuser.me/api/portraits/men/43.jpg"
          },
          {
            "id": "5b2eee0a6fb14c569982fa9d",
            "age": 37,
            "name": "Carrillo Harmon",
            "gender": "male",
            "company": "PHOTOBIN",
            "email": "carrilloharmon@photobin.com",
            "photo": "https://randomuser.me/api/portraits/men/38.jpg"
          },
          {
            "id": "5b2eee0a956cbb97ebf666c7",
            "age": 20,
            "name": "Wilkerson Zamora",
            "gender": "male",
            "company": "EVEREST",
            "email": "wilkersonzamora@everest.com",
            "photo": "https://randomuser.me/api/portraits/men/42.jpg"
          },
          {
            "id": "5b2eee0a8c166f1515f51513",
            "age": 27,
            "name": "Robles Romero",
            "gender": "male",
            "company": "MAKINGWAY",
            "email": "roblesromero@makingway.com",
            "photo": "https://randomuser.me/api/portraits/men/21.jpg"
          },
          {
            "id": "5b2eee0a7f5b9af99637f6e0",
            "age": 40,
            "name": "Staci Hudson",
            "gender": "female",
            "company": "EXOPLODE",
            "email": "stacihudson@exoplode.com",
            "photo": "https://randomuser.me/api/portraits/men/33.jpg"
          },
          {
            "id": "5b2eee0a323805f237217ef3",
            "age": 22,
            "name": "Benjamin Casey",
            "gender": "male",
            "company": "HARMONEY",
            "email": "benjamincasey@harmoney.com",
            "photo": "https://randomuser.me/api/portraits/men/50.jpg"
          },
          {
            "id": "5b2eee0a1066bbb9d00b729d",
            "age": 23,
            "name": "Green Ochoa",
            "gender": "male",
            "company": "MEDCOM",
            "email": "greenochoa@medcom.com",
            "photo": "https://randomuser.me/api/portraits/men/41.jpg"
          },
          {
            "id": "5b2eee0a991a448593d9e9b9",
            "age": 25,
            "name": "Noreen Bradley",
            "gender": "female",
            "company": "MIXERS",
            "email": "noreenbradley@mixers.com",
            "photo": "https://randomuser.me/api/portraits/men/23.jpg"
          },
          {
            "id": "5b2eee0aa986bb818b67983c",
            "age": 30,
            "name": "Ellis Lynch",
            "gender": "male",
            "company": "GLEAMINK",
            "email": "ellislynch@gleamink.com",
            "photo": "https://randomuser.me/api/portraits/men/41.jpg"
          },
          {
            "id": "5b2eee0a45146bd6c166ffdb",
            "age": 40,
            "name": "Mara Patrick",
            "gender": "female",
            "company": "DIGIGEN",
            "email": "marapatrick@digigen.com",
            "photo": "https://randomuser.me/api/portraits/men/27.jpg"
          },
          {
            "id": "5b2eee0a06886543e3a17aa8",
            "age": 35,
            "name": "Ashley Torres",
            "gender": "male",
            "company": "QNEKT",
            "email": "ashleytorres@qnekt.com",
            "photo": "https://randomuser.me/api/portraits/men/25.jpg"
          },
          {
            "id": "5b2eee0a042b6d2148655f33",
            "age": 39,
            "name": "Fields Johnson",
            "gender": "male",
            "company": "MEDMEX",
            "email": "fieldsjohnson@medmex.com",
            "photo": "https://randomuser.me/api/portraits/men/15.jpg"
            },]

    return (
      <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView style={styles.container}
            scrollEnabled={false}>
                {contactList.map(({ id,name,company,photo,email}) => (
                    <View key={id} style={styles.userCard}>
                      
                        <Image style={styles.userImage}
                            source={{
                                uri:photo
                            }} />
                          <Text style={styles.userName}>{name} / {company} </Text>
                        
                        <Text style={styles.userEmail}> Email : { email}</Text>


                    </View>
                ))}
                

           </ScrollView>
            
      </View>
    )
  }
}

const styles = StyleSheet.create({
    headingText: {},
    container: {},
    userCard: {
        alignItems: 'center',
        marginVertical:20,
    },
    userImage: {
        height: 300,
        width: 300,
        borderRadius:300/2,
    },
    userName: {
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight:'bold',
    },userEmail:{},
    
    
})