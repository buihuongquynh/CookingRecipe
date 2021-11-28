import React, {useState, useEffect} from 'react';
import {View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './Slide.style';
import Slick from 'react-native-slick';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
const Slide = () => {
  const navigation = useNavigation();
  const [list, setList] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=a`,
      );
      setList(res.data.meals);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Slick
        autoplay={true}
        style={styles.wrapper}
        showsPagination={true}
        paginationStyle={{position: 'relative', marginTop: 30}}
        dotStyle={{width: 10, height: 10, borderRadius: 10, marginLeft: 12}}
        activeDotStyle={{
          width: 12,
          height: 12,
          borderRadius: 10,
          backgroundColor: '#EA1E63',
          marginLeft: 12,
        }}>
        {list.map((data, idx) => {
          return (
            <TouchableOpacity
              style={styles.slide1}
              key={idx}
              onPress={() => {
                navigation.navigate('Details', {data});
              }}>
              <Image
                source={{
                  uri: data.strMealThumb ? data.strMealThumb : null,
                }}
                style={styles.item}
              />
              <View style={styles.content}>
                <Text style={styles.textItem}>
                  {data.strMeal ? data.strMeal : null}
                </Text>
                <Text style={{color: '#fff'}}>
                  {data.strCategory ? data.strCategory : null}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </Slick>
    </>
  );
};
export default Slide;
