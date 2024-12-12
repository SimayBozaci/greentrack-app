import React from 'react';
import {  StyleSheet, Text, View,  } from 'react-native';

const HomeHeader = () => {


  return (
    <View style={styles.header}>

      <View style={styles.textNotification}>
        <Text style={styles.text}>Welcome</Text>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d43f5b',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  textNotification: {
    flex: 1,
    marginTop: 35,
  },
  text: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'justify',
    color: 'white',
  },


  imagesProduct: {
    width: 45,
    height: 65,
    borderRadius:300,
  }
});

export default HomeHeader;
