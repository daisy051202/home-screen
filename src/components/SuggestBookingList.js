import React from 'react';
import {FlatList, View} from 'react-native';
import {suggestBookings} from '../data/suggestBookings';
import SuggestBookingItem from './SuggestBookingItem';
import {FlatGrid} from 'react-native-super-grid';
const SuggestBookingList = () => {
  return (
    // <FlatList
    //   data={suggestBookings}
    //   keyExtractor={suggestBooking => suggestBooking.id.toString()}
    //   renderItem={({item}) => <SuggestBookingItem item={item} />}
    //   numColumns={3}
    //   nestedScrollEnabled={true}
    // />
    <FlatGrid
      data={suggestBookings}
      itemDimension={130}
      spacing={10}
      renderItem={({item}) => <SuggestBookingItem item={item} />}
    />
  );
};

export default SuggestBookingList;
