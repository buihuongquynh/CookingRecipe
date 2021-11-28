import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import styles from './Item.style';
import useItem from './useItem';
const Item = ({item, navigation}) => {
  const {data} = useItem(item.idMeal);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', {data});
      }}
      style={styles.item}>
      <Image
        source={{
          uri: item ? item.strMealThumb : null,
        }}
        style={styles.itemImage}
      />
      <Text style={styles.itemText} numberOfLines={1}>
        {item.strMeal ? item.strMeal : null}
      </Text>
    </TouchableOpacity>
  );
};

export default Item;
