import React from 'react';
import {Box, Text, Button} from 'native-base';

const Home = ({navigation}) => {


    const clicked = () => {
        console.log('hello singin');
        navigation.navigate('Home');
    }

  return (
    <>
      <Box>
        <Text>Hello Home</Text>
        <Button onPress={() => clicked()}>Click Me</Button>
      </Box>
    </>
  );
};

export default Home;
