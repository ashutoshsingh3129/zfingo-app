import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import LoginScreen from '../screens/Auth/Login';
import HomeScreen from '../screens/Home/Home';

// Create Navigators
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Authentication Stack
const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />

      {/* Add other authentication-related screens here */}
    </Stack.Navigator>
  );
};

// Main App Stack
const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* Add more stack screens as needed */}
    </Stack.Navigator>
  );
};

// Drawer Navigation
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={MainStackNavigator} />
      <Drawer.Screen name="Login" component={AuthNavigator} />
      {/* Add more drawer items here */}
    </Drawer.Navigator>
  );
};

// Main Navigator
const MainNavigator = () => {
  return (
    // <NavigationContainer>
      <DrawerNavigation />
    // </NavigationContainer>
  );
};

export default MainNavigator;
