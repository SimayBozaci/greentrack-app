import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/types';

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

  const handleBack = () => {
    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backIcon}>🔙</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Karbon Ayak İzi Hesaplama</Text>

        <View style={styles.field}>
          <Text style={styles.label}>🚗 Günlük araba ile gidilen km</Text>
          <TextInput
            placeholder="Örn: 12"
            keyboardType="numeric"
            value={carKm}
            onChangeText={setCarKm}
            style={styles.input}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>🥩 Haftalık et tüketimi (gün)</Text>
          <TextInput
            placeholder="Örn: 3"
            keyboardType="numeric"
            value={meatDays}
            onChangeText={setMeatDays}
            style={styles.input}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>⚡ Aylık elektrik tüketimi (kWh)</Text>
          <TextInput
            placeholder="Örn: 150"
            keyboardType="numeric"
            value={electricity}
            onChangeText={setElectricity}
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Sonucu Göster</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f0fdf4',
  },
  container: {
    padding: 24,
    justifyContent: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#e0f2fe',
    padding: 10,
    borderRadius: 50,
    marginBottom: 20,
  },
  backIcon: {
    fontSize: 20,
  textAlign: 'center',  
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#065f46',
  },
  field: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#065f46',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    backgroundColor: '#f8fafc',
    padding: 12,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#34d399',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FormScreen;
