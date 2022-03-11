import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WatchMore = ({text, isMiddle}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.button,
          {
            borderBottomWidth: isMiddle ? 1 : null,
            borderBottomColor: isMiddle ? '#E5EBED' : null,
          },
        ]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E5EBED',
    paddingVertical: 12,
    marginHorizontal: 16,
    marginTop: 10,
  },
  text: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#6C5CE7',
  },
});

export default WatchMore;
