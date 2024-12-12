import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const DetailsPage = ({ route, navigation }) => {
  const { name, price, image, description } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.workerName}>{name}</Text>
      <Text style={styles.workerPrice}>{price}</Text>
      <Text style={styles.description}>{description}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Rezervasyon')}
      >
        <Text style={styles.buttonText}>Randevu Al</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  workerName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  workerPrice: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetailsPage;
