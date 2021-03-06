import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Pages/Home';
import Status from '../Pages/Status';

const Stack = createStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Status" component={Status} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator