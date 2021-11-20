import React, {useState} from 'react';
import {FlatList, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import styles from './NavigationBottom.style';
const NavigationBottom = ({children }) => {
  return (
    <View style={styles.wrapper}>
      <View>
        {children}
      </View>
      <View style={styles.Container}>

      </View>
    </View>
  );
};
export default NavigationBottom;
