// src/components/HomeePage.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Homee Sayfası</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default HomeePage;
