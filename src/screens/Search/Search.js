import React, {useEffect, useState} from 'react';
import {
  Alert,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SearchBar} from 'react-native-elements';
import axios from 'axios';
import styles from './Search.style';
const IconBack = ({navigation}) => {
  return (
    <TouchableOpacity
      style={{marginLeft: 10}}
      onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" size={24} color="#fff" />
    </TouchableOpacity>
  );
};

const Item = ({data, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate('Details', {data});
      }}>
      <Image source={{uri: data.strMealThumb}} style={styles.itemImage} />
      <View style={{width: '80%'}}>
        <Text style={styles.itemName} numberOfLines={1}>
          {data.strMeal ? data.strMeal : null}
        </Text>
        <Text style={styles.itemCategory}>
          {data.strCategory ? data.strCategory : null}
        </Text>
        <Text style={styles.itemArea}>
          {data.strArea ? data.strArea : null}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

function Search({navigation}) {
  const [name, setName] = useState(null);
  const [list, setList] = useState([]);

  const renderItem = ({item}) => <Item data={item} navigation={navigation} />;

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${
          name ? name : null
        }`,
      );
      setList(res.data.meals);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [name]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <SearchBar
        placeholder="Search..."
        onChangeText={setName}
        value={name}
        searchIcon={<IconBack navigation={navigation} />}
        containerStyle={{backgroundColor: '#EA1E63'}}
        inputContainerStyle={{backgroundColor: '#f23072'}}
        inputStyle={{color: '#fff'}}
        placeholderTextColor="#fff"
        underlineColorAndroid="#fff"
        clearIcon={{color: '#fff'}}
      />
      {list && (
        <FlatList
          data={list}
          keyExtractor={Item => Item.idMeal}
          style={styles.list}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
  );
}

export default Search;
