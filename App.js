import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../iflunch/src/pages/Welcome';
import Login from  '../iflunch/src/pages/Login';
import SignIn from './src/pages/SignInAluno';
import SelectPage from './src/pages/Select';
import SignInServidor from './src/pages/SignInServidor';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
      <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SelectPage" component={SelectPage} />
        <Stack.Screen name="SignInServidor" component={SignInServidor} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;