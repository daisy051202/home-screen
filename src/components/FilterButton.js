import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

const FilterButton = ({item}) => {
  const {text, isActive} = item;
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: isActive ? '#6C5CE7' : '#3D3F40',
          backgroundColor: isActive ? '#6c5ce733' : null,
        },
      ]}>
      <Text style={[styles.text, {color: isActive ? '#6C5CE7' : '#3D3F40'}]}>
        {text}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 5,
  },
  text: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default FilterButton;
