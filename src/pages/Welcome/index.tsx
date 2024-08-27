import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';
import Login from '../Login';
import { ImageBackground } from 'react-native';

const Stack = createStackNavigator();

const WelcomeScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000); // navigate to login page after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.background}
      >
        <View style={styles.logoContainer}>
        <Text style={styles.logoText}></Text>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />
        </View>
      </ImageBackground>
    );
  }else {
    return (
      
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
  }
};

export default WelcomeScreen ;