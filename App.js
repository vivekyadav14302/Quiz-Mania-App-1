import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native';
import Login from './login'
import Welcome from './welcome'
import StackNavigation from './stackNavigation';

export default function App() {
  return (
   <NavigationContainer>
     <StackNavigation></StackNavigation>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
