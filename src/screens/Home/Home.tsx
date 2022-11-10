import React from 'react';
import {StyleSheet} from 'react-native';
import {Box,Text,  Button} from 'native-base';

const Home = ({navigation}) => {


    const clicked = () => {
        console.log('hello singin');
        navigation.navigate('Home');
    }

  return (
    <>
      <Box>
        <Text fontFamily="lobster" fontSize="100">Hello Home</Text>
        <Button onPress={() => clicked()}>Click Me</Button>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  textStyle:{
    fontSize: 30,
    fontFamily: 'LobsterTwo-Regular'
  }
})

export default Home;
