import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import SelectPage from '../Select';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [matricula, setMatricula] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const handleLogin = () => {
    console.log('Matricula:', matricula);
    console.log('Senha:', senha);
  };


  const handleRegister = () => {
    console.log('handleRegister called');
    navigation.navigate('SelectPage');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem Vindo! {'\n'} Faça o login ou cadastre-se </Text>
      <TextInput
        style={styles.input}
        placeholder="Matricula"
        value={matricula}
        onChangeText={setMatricula}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TouchableOpacity style={styles.registerButton} onPress={() => handleRegister()}>
  <Text style={styles.registerButtonText}>Cadastre-se</Text>
</TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPassword} onPress={() => console.log('Forgot password')}>
        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;