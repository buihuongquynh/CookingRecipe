
import React, {useState} from 'react';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import {Layout, Tab, TabView, Text} from '@ui-kitten/components';
import styles from './Slide.style';
import Slick from 'react-native-slick';
const Slide = () => {
  return (
    <>
      <Slick autoplay={true} style={styles.wrapper} showsPagination={false}>
        <View style={styles.slide1}>
          <Image
            source={{
              uri: 'https://www.themealdb.com/images/media/meals/vwuprt1511813703.jpg',
            }}
            style={{width: '100%', height: 180, borderRadius:8}}
          />
        </View>
        <View style={styles.slide2}>
          <Image
            source={{
              uri: 'https://www.themealdb.com/images/media/meals/yqqqwu1511816912.jpg',
            }}
            style={{width: '100%', height: 180, borderRadius:8}}
          />
        </View>
        <View style={styles.slide3}>
          <Image
            source={{
              uri: 'https://www.themealdb.com/images/media/meals/xxtsvx1511814083.jpg',
            }}
            style={{width: '100%', height: 180, borderRadius:8}}
          />
        </View>
      </Slick>
    </>
  );
};
export default Slide;
