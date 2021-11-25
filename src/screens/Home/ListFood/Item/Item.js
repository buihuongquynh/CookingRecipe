import React, {useState} from 'react';
import {FlatList, Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './Item.style';
import {useNavigation} from '@react-navigation/native';
const Item = ({data}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', {data})}>
      <View style={styles.Item}>
        <Image
          source={{
            uri: data ? data.strMealThumb.toString() : null,
          }}
          style={styles.itemImage}
        />
        <Text style={styles.Title} numberOfLines={2}>
          {data ? data.strMeal : null}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default Item;
