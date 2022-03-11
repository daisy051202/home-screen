import React from 'react';
import {StyleSheet, View} from 'react-native';
import {filterMenu} from '../data/filterMenu';
import FilterButtonList from './FilterButtonList';
import HeaderTitle from './HeaderTitle';
import MenuList from './MenuList';
const Menu = () => {
  return (
    <View style={styles.container}>
      <HeaderTitle text="Danh mục ngành hàng" />
      <FilterButtonList data={filterMenu} />
      <MenuList />
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
export default Menu;
