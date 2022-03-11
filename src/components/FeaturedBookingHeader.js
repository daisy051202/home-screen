import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {filterBooking} from '../data/filterBooking';
import FeaturedBookingGift from './FeaturedBookingGift';
import FeaturedBookingList from './FeaturedBookingList';
import FilterButtonList from './FilterButtonList';
import HeaderTitle from './HeaderTitle';
import WatchMore from './WatchMore';

const FeaturedBooking = () => {
  return (
    <View style={styles.featuredBooking}>
      <ImageBackground
        source={require('../assets/f-booking/booking-background.png')}
        style={styles.background}
        resizeMode="cover">
        <View style={styles.container}>
          <HeaderTitle text="Chiến dịch booking nổi bật" />
          <FilterButtonList data={filterBooking} />
          <FeaturedBookingList />
        </View>
      </ImageBackground>
      <WatchMore text="Xem thêm quà tặng" isMiddle />
      <FeaturedBookingGift />
      <WatchMore text="Xem thêm booking" />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    // height: 250,
    width: '100%',
    backgroundColor: 'white',
    marginTop: 8,
  },
  container: {
    paddingHorizontal: 16,
  },
  featuredBooking: {
    borderTopWidth: 1,
    borderTopColor: '#E5EBED',
    borderBottomWidth: 1,
    borderBottomColor: '#E5EBED',
  },
});

export default FeaturedBooking;
