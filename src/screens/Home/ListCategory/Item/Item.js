import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './Item.style';
import axios from 'axios';
const Item = ({item, navigation}) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${item.strCategory}`,
      );
      setData(res.data.meals);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ListCategory', {data});
      }}>
      <View style={styles.Item}>
        <Image
          source={{
            uri: item.strCategoryThumb ? item.strCategoryThumb : null,
          }}
          style={{
            width: '100%',
            height: 110,
            borderRadius: 10,
            marginBottom: 5,
            resizeMode: 'cover',
          }}
        />
        <Text style={styles.Title}>
          {item.strCategory ? item.strCategory : null}
        </Text>
        <Text style={styles.res}>
          {data.length > 0 ? `${data.length} Recipes` : `0 Recipes`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default Item;
