import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../../screens/Auth/Login';


const Stack = createNativeStackNavigator();
// @refresh reset
const AuthNavigator = ({ route }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />

      
    </Stack.Navigator>
  );
};
export default AuthNavigator;
