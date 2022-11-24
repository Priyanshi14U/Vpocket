import React from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home/Home';
import SignIn from './src/screens/Login/SignIn';
import SignUp from './src/screens/Login/SignUp';
import Dashboard from './src/screens/Dashboard/Dashboard';
import Question from './src/screens/Question/Question';

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
      primary : {
        100:"#D3EDDC",
        200:"#91D0A7",
        300:"#139A43",
      },
      green: {
   
        100:"#D3EDDC",
        200:"#91D0A7",
        300:"#139A43",
     
      },
      orange: {

        100:"#EEDFC5",
        200:"#ECA72C",
        300:"#D97706",

      },
      red: {
        100:"#FFC2C4",
        200:"#FFA0A2",
        300:"#E3170A",
      },
      blue: {
   
        100:"",
        200:"",
        300:"#7B61FF",

      },
      purple: {

        100:"",
        200:"",
        300:"#9E00FF",
 
      },
      white:{
        100:"#FFFFFF",
        200:"#F2F2F2",
        300:"#808080"
      }
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
            initialRouteName="SignIn">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Question" component={Question} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
};

export default App;
