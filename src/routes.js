import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FF7A7E',
          },
          headerTintColor: '#FFF',
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          opations={{ title: 'Principal' }}
        />
        <Stack.Screen name="User" component={User} options={User.options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
