import React, {useState} from 'react';
import {FlatList, Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './Item.style';
const Item = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.Item}>
      <Image
        source={{
          uri: item ? item.strMealThumb.toString() : null,
        }}
        style={{width: '100%', height: 100}}
      />
      <Text style={styles.Title}>{item ? item.strMeal : null}</Text>
    </View>
  </TouchableOpacity>
);
export default Item;
