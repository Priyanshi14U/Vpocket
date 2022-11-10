import React from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home/Home';
import SignIn from './src/screens/Login/SignIn';
import SignUp from './src/screens/Login/SignUp';
import Dashboard from './src/screens/Dashboard/Dashboard';

const App = () => {
  const Stack = createNativeStackNavigator();
  const theme = extendTheme({
    fontConfig: {
      Roboto: {
        100: {
          normal: "Roboto-Light",
          italic: "Roboto-LightItalic",
        },
        200: {
          normal: "Roboto-Light",
          italic: "Roboto-LightItalic",
        },
        300: {
          normal: "Roboto-Light",
          italic: "Roboto-LightItalic",
        },
        400: {
          normal: "Roboto-Regular",
          italic: "Roboto-Italic",
        },
        500: {
          normal: "Roboto-Medium",
        },
        600: {
          normal: "Roboto-Medium",
          italic: "Roboto-MediumItalic",
        },
      },
    },
    colors: {
      primary: {},
      amber: {},
    },
    fontSizes: {},
    fonts: {
      lobster:"LobsterTwo-Regular",
      roboto:"Roboto"
    },
    config: {
      initialColorMode: 'light',
    },
  });

  return (
    <>
      <NativeBaseProvider theme={theme}>
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
