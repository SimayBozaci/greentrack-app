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

const HizmetSağlayıcılar = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); // 'garden' veya 'pool' tutulacak.

  //veriyi ikiye ayırıp alıyorum

  const midIndex = Math.ceil(jsonData.length / 2);
  const gardenData = jsonData.slice(0, midIndex); // Bahçe sorumluları
  const poolData = jsonData.slice(midIndex); // Havuz sorumluları

  const filterData = (data) =>
    data.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hizmet Yönetimi</Text>

      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
      />

      <View style={styles.listContainer}>
        {/* Sol kategori (Bahçe Sorumluları) olarak ayat-rlasım */}
        <TouchableOpacity
          style={[
            styles.listWrapper,
            selectedCategory === 'garden' && styles.selectedContainer,
          ]}
          onPress={() => setSelectedCategory('garden')}
        >
          <Text style={styles.categoryTitle}>Bahçe Sorumlularımız</Text>
        </TouchableOpacity>

        {/* Sağ kategori (Havuz Sorumluları) olarak ayarladım */}
        <TouchableOpacity
          style={[
            styles.listWrapper,
            selectedCategory === 'pool' && styles.selectedContainer,
          ]}
          onPress={() => setSelectedCategory('pool')}
        >
          <Text style={styles.categoryTitle}>Havuz Sorumlularımız</Text>
        </TouchableOpacity>
      </View>

      {/* Bahçe Sorumluları FlatList kımsı */}
      {selectedCategory === 'garden' && (
        <FlatList
          data={filterData(gardenData)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.workerName}>{item.name}</Text>
              <Text style={styles.workerPrice}>{item.price}</Text>

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
                    id: item.id,
                  });
                }}
              >
                <Text style={styles.buttonText}>Hakkında</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      {/* Havuz Sorumlularının FlatList kısmı */}
      {selectedCategory === 'pool' && (
        <FlatList
          data={filterData(poolData)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.workerName}>{item.name}</Text>
              <Text style={styles.workerPrice}>{item.price}</Text>

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
                    id: item.id,
                  });
                }}
              >
                <Text style={styles.buttonText}>Hakkında</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E8B57',
    paddingTop: 19,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 11,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignSelf: 'center',
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  listWrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  selectedContainer: {
    backgroundColor: '#f9b517',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  workerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  workerPrice: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#f9b517',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 5,
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

export default HizmetSağlayıcılar;
