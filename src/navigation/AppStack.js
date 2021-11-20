import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Auth} from '../services';
import {
  Avatar,
  Button,
  IndexPath,
  Layout,
  Popover,
  Select,
  SelectItem,
} from '@ui-kitten/components';
// import { Icon } from '@ui-kitten/components';
import Home from '../screens/Home/Home';
import Explore from '../screens/Explore/Explore';
import Category from '../screens/Category/Category'
import Favorite from '../screens/Favorite/Favorite'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function ExploreStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#EA1E63',
          },
          headerTintColor: '#fff',
          headerTitle: 'Main Dish',
        }}
        name="Details"
        component={Details}
      />
    </Stack.Navigator>
  );
}
const AppStack = () => {
  const [visible, setVisible] = React.useState(false);
  const renderToggleButton = () => (
    <TouchableOpacity onPress={() => setVisible(true)}>
      <Image
        source={{
          uri: 'https://www.iconsdb.com/icons/preview/white/list-view-xxl.png',
        }}
        style={{width: 20, marginLeft: 20, height: 20}}
      />
    </TouchableOpacity>
  );
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: '#EA1E63',
          },/>
          ),
          headerTintColor: '#fff',
          headerTitle: 'Your Recipes App',
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Image
                source={{
                  uri: 'https://www.iconsdb.com/icons/preview/white/search-12-xxl.png',
                }}
                style={{width: 20, height: 20}}
              />
              <Popover
                style={{marginTop: 7}}
                visible={visible}
                anchor={renderToggleButton}
                onBackdropPress={() => setVisible(false)}>
                <Layout style={styles.content}>
                  <TouchableOpacity
                    color="black"
                    onPress={() => Auth.SignOut()}>
                    <Text>Sign out</Text>
                  </TouchableOpacity>
                </Layout>
              </Popover>
            </View>
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: '#EA1E63',
          },
          headerTintColor: '#fff',
          headerTitle: 'Explore',
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Image
                source={{
                  uri: 'https://www.iconsdb.com/icons/preview/white/search-12-xxl.png',
                }}
                style={{width: 20, height: 20}}
              />
              <Popover
                style={{marginTop: 7}}
                visible={visible}
                anchor={renderToggleButton}
                onBackdropPress={() => setVisible(false)}>
                <Layout style={styles.content}>
                  <TouchableOpacity
                    color="black"
                    onPress={() => Auth.SignOut()}>
                    <Text>Sign out</Text>
                  </TouchableOpacity>
                </Layout>
              </Popover>
            </View>
          ),
        }}
        name="Explore"
        component={Explore}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: '#EA1E63',
          },
          headerTintColor: '#fff',
          headerTitle: 'Category',
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Image
                source={{
                  uri: 'https://www.iconsdb.com/icons/preview/white/search-12-xxl.png',
                }}
                style={{width: 20, height: 20}}
              />
              <Popover
                style={{marginTop: 7}}
                visible={visible}
                anchor={renderToggleButton}
                onBackdropPress={() => setVisible(false)}>
                <Layout style={styles.content}>
                  <TouchableOpacity
                    color="black"
                    onPress={() => Auth.SignOut()}>
                    <Text>Sign out</Text>
                  </TouchableOpacity>
                </Layout>
              </Popover>
            </View>
          ),
        }}
        name="Category"
        component={Category}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: '#EA1E63',
          },
          headerTintColor: '#fff',
          headerTitle: 'Favorite',
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Image
                source={{
                  uri: 'https://www.iconsdb.com/icons/preview/white/search-12-xxl.png',
                }}
                style={{width: 20, height: 20}}
              />
              <Popover
                style={{marginTop: 7}}
                visible={visible}
                anchor={renderToggleButton}
                onBackdropPress={() => setVisible(false)}>
                <Layout style={styles.content}>
                  <TouchableOpacity
                    color="black"
                    onPress={() => Auth.SignOut()}>
                    <Text>Sign out</Text>
                  </TouchableOpacity>
                </Layout>
              </Popover>
            </View>
          ),
        }}
        name="Favorite"
        component={Favorite}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
    icon: {
    width: 32,
    height: 32,
  },
});
export default AppStack;
