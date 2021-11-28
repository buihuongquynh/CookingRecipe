import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
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
      style={styles.item}
      onPress={() => navigation.navigate('ListCategory', {data})}>
      <Image
        source={{
          uri: item ? item.strCategoryThumb : null,
        }}
        style={styles.itemImage}
      />
      <View style={styles.itemContent}>
        <Text style={styles.itemText} numberOfLines={1}>
          {item.strCategory ? item.strCategory : null}
        </Text>
        {data.length > 0 && (
          <Text style={styles.textCategory}>
            {data.length ? `${data.length} Recipes` : `0 Recipes`}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Item;
