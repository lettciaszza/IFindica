import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const cpfMask = (value) => {
  const length = value.length;
  if (length === 11) {
    return '999.999.99-99';
  } else if (length === 14) {
    return '99.999.999/9999-99';
  }
  return '';
};

const SignInServidor = () => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [matricula, setMatricula] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      console.log('Registering user...');
      console.log('Name:', name);
      console.log('Course:', course);
      console.log('Matricula:', matricula);
      console.log('CPF:', cpf);
      console.log('Password:', password);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça o seu cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Course"
        value={course}
        onChangeText={(text) => setCourse(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Matricula"
        value={matricula}
        onChangeText={(text) => setMatricula(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Create Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default SignInServidor;