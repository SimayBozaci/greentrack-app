// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomePage from './src/components/HomePage';
// import DetailsPage from './src/components/DetailsPage';
// import AddressPage from './src/components/AddressPage';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomePage}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Details"
//           component={DetailsPage}
//           options={{ title: 'Ürün Bilgileri' }}
//         />
//         <Stack.Screen
//           name="Address"
//           component={AddressPage}
//           options={{ title: 'Sipariş Ekranı' }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './src/components/HomePage';
import DetailsPage from './src/components/DetailsPage';
import { Image } from 'react-native';
import RezervasyonPage from './src/components/Rezervasyon';

const Tab = createBottomTabNavigator();

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
            } else if (route.name === 'Details') {
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
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{ tabBarLabel: 'Ana Sayfa', headerShown: false }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsPage}
          options={{ tabBarLabel: 'Hizmet Sağlayıcılarımız', headerShown: false }}
        />
        <Tab.Screen
          name="Rezervasyon"
          component={RezervasyonPage}
          options={{ tabBarLabel: 'Rezervasyon', headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
