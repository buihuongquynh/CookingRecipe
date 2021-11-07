import React, {useState,useEffect} from 'react';
import {View, Image} from 'react-native';
import {Layout, Tab, TabView, Text} from '@ui-kitten/components';
import {Spinner} from '@ui-kitten/components';
import styles from './Start.style';
const Start = ({navigation}) => {
  useEffect(() => {
    const Loading = setTimeout(() => {
      navigation.navigate('Login')
    }, 2000);
  }, []);
  return (
    <View style={styles.wraper}>
      <View>
        <Text style={styles.H}>Your Recipes App</Text>
        <View style={styles.img}>
          <Image
            source={require('../start-app/Ảnh1.png')}
            style={{width: 100, height: 100}}
          />
        </View>
        <View style={styles.img}>
          <Text style={styles.ver}>Version 5.0.0</Text>
        </View>
      </View>
      <View style={{marginTop: 90}}>
        <Spinner status='basic' size='medium' />
      </View>
    </View>
  );
};
export default Start;
