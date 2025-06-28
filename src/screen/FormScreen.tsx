import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Form'>;

const FormScreen: React.FC<Props> = ({ navigation }) => {
  const [carKm, setCarKm] = useState('');
  const [meatDays, setMeatDays] = useState('');
  const [electricity, setElectricity] = useState('');

  const handleSubmit = () => {
    if (!carKm || !meatDays || !electricity) {
      Alert.alert('Lütfen tüm alanları doldurun.');
      return;
    }

    navigation.navigate('Results', {
      carKm: Number(carKm),
      meatDays: Number(meatDays),
      electricity: Number(electricity),
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Karbon Ayak İzi Hesaplama</Text>

      <TextInput
        placeholder="Günlük araba ile gidilen km"
        keyboardType="numeric"
        value={carKm}
        onChangeText={setCarKm}
        style={styles.input}
      />

      <TextInput
        placeholder="Haftalık et tüketimi (gün)"
        keyboardType="numeric"
        value={meatDays}
        onChangeText={setMeatDays}
        style={styles.input}
      />

      <TextInput
        placeholder="Aylık elektrik tüketimi (kWh)"
        keyboardType="numeric"
        value={electricity}
        onChangeText={setElectricity}
        style={styles.input}
      />

      <Button title="Sonucu Göster" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
});

export default FormScreen;
