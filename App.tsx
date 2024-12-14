import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import HizmetSağlayıcılar from './src/components/HizmetSağlayıcılar';
import Details from './src/components/DetailsPage';
import RezervasyonPage from './src/components/Rezervasyon';
import { Image } from 'react-native';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HizmetSaglayicilarStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="HizmetSağlayıcılar" component={HizmetSağlayıcılar} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home" 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('./assets/icons/home.png') 
                : require('./assets/icons/home.png');
            } else if (route.name === 'Hizmet Sağlayıcılar') {
              iconName = focused
                ? require('./assets/icons/worker.png')
                : require('./assets/icons/worker.png');
            } else if (route.name === 'Rezervasyon') {
              iconName = focused
                ? require('./assets/icons/calender.png')
                : require('./assets/icons/calender.png');
            }

            return <Image source={iconName} style={{ width: 25, height: 25 }} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Hizmet Sağlayıcılar"
          component={HizmetSaglayicilarStack}
        />
        <Tab.Screen name="Rezervasyon" component={RezervasyonPage} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;


  