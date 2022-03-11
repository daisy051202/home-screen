import React from 'react';
import {FlatList} from 'react-native';
import {reviews} from '../data/reviews';
import ReviewItem from './ReviewItem';
const ReviewList = () => {
  return (
    <FlatList
      data={reviews}
      keyExtractor={review => review.id.toString()}
      renderItem={({item}) => <ReviewItem item={item} />}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ReviewList;