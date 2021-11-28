import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import Item from './Item/Item';
const ListCategory = ({route, navigation}) => {
  const {data} = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={data}
        keyExtractor={item => item.idMeal}
        renderItem={({item}) => <Item item={item} navigation={navigation} />}
        numColumns={2}
        style={{flexWrap: 'wrap'}}
      />
    </SafeAreaView>
  );
};

export default ListCategory;
