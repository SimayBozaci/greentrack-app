import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import StarRating from './Rating';

const Details = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { name, price, image, description, id } = route.params;
  const [rating, setRating] = useState(0);

  const handleRating = (newRating: number) => {
    setRating(newRating);
    // Burada rating'i bir veri kaynağına veya API'ye kaydedebilirm buraya sonra bak mutlaka!!!
  };

  return (
    <View style={styles.container}>
      {/* Geri gitmek için buton eklşyorum*/}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()} // Geri gitmek için goBack() fonksiyonu
      >

        <Image source={require('../../assets/icons/geri ok.png')} style={styles.icon} />
      </TouchableOpacity>

      <Text style={styles.title}>{name}</Text>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.description}>{description}</Text>

      <StarRating
        rating={rating}
        onChangeRating={handleRating}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Rezervasyon');
        }}
      >
        <Text style={styles.buttonText}>Rezervasyon Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2E8B57',
    paddingTop: 21,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'black', //icon rengi ama bak sıkıntı var
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  price: {
    fontSize: 18,
    color: 'white',
    marginTop: 10,
  },
  description: {
    fontSize: 15,
    color: 'white',
    marginTop: 5,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#f9b517',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Details;
