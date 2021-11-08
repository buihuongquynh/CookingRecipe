import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import {Button} from 'react-native';
import {Auth} from '../services';
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Recipe Cooking',
          headerRight: () => <Button title="Sign out" color="black" onPress={() => Auth.SignOut()}/>,
        }}
      />    
    </Stack.Navigator>
  );
};

export default AppStack;
