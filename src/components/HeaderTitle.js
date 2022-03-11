import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const HeaderTitle = ({text}) => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.nextButton}>
        <Image source={require('../assets/f-booking/next-button.png')} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nextButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Lexend-Bold',
    // fontWeight: '700',
    color: '#3D3F40',
    fontSize: 16,
    lineHeight: 22,
    textTransform: 'uppercase',
  },
});

export default HeaderTitle;
