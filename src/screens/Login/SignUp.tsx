import React from 'react';
import {Box, Text, Button} from 'native-base';

const SignUp = ({navigation}) => {
  return (
    <>
      <Box>
        <Text>Hello SignUp</Text>
        <Button onPress={() => navigation.navigate('Dashboard')}>
          Click Me
        </Button>
      </Box>
    </>
  );
};

export default SignUp;
