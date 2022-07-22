
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './screens/Signup';
import Signin from './screens/Signin';
import Home from './screens/Home'
import Détails from './screens/Détails';
import AddPost from './screens/AddPost';


const Stack = createNativeStackNavigator();

export default function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Signin'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Détails" component={Détails} />
        <Stack.Screen name="AddPost" component={AddPost} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

