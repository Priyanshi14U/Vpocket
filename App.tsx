import React from 'react';
import {NativeBaseProvider, Box, Text} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home/Home';
import SignIn from './src/screens/Login/SignIn';
import SignUp from './src/screens/Login/SignUp';
import Dashboard from './src/screens/Dashboard/Dashboard';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
};

export default App;
