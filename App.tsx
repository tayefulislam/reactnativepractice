import { SafeAreaView, ScrollView,  } from 'react-native';
import React, { Component } from 'react';
import FlatCard from './components/FlatCard';
import EvelatedCard from './components/EvelatedCard';
import ElevatedCard from './components/ElevatedCard';

export class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <FlatCard />
       <ElevatedCard></ElevatedCard>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App