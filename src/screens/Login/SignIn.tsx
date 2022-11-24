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
      <Box alignItems="center" pt="20" height="100%" bg="orange.100">
        <Text fontFamily="lobster" fontSize="30" color="green.300">
          Welcome to Vpocket
        </Text>
        <Box w="100%" maxWidth="300px" my="10">
          <FormControl isRequired>
            <Stack mx="4" my="10">
              <FormControl.Label my="5">
                <Text fontFamily="roboto" fontSize="15" color="green.300">
                  Email or Username
                </Text>
              </FormControl.Label>
              <Input
                type="text"
                _focus={{
                  backgroundColor: 'orange.100',
                  borderColor: 'orange.200',
                  px: '3',
                }}
                defaultValue=""
                placeholder="john.dick@gmail.com"
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                Email is wrong
              </FormControl.ErrorMessage>

              <FormControl.Label my="5">
                <Text fontFamily="roboto" fontSize="15" color="green.300">
                  Password
                </Text>
              </FormControl.Label>
              <Input
                type="password"
                defaultValue=""
                _focus={{
                  backgroundColor: 'orange.100',
                  borderColor: 'orange.200',
                  px: '3',
                }}
                placeholder="****dick"
              />

              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                Password is wrong
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <Button
            w="90%"
            alignSelf="center"
            colorScheme="green"
            _text={{
              fontFamily: 'roboto',
              fontSize: '15',
            }}
            onPress={() => navigation.navigate('Question')}>
            Sign In
          </Button>
        </Box>
        <Text>New to Vpcoket? </Text> <Link onPress={toggleSignUp}>SignUp</Link>
      </Box>
    </>
  );
};

export default SignIn;
