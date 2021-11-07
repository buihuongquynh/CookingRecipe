import React, {useState} from 'react';
import Slick from 'react-native-slick';
import {View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './Slide.style';

const Slide = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://salt.tikicdn.com/cache/w1080/ts/banner/86/76/dd/c6409ac904a824622d5d17c57cd191bc.png.webp',
        }}
        style={{width: '100%', height: 170}}
      />
    </View>
  );
};
export default Slide;
