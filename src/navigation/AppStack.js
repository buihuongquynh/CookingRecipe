import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import {
  Avatar,
  Button,
  IndexPath,
  Layout,
  Popover,
  Select,
  SelectItem,
  Text,
} from '@ui-kitten/components';
import {Image, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Auth} from '../services';
const Stack = createNativeStackNavigator();

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
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#EA1E63',
          },
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
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
});
export default AppStack;
