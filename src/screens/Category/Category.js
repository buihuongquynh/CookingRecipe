import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, FlatList, SafeAreaView} from 'react-native';
import axios from 'axios';
import styles from './Category.style';
import Item from './Item/Item';
const Category = ({navigation}) => {
  const [category, setCategory] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/categories.php`,
      );
      setCategory(res.data.categories);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listCategory}
        data={category}
        renderItem={({item}) => <Item item={item} navigation={navigation} />}
        keyExtractor={item => item.idCategory}
      />
    </View>
  );
};

export default Category;
