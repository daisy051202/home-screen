import React from 'react';
import {FlatList} from 'react-native';
import {brands} from '../data/brand';
import BrandItem from './BrandItem';
const BrandList = () => {
  return (
    <FlatList
      data={brands}
      keyExtractor={brand => brand.id.toString()}
      renderItem={({item}) => <BrandItem item={item} />}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default BrandList;
