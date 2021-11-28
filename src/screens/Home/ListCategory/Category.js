import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import styles from './Category.style';
import Item from './Item/Item';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Category = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <View style={styles.Row}>
        <Item item={item} navigation={navigation} />
      </View>
    );
  };
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
    <View style={styles.home}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <Text style={styles.titleCategory}>Category</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Category')}>
          <Feather name="arrow-right" color="#333" size={25} />
        </TouchableOpacity>
      </View>
      <FlatList
        style={{height: 170, margin: 5}}
        data={category}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.idCategory}
      />
    </View>
  );
};
export default Category;
