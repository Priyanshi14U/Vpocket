import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Text, Button} from 'native-base';

const Dashboard = ({navigation}) => {
  return (
    <>
      <Box bg="white.200" height="100%" backgroundColor="orange.100">
        <Box bg="orange.100" height="60%">
          <Box m="4">
            <Text fontFamily="lobster" fontSize="20">
              26 January, 2022
            </Text>
            <Text fontFamily="lobster" fontSize="15" style={{color: 'orange'}}>
              Good Morning, Alice
            </Text>
          </Box>

          <Box
            width="80%"
            bg="green.300"
            borderTopRightRadius="15"
            borderBottomRightRadius="15"
            height="72%"
            position="relative">
            <Box
              width="90%"
              bg="white.100"
              borderTopRightRadius="10"
              borderBottomRightRadius="10"
              height="25%"
              mt="5"
              justifyContent="center">
              <Text
                fontFamily="lobster"
                fontSize="20"
                style={{color: 'green'}}
                alignSelf="flex-end"
                pr="5">
                Let's train some neurons!
              </Text>
            </Box>

            <Box
              width="75%"
              bg="green.100"
              borderTopRightRadius="10"
              borderBottomRightRadius="10"
              height="15%"
              mt="3"
              justifyContent="center">
              <Text
                fontFamily="lobster"
                fontSize="15"
                style={{color: 'grey'}}
                alignSelf="flex-start"
                pl="5">
                Omnipontent
              </Text>
            </Box>
            <Box
              width="75%"
              bg="green.100"
              borderTopRightRadius="10"
              borderBottomRightRadius="10"
              height="15%"
              mt="3"
              justifyContent="center">
              <Text
                fontFamily="lobster"
                fontSize="15"
                style={{color: 'grey'}}
                alignSelf="flex-start"
                pl="5">
                Omnipontent
              </Text>
            </Box>
            <Box
              width="75%"
              bg="green.100"
              borderTopRightRadius="10"
              borderBottomRightRadius="10"
              height="15%"
              mt="3"
              justifyContent="center">
              <Text
                fontFamily="lobster"
                fontSize="15"
                style={{color: 'grey'}}
                alignSelf="flex-start"
                pl="5">
                Omnipontent
              </Text>
            </Box>

            <Box
              width="5%"
              bg="green.200"
              borderTopLeftRadius="10"
              borderBottomRightRadius="10"
              height="50%"
              position="absolute"
              right="0"
              bottom="0"></Box>
          </Box>
        </Box>
        <Box
          width="80%"
          bg="purple.300"
          borderBottomLeftRadius="15"
          borderTopLeftRadius="15"
          height="15%"
          mt="4"
          position="relative"
          justifyContent="center"
          alignSelf="flex-end">
          <Text
            fontFamily="lobster"
            fontSize="25"
            alignSelf="center"
            style={{color: 'white'}}>
            Take a Quiz!
          </Text>
          <Box
            width="5%"
            height="90%"
            bg="blue.300"
            borderBottomLeftRadius="15"
            borderTopRightRadius="15"
            position="absolute"
            left="0"
            bottom="0"></Box>
        </Box>
        <Box
          width="80%"
          bg="blue.300"
          borderBottomLeftRadius="15"
          borderTopLeftRadius="15"
          height="15%"
          mt="4"
          position="relative"
          justifyContent="center"
          alignSelf="flex-end">
          <Text
            fontFamily="lobster"
            fontSize="25"
            alignSelf="center"
            style={{color: 'white'}}>
            Accept Charlie Challenge
          </Text>
          <Box
            width="5%"
            height="90%"
            bg="purple.300"
            borderBottomLeftRadius="15"
            borderTopRightRadius="15"
            position="absolute"
            left="0"
            bottom="0"></Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
