import React from 'react';
import { View, Text, StyleSheet,ImageBackground } from 'react-native';

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/icons/villa.jpeg')}
      style={styles.container}
    >
     <View style={styles.overlay}></View>

        <View style={styles.footer}>
        <Text style={styles.title}>Hoş Geldiniz</Text>
        <Text style={styles.subtitle}>
          Villa yaşamınızı daha konforlu hale getirmek için buradayız!{"\n"}
          Bahçe ve havuz bakımlarında oluşan sorunları çözmek için uzman ustalarımıza hemen ulaşabilir, tüm ihtiyaçlarınızı kolayca karşılayabilirsiniz.
        </Text>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',  // Yarı saydamlık ayrladm ana resime
  },
  footer: {
    position: 'absolute',
    left: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',  // Hafif bi saydamlık ayarladım
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 10,
    color: 'black',
    textAlign: 'center',
  },
});

export default HomeScreen;
