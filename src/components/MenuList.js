import React from 'react';
import {FlatList} from 'react-native';
import {menus} from '../data/menus';
import MenuItem from './MenuItem';
const MenuList = () => {
  return (
    <FlatList
      data={menus}
      keyExtractor={menu => menu.id.toString()}
      renderItem={({item}) => <MenuItem item={item} />}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default MenuList;
