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

const SignUp = ({navigation}) => {
  const toggleSignUp = () => {
    navigation.navigate('SignIn');
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
                  Email
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
              <FormControl.HelperText>
                Must be valid email
              </FormControl.HelperText>
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                Email is not valid
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
              <FormControl.HelperText>
                Must be atleast 6 characters.
              </FormControl.HelperText>
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}>
                Atleast 6 characters are required.
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
            onPress={() => navigation.navigate('SignIn')}>
            Sign Up
          </Button>
        </Box>
        <Text>Already have account on Vpcoket? </Text>{' '}
        <Link onPress={toggleSignUp}>SignIn</Link>
      </Box>
    </>
  );
};

export default SignUp;
