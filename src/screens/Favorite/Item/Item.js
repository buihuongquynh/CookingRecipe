import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import styles from './Item.style';
import axios from 'axios';
import useItem from './useItem';
const Item = ({item, navigation}) => {
  const {data} = useItem(item.id);

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Details', {data})}>
      <Image
        source={{
          uri: item ? item.strMealThumb : null,
        }}
        style={styles.itemImage}
      />
      <Text style={styles.itemText} numberOfLines={1}>
        {item.strMeal ? item.strMeal : null}
      </Text>
      {data && (
        <Text style={styles.textCategory}>
          {data.strCategory ? data.strCategory : null}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Item;
