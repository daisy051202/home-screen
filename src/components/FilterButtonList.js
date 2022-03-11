import React from 'react';

import {FlatList, StyleSheet, View} from 'react-native';
import FilterButton from './FilterButton';

const FilterButtonList = ({data}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <FilterButton item={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
  },
});

export default FilterButtonList;
