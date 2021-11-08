import React, {useState} from 'react';
import {FlatList, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Divider, List, ListItem} from '@ui-kitten/components';
import styles from './Food.style';
import useFood from './useFood';
import Item from './Item/Item';
const Category = () => {
  const {data, DATA} = useFood();
  const renderItem = ({item}) => {
    return (
      <View style={styles.Row}>
        <Item
          item={item}
          // onPress={() => setSelectedId(item.id)}
        />
      </View>
    );
  };
  return (
    <View style={styles.home}>
      <Text style={styles.titleCategory}>Recent</Text>
      <ScrollView>
        <FlatList
          keyExtractor={item => item.id}
          numColumns={3}
          data={data}
          renderItem={renderItem}
        />
      </ScrollView>
    </View>
  );
};
export default Category;
