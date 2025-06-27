import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import FormScreen from '../screen/FormScreen';
import ResultsScreen from '../screen/ResultsScreen';
import type { RootStackParamList } from './types'; // 💡 Burası önemli

const Stack = createNativeStackNavigator<RootStackParamList>(); // 💡 Tip ekledik!

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
