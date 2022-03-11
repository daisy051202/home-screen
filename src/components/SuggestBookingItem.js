import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const SuggestBookingItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.expiresDate}>{item.expiresDate}</Text>
      <View style={styles.people}>
        <Image source={require('../assets/people.png')} />
        <Text style={styles.quantity}>{item.quantity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    marginTop: 8,
  },
  image: {
    width: 110,
    height: 110,
  },
  name: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#3D3F40',
  },
  expiresDate: {
    fontFamily: 'Lexend-Medium',
    fontSize: 12,
    lineHeight: 17,
    color: '#899296',
  },
  quantity: {
    fontFamily: 'Lexend-Regular',
    fontSize: 12,
    lineHeight: 17,
    color: '#899296',
    marginLeft: 4,
  },
  people: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SuggestBookingItem;
