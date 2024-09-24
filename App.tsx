import { SafeAreaView, ScrollView,  } from 'react-native';
import React, { Component } from 'react';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';


export class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView >
          <FlatCard />
          <ElevatedCard />
          <FancyCard />
          <ActionCard />
          <ContactList></ContactList>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App