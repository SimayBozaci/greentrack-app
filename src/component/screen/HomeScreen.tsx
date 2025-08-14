import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;//tip özelliklerini importladım

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/forest.jpg')}
      style={styles.background}
      resizeMode="cover"//tamamen
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>GreenTrack'e Hoş Geldiniz 🌱</Text>
        <View style={styles.backdescription}>
        <Text style={styles.description}>
          Günlük alışkanlıklarınızı girerek karbon ayak izinizi hesaplayın ve sürdürülebilir yaşama sizde katkı sağlayın.
        </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Form')}>
          <Text style={styles.buttonText}>Başla</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 100, 0, 0.5)', //yarısaydam 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 15,
  },
  backdescription:{
    backgroundColor:'#D3D3D3',
    margin:5,
    borderRadius:11,
  },
  description: {
    fontSize: 16,
    color: 'black',
    fontWeight:'bold',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
    marginTop:9,
  },
  button: {
    backgroundColor: '#34d399', 
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 4,
  },
  buttonText: {
    color: '#1f2937',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
