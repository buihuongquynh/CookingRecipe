import React, { useEffect, useState } from 'react';
import {View, Text, ScrollView, FlatList, SafeAreaView} from 'react-native';

import useCategory from './useCategory';
import styles from './Category.style';
import Item from './Item/Item'
const Category = ({navigation}) => {
  const {data} = useCategory();
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

export default Category;
