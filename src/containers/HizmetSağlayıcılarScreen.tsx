import React from 'react';
import { StyleSheet, View } from 'react-native';
import HizmetSağlayıcılar from '../components/HizmetSağlayıcılar';

const HizmetSağlayıcılarScreen = () => {
  return (
    <View style={styles.container}>
      <HizmetSağlayıcılar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HizmetSağlayıcılarScreen;
