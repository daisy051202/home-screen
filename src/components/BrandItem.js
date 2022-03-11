import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const BrandItem = ({item}) => {
  const {image, name, comission} = item;
  return (
    <View style={styles.container}>
      <Image source={image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.comission}>{comission}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 16,
  },
  name: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    lineHeight: 22,
    color: '#3D3F40',
    marginTop: 8,
  },
  comission: {
    fontFamily: 'Lexend-Bold',
    fontSize: 14,
    lineHeight: 22,
    color: '#3D3F40',
    marginTop: 4,
  },
});

export default BrandItem;
