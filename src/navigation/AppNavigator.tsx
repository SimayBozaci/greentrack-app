import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../component/screen/HomeScreen';
import FormScreen from '../component/screen/FormScreen';
import ResultsScreen from '../component/screen/ResultsScreen';
import type { RootStackParamList } from './types'; 

const Stack = createNativeStackNavigator<RootStackParamList>();//ekranlara gönderilecek verilerin tipini tanımla

//Tip güvenliği sağlıyorum yanlış parametre gönderildiğinde hata versin.

const AppNavigator = () => {
  return (
    //ekran açılınca ilk görülen home 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Form" component={FormScreen}options={{ headerShown: false }} />
        <Stack.Screen name="Results" component={ResultsScreen}options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default AppNavigator;
