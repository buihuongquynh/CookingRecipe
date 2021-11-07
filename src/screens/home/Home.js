import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {Layout, Tab, TabView, Text} from '@ui-kitten/components';
import useHome from './useHome';
import {Spinner} from '@ui-kitten/components';
import Slide from './slide/Slide';
import styles from './Home.style';
import Category from './ListCategory/Category'
const Start = ({navigation}) => {
  return (
    <View style={styles.home}>
      <Slide/>
      <Category/>
    </View>
  );
};
export default Start;
