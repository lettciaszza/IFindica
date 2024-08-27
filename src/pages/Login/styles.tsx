import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#34C759',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  registerButton: {
    backgroundColor: '#71C837',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    borderWidth: 1,
    marginTop: 16,
  },
  registerButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#71C837',
    padding: 22,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  forgotPassword: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 20,
  },
});

export default styles;