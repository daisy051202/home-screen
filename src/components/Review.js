import React from 'react';
import {StyleSheet, View} from 'react-native';
import {filterReview} from '../data/filterReview';
import FilterButtonList from './FilterButtonList';
import HeaderTitle from './HeaderTitle';
import ReviewList from './ReviewList';
import WatchMore from './WatchMore';
const Review = () => {
  return (
    <View style={styles.container}>
      <HeaderTitle text="Review nổi bật" />
      <FilterButtonList data={filterReview} />
      <ReviewList />
      <WatchMore text="Xem thêm"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 6,
    borderTopWidth: 1,
    borderTopColor: '#E5EBED',
    borderBottomWidth: 1,
    borderBottomColor: '#E5EBED',
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
});

export default Review;
