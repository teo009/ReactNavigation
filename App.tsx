import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainStackNavigator from './src/navigators/MainStackNavigator';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <MainStackNavigator />
      
    </NavigationContainer>
  );
}