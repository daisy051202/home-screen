import React from 'react';
import {FlatList} from 'react-native';
import VoucherItem from './VoucherItem';
import {vouchers} from '../data/vouchers';
const MenuList = () => {
  return (
    <FlatList
      data={vouchers}
      keyExtractor={voucher => voucher.id.toString()}
      renderItem={({item}) => <VoucherItem item={item} />}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default MenuList;
