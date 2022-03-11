import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const MenuItem = ({item}) => {
  const {name, image} = item;
  return (
    <View style={styles.container}>
      <Image source={image} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#E5EBED',
  },
  text: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    lineHeight: 22,
    color: '#3D3F40',
    marginTop: 4,
  },
});

export default MenuItem;
