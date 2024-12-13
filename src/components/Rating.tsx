import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

type StarRatingProps = {
  rating: number;
  onChangeRating: (rating: number) => void;
};

const Rating: React.FC<StarRatingProps> = ({ rating, onChangeRating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => onChangeRating(i)}>
          <Text style={i <= rating ? styles.starFilled : styles.starEmpty}>★</Text>
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return <View style={styles.starRatingContainer}>{renderStars()}</View>;
};

const styles = StyleSheet.create({
  starRatingContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  starFilled: {
    color: 'gold',
    fontSize: 20,
  },
  starEmpty: {
    color: 'gray',
    fontSize: 20,
  },
});

export default Rating;
