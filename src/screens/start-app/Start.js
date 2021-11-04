import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {Layout, Tab, TabView, Text} from '@ui-kitten/components';
import useStart from './useStart';
import {Spinner} from '@ui-kitten/components';
import styles from './Start.style';
const Start = ({navigation}) => {
  return (
    <View style={styles.wraper}>
      <View>
        <Text style={styles.H}>Your Recipes App</Text>
        <View style={styles.img}>
          <Image
            source={require('C:/Users/buigi/OneDrive/Desktop/CookingRecipe/src/screens/start-app/Ảnh1.png')}
            style={{width: 100, height: 100}}
          />
        </View>
        <View style={styles.img}>
          <Text style={styles.ver}>Version 4.0.0</Text>
        </View>
      </View>
      <View style={{marginTop: 90}}>
        <Spinner status='basic' size='medium' />
      </View>
    </View>
  );
};
export default Start;
