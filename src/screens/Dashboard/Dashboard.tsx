import React from 'react';
import {Box, Text, Button} from 'native-base';

const Dashboard = ({navigation}) => {
  return (
    <>
      <Box>
        <Text>Hello Dashboard</Text>
        <Button onPress={() => console.log('hello world')}>Click Me</Button>
      </Box>
    </>
  );
};

export default Dashboard;
