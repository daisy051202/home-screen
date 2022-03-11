import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const FeaturedBookingItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    marginRight: 16,
  },
});

export default FeaturedBookingItem;
