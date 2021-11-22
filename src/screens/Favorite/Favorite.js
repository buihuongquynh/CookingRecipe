import React, { useEffect, useState } from 'react';
import {View, Text, ScrollView, FlatList, SafeAreaView} from 'react-native';
import useFavorite from './useFavorite';
import styles from './Favorite.style';
import Item from './Item/Item'
const Favorite = ({navigation}) => {
  const {data} = useFavorite();
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listCategory}
        data={data}
        renderItem={({item}) => <Item item={item} navigation={navigation} />}
        numColumns={2}
        keyExtractor={item => item.idMeal}
      />
    </View>
  );
};

export default Favorite;
