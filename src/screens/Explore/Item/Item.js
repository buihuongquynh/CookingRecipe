import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import styles from './Item.style';
import axios from 'axios';
import useItem from './useItem';
const Item = ({item, navigation}) => {
  const {data, deleteFa, addItem, dataNew} = useItem(item.idMeal);
  const [isFavorite, setIsFavorite] = useState(false);
  const dataDeleteOrPost = {
    idMeal: item.idMeal,
    strMeal: item.strMeal,
    strMealThumb: item.strMealThumb,
  };
  return (
    <View style={styles.rowPr}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Details', {data})}>
        <Image
          source={{
            uri: item ? item.strMealThumb : null,
          }}
          style={styles.itemImage}
        />
        <Text style={styles.itemText} numberOfLines={1}>
          {item.strMeal ? item.strMeal : null}
        </Text>
      </TouchableOpacity>

      <View style={styles.Favorites}>
        {data && (
          <Text style={styles.textCategory}>
            {data.strCategory ? data.strCategory : null}
          </Text>
        )}
        <TouchableOpacity
          onPress={() => {
             const result = dataNew ? dataNew.filter(item => item.idMeal !==  data.idMeal) : null
            setIsFavorite(!isFavorite);
            if(!isFavorite) {addItem(dataDeleteOrPost) }
            else{
              deleteFa(result[0].id)
            } 
          
          }}>
          <Image
            source={{
              uri: isFavorite
                ?'http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/512/favorite-icon.png'
                :'https://image.flaticon.com/icons/png/512/121/121727.png',
            }}
            style={styles.favorite}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Item;
