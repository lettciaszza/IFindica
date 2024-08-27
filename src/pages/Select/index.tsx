import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../Select/styles';

const Stack = createStackNavigator();

const SelectPage = ({ navigation }) => {
  return (
    <ImageBackground
    source={require('../../assets/backgroundSelect.png')}
    style={styles.backgroundImage}
  >

    <View style={styles.container}>
      <Text style={styles.title}>
        Faça o cadastro no nosso{'\n'} aplicativo.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text>Aluno</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignInServidor')}
        >
          <Text>Servidor</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>

  );
};

export default SelectPage;