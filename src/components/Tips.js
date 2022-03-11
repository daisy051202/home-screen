import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import HeaderTitle from './HeaderTitle';
import TipsList from './TipsList';
import WatchMore from './WatchMore';

const Tips = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/tips/tips-background.png')}
        style={styles.background}
        resizeMode="cover">
        <View style={styles.content}>
          <HeaderTitle text="Sản phẩm hoa hồng cao" />
          <TipsList />
        </View>
      </ImageBackground>
      <WatchMore text="Xem thêm sản phẩm" />
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
  },
  content: {
    paddingHorizontal: 16,
  },
  background: {
    width: '100%',
    backgroundColor: 'white',
  },
});

export default Tips;
