import React, {useState} from 'react';
import {FlatList, Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './Item.style';
const Item = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.Item}>
      <Image
        source={{
          uri: item ? item.img.toString() : null,
        }}
        style={{width: '100%', height: 100, borderRadius:10}}
      />
      <Text style={styles.Title}>{item ? item.name : null}</Text>
      <Text style={styles.res}>{item ? item.count : null}</Text>
    </View>
  </TouchableOpacity>
);
export default Item;
