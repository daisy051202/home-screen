import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import HeaderTitle from './HeaderTitle';
import {filterTabBar} from '../data/filterTabBar';
const SuggestBooking = () => {
  return (
    <View style={styles.container}>
      <HeaderTitle text="Chiến dịch BOOKING gợi ý" />
      <FlatList
        data={filterTabBar}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View
            style={[
              styles.button,
              {
                borderBottomWidth: item.isActive ? 1 : null,
                borderBottomColor: item.isActive ? '#6C5CE7' : null,
              },
            ]}>
            <Text
              style={[
                styles.text,
                {
                  color: item.isActive ? '#6C5CE7' : '#899296',
                },
              ]}>
              {item.name}
            </Text>
          </View>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
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
  },
  button: {
    flex: 1,
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#E5EBED',
  },
  text: {
    fontFamily: 'Lexend-Bold',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
  },
});
export default SuggestBooking;
