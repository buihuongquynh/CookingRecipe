import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Favorite from '../screens/Favorite/Favorite';
import Explore from '../screens/Explore/Explore';
import Category from '../screens/Category/Category';
import Home from '../screens/Home/Home';
import Details from '../screens/Details/Details';
import Search from './../screens/Search/Search';
import Header from '../components/Header/Header';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ListCategory from '../screens/ListCategory/ListCategory';
const Tab = createBottomTabNavigator();
function BottomStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#EA1E63',
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: 'OpenSans-Medium',
        },
        tabBarActiveTintColor: '#EA1E63',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 55,
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
          headerTitle: () => <Header title="Your Recipes App" />,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Explore"
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="scissors" color={color} size={24} />
          ),
          headerTitle: () => <Header title="Explore" />,
        }}
        component={Explore}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="category" size={24} color={color} />
          ),
          headerTitle: () => <Header title="Category" />,
        }}
        name="Category"
        component={Category}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="heart" size={24} color={color} />
          ),
          headerTitle: () => <Header title="Favorite" />,
        }}
        name="Favorite"
        component={Favorite}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomStack"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#EA1E63',
        },
      }}>
      <Stack.Screen
        name="BottomStack"
        component={BottomStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerTitle: 'Details',
          headerRight: () => {
            return (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 10}}>
                  <Feather name="heart" color="#fff" size={22} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name="share-2" color="#fff" size={22} />
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        options={{
          headerTitle: 'List Food Category',
          headerRight: () => {
            return (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 10}}>
                  <Feather name="list" color="#fff" size={22} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name="share-2" color="#fff" size={22} />
                </TouchableOpacity>
              </View>
            );
          },
        }}
        name="ListCategory"
        component={ListCategory}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
