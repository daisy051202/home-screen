import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TipsListItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} resizeMode="cover" style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.commission}>{item.commission}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.expiresDate}>{item.expiresDate}</Text>
      <Text style={styles.sold}>{item.sold}</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.button}>Tạo Link</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    borderColor: '#6C5CE7',
    borderWidth: 1,
    fontFamily: 'Lexend-Regular',
    fontSize: 15,
    lineHeight: 22,
    color: '#6C5CE7',
    textAlign: 'center',
  },
  buttonContainer: {
    padding: 4,
    marginTop: 4,
    width: 100,
  },
  container: {
    marginRight: 16,
    flex: 1,
  },
  image: {
    width: 170,
    height: 170,
  },
  name: {
    fontFamily: 'Lexend-Regular',
    fontSize: 15,
    lineHeight: 24,
    color: '#3D3F40',
    height: 50,
  },
  commission: {
    fontFamily: 'Lexend-Regular',
    fontSize: 15,
    lineHeight: 24,
    color: '#E84493',
  },
  price: {
    fontFamily: 'Lexend-Bold',
    fontSize: 16,
    lineHeight: 25,
    color: '#FF900D',
  },
  expiresDate: {
    fontFamily: 'Lexend-Bold',
    fontSize: 12,
    lineHeight: 18,
    color: '#899296',
  },
  sold: {
    fontFamily: 'Lexend-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: '#899296',
  },
});

export default TipsListItem;
