import React from 'react';
import {ScrollView, FlatList, View, StyleSheet} from 'react-native';
import {links} from '../data/quickLink';
import QuickLinkItem from './QuickLinkItem';
const QuickLink = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={links}
        keyExtractor={link => link.id.toString()}
        renderItem={({item}) => <QuickLinkItem link={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowRadius: 2,
    shadowColor: 'rgba(0,0,0,0.2)',
  },
});

export default QuickLink;
