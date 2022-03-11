import React from 'react';
import {ImageBackground, ScrollView, StatusBar, StyleSheet} from 'react-native';
import Brand from './Brand';
import FeaturedBooking from './FeaturedBookingHeader';
import Header from './Header';
import Menu from './Menu';
import QuickLink from './QuickLink';
import Review from './Review';
import SuggestBooking from './SuggestBooking';
import Tips from './Tips';
import Voucher from './Voucher';

const ScrollViewPage = () => {
  return (
    <ScrollView
      style={styles.container}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <Header />
      <QuickLink />
      <FeaturedBooking />
      <Tips />
      <Brand />
      <ImageBackground
        source={require('../assets/banner-grp.png')}
        style={styles.background}
      />
      <Review />
      <Menu />
      <Voucher />
      <SuggestBooking />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F9F9',
  },
  background: {
    width: '100%',
    height: 130,
    marginTop: 6,
  },
});
export default ScrollViewPage;
