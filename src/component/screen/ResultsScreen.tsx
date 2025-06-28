import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Results'>;

const ResultsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { carKm, meatDays, electricity } = route.params;

  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .post('http://127.0.0.1:5000/calculate', {
        carKm,
        meatDays,
        electricity,
      })
      .then((response) => {
        setResult(response.data.total_daily_emission_kg);
      })
      .catch((error) => {
        console.error('API hatası:', error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleBack = () => {
    navigation.goBack();

  };

  return (
    <ImageBackground
      source={require('../../assets/forest.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
      <Text style={styles.backIcon}>🔙</Text>
      </TouchableOpacity>
  

        <View style={styles.card}>
          <Text style={styles.title}>Karbon Ayak İzi Sonucu</Text>
          {loading ? (
            <ActivityIndicator size="large" color="#34d399" />
          ) : (
            <Text style={styles.result}>
              Günlük toplam CO₂ emisyonunuz:{' '}
              <Text style={styles.highlight}>{result} kg</Text>
            </Text>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: '#e0f2fe',
    padding: 10,
    borderRadius: 50,
    zIndex: 10,
  },
  backIcon: {
    fontSize: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 16,
    alignItems: 'center',
    width: '100%',
    maxWidth: 380,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#065f46',
    marginBottom: 20,
    textAlign: 'center',
  },
  result: {
    fontSize: 18,
    color: '#374151',
    textAlign: 'center',
  },
  highlight: {
    color: '#10b981',
    fontWeight: 'bold',
  },
});

export default ResultsScreen;
