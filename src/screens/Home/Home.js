import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Slide from './slide/Slide';
import useHome from './useHome';
import ListCategory from './ListCategory/Category';
import ListFood from './ListFood/Food';
import NavigationBottom from '../../layout/NavigationBottom/NavigationBottom';
const Home = () => {
  const {data} = useHome();
  return (
      <ScrollView>
        <View>
          <Slide />
          <ListCategory />
          <ListFood />
        </View>
      </ScrollView>
  );
};

export default Home;
