import React from 'react';
import {
  Box,
  Text,
  Button,
  Center,
  FormControl,
  Stack,
  Input,
  WarningOutlineIcon,
  Link,
} from 'native-base';

const SignIn = ({navigation}) => {
  const toggleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <>
      <Box alignItems="center" my="10">
        <Text fontFamily="lobster" fontSize="30">
          Welcome to Vpocket
        </Text>
        <Box w="100%" maxWidth="300px" my="10">
          <FormControl isRequired>
            <Stack mx="4" my="10">
              <FormControl.Label my="5">Email or Username</FormControl.Label>
              <Input
                type="text"
                defaultValue=""
                placeholder="john.dick@gmail.com"
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                Email is wrong
              </FormControl.ErrorMessage>

              <FormControl.Label my="5">Password</FormControl.Label>
              <Input type="password" defaultValue="" placeholder="****dick" />

              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                Password is wrong
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <Button w="90%" alignSelf="center" onPress={() => navigation.navigate('SignUp')}>Sign In</Button>
        </Box>
        <Text>New to Vpcoket? </Text> <Link onPress={toggleSignUp}>SignUp</Link>
      </Box>
    </>
  );
};

export default SignIn;
