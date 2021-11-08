import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import Signup from '../screens/Signup/Signup';
import StartApp from '../screens/start-app/Start';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Start"
        component={StartApp}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
