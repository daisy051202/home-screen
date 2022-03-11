import React from 'react';
import {StyleSheet, View} from 'react-native';
import FilterButtonList from './FilterButtonList';
import HeaderTitle from './HeaderTitle';
import {filterBrand} from '../data/filterBrand';
import BrandList from './BrandList';
import WatchMore from './WatchMore';
const Brand = () => {
  return (
    <View style={styles.container}>
      <HeaderTitle text="Kiếm tiền cùng thương hiệu" />
      <FilterButtonList data={filterBrand} />
      <BrandList />
      <WatchMore text="Xem thêm chiến dịch Affiliate" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    borderTopWidth: 1,
    borderTopColor: '#E5EBED',
    borderBottomWidth: 1,
    borderBottomColor: '#E5EBED',
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
});

export default Brand;
