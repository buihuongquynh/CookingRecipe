import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Start from './src/screens/start-app/Start';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer initialRouteName="start">
        <Stack.Navigator>
          <Stack.Screen
            name="start"
            component={Start}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};
export default App;
