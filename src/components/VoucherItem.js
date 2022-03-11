import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const VoucherItem = ({item}) => {
  const {name, image, coin} = item;
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text>{name}</Text>
      <View style={styles.coin}>
        <Image source={require('../assets/koc-coin.png')} />
        <Text style={styles.text}>{coin}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 12,
  },
  image: {
    width: 100,
  },
  coin: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 8,
    fontFamily: 'Lexend-Bold',
    fontSize: 16,
    lineHeight: 22,
    color: '#3D3F40',
  },
});
export default VoucherItem;
