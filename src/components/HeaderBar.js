import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  StatusBar,
  Text,
} from 'react-native';
import {Badge} from 'react-native-paper';

const HeaderBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerIntro}>
        <Image source={require('../assets/header/logo-white.png')} />
        <TouchableOpacity style={styles.introButton}>
          <Text style={styles.introButtonText}>Hướng dẫn</Text>
          <View style={styles.playButton}>
            <Image
              source={require('../assets/header/playButton.png')}
              resizeMode="cover"
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.headerButton}>
        <View>
          <Image source={require('../assets/header/search.png')} />
        </View>
        <View style={styles.icon}>
          <Image source={require('../assets/header/bell.png')} />
          <Badge style={styles.badge}>5</Badge>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: StatusBar.currentHeight,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIntro: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  introButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginLeft: 15,
    padding: 7,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  introButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 24,
  },
  playButton: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  badge: {
    backgroundColor: '#F36C44',
    color: 'white',
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 10,
  },
});

export default HeaderBar;
