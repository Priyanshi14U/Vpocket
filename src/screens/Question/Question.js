import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Text, Button} from 'native-base';

const Question = ({navigation}) => {
  const questionDataSet = {
    0: {
      questionId: 100,
      questionDetail: 'What is your Age Group?',
      questionOptions: ['I am a Child', 'I am a Teenager', 'I am an Adult'],
      chooseAnswer: '',
      colorScheme: 'green',
      backgroundScheme: 'orange',
    },
    1: {
      questionId: 101,
      questionDetail: 'How well is your Vocabulary?',
      questionOptions: ['Beginner', 'Intermediate', 'Advance'],
      chooseAnswer: '',
      colorScheme: 'orange',
      backgroundScheme: 'green',
    },
    2: {
      questionId: 102,
      questionDetail: 'What is your daily goal?',
      questionOptions: ['10-15 minutes', '25-30 minutes', '40-45 minutes'],
      chooseAnswer: '',
      colorScheme: 'red',
      backgroundScheme: 'green',
    },
  };

  const [userData, setUserData] = React.useState(questionDataSet);
  const [currentId, setCurrentId] = React.useState(0);

  const changeQuestionId = button => {
    userData[currentId]['chooseAnswer'] =
      userData[currentId]['questionOptions'][button];
    let newUserData = {...userData};
    setUserData(newUserData);
    if (currentId == 2) {
      navigation.push('Dashboard');
    } else {
      setCurrentId(currentId + 1);
    }
  };

  return (
    <Box height="100%">
      {console.log(userData[currentId]['colorScheme'])}
      <Box
        width="90%"
        bg={`${userData[currentId]['colorScheme']}.100`}
        borderTopRightRadius="15"
        borderTopLeftRadius="15"
        height="95%"
        pt="180"
        position="absolute"
        alignSelf="center"
        bottom="0">
        <Text
          fontFamily="lobster"
          fontSize="27"
          alignSelf="center"
          color={`${userData[currentId]['colorScheme']}.300`}
          my="6">
          {userData[currentId]['questionDetail']}
        </Text>
        <Button
          width="80%"
          height="10%"
          alignSelf="center"
          colorScheme="white"
          _pressed={{
            bgColor: `${userData[currentId]['colorScheme']}.200`,
            _text: {color: 'white.100'},
          }}
          _text={{
            fontFamily: 'lobster',
            fontSize: '20',
            color: `${userData[currentId]['colorScheme']}.300`,
          }}
          variant="subtle"
          my="2"
          borderRadius="10"
          onPress={() => changeQuestionId(0)}>
          {userData[currentId]['questionOptions'][0]}
        </Button>
        <Button
          width="80%"
          height="10%"
          alignSelf="center"
          colorScheme="white"
          _pressed={{
            bgColor: `${userData[currentId]['colorScheme']}.200`,
            _text: {color: 'white.100'},
          }}
          _text={{
            fontFamily: 'lobster',
            fontSize: '20',
            color: `${userData[currentId]['colorScheme']}.300`,
          }}
          variant="subtle"
          my="2"
          borderRadius="10"
          onPress={() => changeQuestionId(1)}>
          {userData[currentId]['questionOptions'][1]}
        </Button>
        <Button
          width="80%"
          height="10%"
          alignSelf="center"
          colorScheme="white"
          _pressed={{
            bgColor: `${userData[currentId]['colorScheme']}.200`,
            _text: {color: 'white.100'},
          }}
          _text={{
            fontFamily: 'lobster',
            fontSize: '20',
            color: `${userData[currentId]['colorScheme']}.300`,
          }}
          variant="subtle"
          my="2"
          borderRadius="10"
          onPress={() => changeQuestionId(2)}>
          {userData[currentId]['questionOptions'][2]}
        </Button>
        <Box
          height="2%"
          position="absolute"
          width="100%"
          borderTopRightRadius="15"
          borderTopLeftRadius="15"
          top="0"
          bg={`${userData[currentId]['colorScheme']}.300`}></Box>
      </Box>
    </Box>
  );
};

export default Question;
