import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Badge} from 'react-native-paper';

const QuickLinkItem = ({link}) => {
  const {isNew} = link;
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.icon}>
        <Image source={link.icon} resizeMode="cover" />
        {isNew && (
          <Image
            source={require('../assets/quick-link/new.png')}
            style={styles.badge}
            resizeMode="cover"
          />
        )}
      </View>
      <Text style={styles.title}>{link.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  icon: {
    width: 40,
    height: 40,
  },
  title: {
    color: 'black',
    marginTop: 10,
  },
  badge: {
    position: 'absolute',
    left: '75%',
  },
});

export default QuickLinkItem;
