import { SafeAreaView, ScrollView,  } from 'react-native';
import React, { Component } from 'react';
import FlatCard from './components/FlatCard';

export class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <FlatCard />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App