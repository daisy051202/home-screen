import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import FeaturedBookingItem from './FeaturedBookingItem';
const imageList = [
  {
    id: '1',
    image: require('../assets/f-booking/b-featured.png'),
  },
  {
    id: '2',
    image: require('../assets/f-booking/b-featured-1.png'),
  },
  {
    id: '3',
    image: require('../assets/f-booking/b-featured.png'),
  },
  {
    id: '4',
    image: require('../assets/f-booking/b-featured-1.png'),
  },
];

const FeaturedBookingList = () => {
  return (
    <FlatList
      data={imageList}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <FeaturedBookingItem item={item} />}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({});

export default FeaturedBookingList;
