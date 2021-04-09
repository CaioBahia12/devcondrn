import React from 'react';
import ViewLogin from './src/views/ViewLogin';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigators/MainStack';

const App = () => {
  return(
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default App;