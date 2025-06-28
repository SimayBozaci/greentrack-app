import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Results'>;

const ResultsScreen: React.FC<Props> = ({ route }) => {
  const { carKm, meatDays, electricity } = route.params;

  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.post('http://127.0.0.1:5000/calculate', {
      carKm,
      meatDays,
      electricity,
    })
    .then(response => {
      setResult(response.data.total_daily_emission_kg);
    })
    .catch(error => {
      console.error('API hatası:', error.message);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Karbon Ayak İzi Sonucu</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#00aaff" />
      ) : (
        <Text style={styles.result}>
          Günlük toplam CO₂ emisyonunuz: {result} kg
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  result: { fontSize: 20, color: '#333' },
});

export default ResultsScreen;
