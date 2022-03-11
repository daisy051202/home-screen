import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

const ReviewItem = ({item}) => {
  const {name, eyes, thumbnail, isLived, product} = item;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={thumbnail}
        resizeMode="cover"
        imageStyle={{borderRadius: 6}}>
        <View style={styles.content}>
          <View style={styles.view}>
            <View style={styles.eyes}>
              <Image
                source={require('../assets/review/eyes.png')}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.eyesCount}>{eyes}</Text>
          </View>
          {isLived && <Text style={styles.isLived}>Trực tiếp</Text>}
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.product}>{product}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 8,
  },
  background: {
    width: 135,
    height: 210,
    padding: 8,
    justifyContent: 'space-between',
  },
  eyesCount: {
    fontFamily: 'Lexend-Bold',
    fontSize: 10,
    lineHeight: 20,
    color: 'white',
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    backgroundColor: '#000000b3',
    padding: 1,
    paddingHorizontal: 4,
    borderRadius: 6,
  },
  eyes: {
    marginRight: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'Lexend-Bold',
    fontSize: 12,
    lineHeight: 22,
    color: 'white',
  },
  product: {
    fontFamily: 'Lexend-Regular',
    fontSize: 10,
    lineHeight: 20,
    color: 'white',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  isLived: {
    fontFamily: 'Lexend-Bold',
    fontSize: 12,
    lineHeight: 22,
    color: 'white',
    paddingVertical: 1,
    paddingHorizontal: 4,
    backgroundColor: '#4FBF72',
    marginLeft: 4,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ReviewItem;
