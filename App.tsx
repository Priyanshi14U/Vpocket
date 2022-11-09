import React from 'react';
import {NativeBaseProvider, Box, Text} from 'native-base';

const App = () => {
  return (
    <>
      <NativeBaseProvider>
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
          <Text>Open up App.js to start working on your app!</Text>
        </Box>
      </NativeBaseProvider>
    </>
  );
};

export default App;
