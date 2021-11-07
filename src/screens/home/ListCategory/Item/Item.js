import React, {useState} from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import styles from './Item.style';
const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);
export default Item;
