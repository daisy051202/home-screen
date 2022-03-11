import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const FeaturedBookingGiftItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} />
      <View style={styles.infor}>
        <Text numberOfLines={2} style={styles.title} lineBreakMode="header">
          {item.name}
        </Text>
        <Text style={styles.subtitle}>{item.expiresDate}</Text>
        <View>
          {/* <Image /> */}
          <Text style={styles.quantity}>{item.quantity}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infor: {
    marginHorizontal: 10,
  },
  title: {
    fontFamily: 'Lexend-Regular',
    color: '#3D3F40',
    fontSize: 14,
    lineHeight: 22,
  },
  subtitle: {
    fontFamily: 'Lexend-Medium',
    color: '#899296',
    fontSize: 12,
    lineHeight: 18,
  },
  quantity: {
    fontFamily: 'Lexend-Regular',
    color: '#899296',
    fontSize: 12,
    lineHeight: 18,
  },
});

export default FeaturedBookingGiftItem;
