import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {commissions} from '../data/commission';
import TipsListItem from './TipsListItem';
const TipsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={commissions}
        keyExtractor={commission => commission.id.toString()}
        renderItem={({item}) => <TipsListItem item={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paddingBottom: 16,
});

export default TipsList;
