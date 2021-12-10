import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import components
import SearchGithub from './component/SearchGithub';
import User from './component/User';
import Repo from './component/Repo';






const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SearchInGithub" component={SearchGithub} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Repo" component={Repo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
