import React, { useEffect, useState } from 'react';
import {View, Text, ScrollView, FlatList, SafeAreaView} from 'react-native';
import styles from './Explore.style';
import useExplore from './useExplore';
import Item from './Item/Item';
const Explore = ({navigation}) => {
  const {data} = useExplore();
  
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

export default Explore;
