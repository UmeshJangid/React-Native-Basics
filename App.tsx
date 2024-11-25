import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatlistCards from './components/FlatlistCards';
import ElevatedCards from './components/ElevatedCards';
import FacnyCard from './components/FacnyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Learning React Native</Text>
        <FlatlistCards></FlatlistCards>
        <ElevatedCards></ElevatedCards>
        <FacnyCard></FacnyCard>
        <FacnyCard></FacnyCard>
        <ActionCard></ActionCard>
        <ContactList></ContactList>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
