import React, {useState} from 'react';
import {FlatList, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Divider, List, ListItem} from '@ui-kitten/components';
import styles from './Food.style';
import useFood from './useFood';
import Item from './Item/Item';
import {useNavigation} from '@react-navigation/native';
const Food = () => {
  const navigation = useNavigation();
  const {data} = useFood();

  const renderItem = ({item}) => {
    return <Item data={item} />;
  };
  return (
    <View style={styles.home}>
      <Text style={styles.titleCategory}>Recent</Text>
      <ScrollView style={{margin: 5}}>
        <FlatList
          keyExtractor={item => item.idMeal}
          data={data}
          renderItem={renderItem}
          horizontal={true}
        />
      </ScrollView>
    </View>
  );
};
export default Food;
