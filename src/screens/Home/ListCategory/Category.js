import React, {useState} from 'react';
import {FlatList, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Divider, List, ListItem} from '@ui-kitten/components';
import styles from './Category.style';
import useCategory from './useCategory';
import Item from './Item/Item';
const Category = () => {
  const {DATA} = useCategory();
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
      <Text style={styles.titleCategory}>Category</Text>
      <ScrollView horizontal={true}>
        <FlatList style={{height:150}} data={DATA} horizontal={true} renderItem={renderItem} />
      </ScrollView>
    </View>
  );
};
export default Category;
