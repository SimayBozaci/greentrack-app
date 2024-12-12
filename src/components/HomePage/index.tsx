import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import jsonData from '../../data/products.json';

const HomePage = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smoothie Menu</Text>

      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList
        data={jsonData.filter(item =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        )}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>

            <View style={styles.imagebackpage}>
              <Image style={styles.image} source={{ uri: item.image }} />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('Details', {
                  name: item.name,
                  price: item.price,
                  image: item.image,
                  description: item.description, 
                });
              }}
            >
              <Text style={styles.buttonText}>İçeceğe Git</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#c42947',
    paddingTop: 19,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 11,
  },
  input: {
    width: '90%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
    width: '90%',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#f9b517',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
  image: {
    width: 97,
    height: 97,
    borderRadius: 9,
  },
  imagebackpage: {
    width: 100,
    height: 100,
  },
});

export default HomePage;
