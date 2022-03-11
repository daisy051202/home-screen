import React from 'react';

import {ImageBackground, ScrollView, StatusBar, StyleSheet} from 'react-native';
import HeaderBar from '../components/HeaderBar';

const Header = () => {
  return (
    <ImageBackground
      source={require('../assets/banner-bg.png')}
      style={styles.background}>
      <HeaderBar />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: 218 + StatusBar.currentHeight,
  },
});
export default Header;
