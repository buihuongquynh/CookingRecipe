import React, {useState} from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import {Divider, List, ListItem} from '@ui-kitten/components';
import styles from './Category.style';
import useCategory from './useCategory'
import Item from './Item/Item'
const Category = () => {
  const {DATA} = useCategory()
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <View style={styles.Row}>
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={{backgroundColor}}
          textColor={{color}}
        />
      </View>
    );
  };
  return (
    <View style={styles.home}>
      <Text>Category</Text>
      <FlatList
        data={DATA}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </View>
  );
};
export default Category;
