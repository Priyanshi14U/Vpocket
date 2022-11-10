import React from 'react';
import {Box, Text, Button} from 'native-base';

const SignIn = ({navigation}) => {
  return (
    <>
      <Box>
        <Text>Hello SignIn</Text>
        <Button onPress={() => navigation.navigate('SignUp')}>Click Me</Button>
      </Box>
    </>
  );
};

export default SignIn;
