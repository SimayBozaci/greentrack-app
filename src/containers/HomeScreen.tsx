import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import HomePage from '../components/HomePage';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <HomePage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HomeScreen;
