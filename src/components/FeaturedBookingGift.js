import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import FeaturedBookingGiftItem from './FeaturedBookingGiftItem';

const gifts = [
  {
    id: '1',
    name: 'TP-LINK 300Mbps \nWireless N Speed',
    expiresDate: 'Đến 12/8/2021',
    quantity: '67/80',
    image: require('../assets/Linking/b-img.png'),
  },
  {
    id: '2',
    name: 'XIAOMI Redmi 5 \n(32GB/3GB) Black',
    expiresDate: 'Đến 12/8/2021',
    quantity: '67/80',
    image: require('../assets/Linking/b-img-1.png'),
  },
  {
    id: '3',
    name: 'TP-LINK 300Mbps \nWireless N Speed',
    expiresDate: 'Đến 12/8/2021',
    quantity: '67/80',
    image: require('../assets/Linking/b-img.png'),
  },
  {
    id: '4',
    name: 'XIAOMI Redmi 5 \n(32GB/3GB) Black',
    expiresDate: 'Đến 12/8/2021',
    quantity: '67/80',
    image: require('../assets/Linking/b-img-1.png'),
  },
];

const FeaturedBookingGift = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={gifts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <FeaturedBookingGiftItem item={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});

export default FeaturedBookingGift;
