// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// const DetailsPage = ({ route, navigation }) => {
//   const { name, price, image, description } = route.params;

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: image }} style={styles.image} />
//       <Text style={styles.workerName}>{name}</Text>
//       <Text style={styles.workerPrice}>{price}</Text>
//       <Text style={styles.description}>{description}</Text>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('Rezervasyon')}
//       >
//         <Text style={styles.buttonText}>Randevu Al</Text>
//       </TouchableOpacity>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#f5f5f5',
//     padding: 16,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   workerName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   workerPrice: {
//     fontSize: 16,
//     color: '#555',
//     marginTop: 10,
//   },
//   description: {
//     fontSize: 16,
//     color: 'black',
//     marginTop: 10,
//   },
//   button: {
//     backgroundColor: 'orange',
//     padding: 15,
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default DetailsPage;



import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import StarRating from './Rating'; // Yıldızlama componenti

const Details = () => {
  const route = useRoute();
  const { name, price, image, description, id } = route.params;
  const [rating, setRating] = useState(0);

  const handleRating = (newRating: number) => {
    setRating(newRating);
    // Burada, rating'i bir veri kaynağına veya API'ye kaydedebilirsiniz.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.description}>{description}</Text>

      <StarRating
        rating={rating}
        onChangeRating={handleRating}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Yorum Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2E8B57',
    paddingTop: 20,
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
    fontSize: 14,
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
