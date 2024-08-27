import { StyleSheet } from 'react-native';

export default {
  background: {
    flex: 1,
    width: null,
    height: null,
    backgroundImage: '#2A8E2A',
  },
  logoContainer: {
    position: 'absolute',
    top: '25%',
    left: '50%',
    transform: [{ translateX: -70 }],
    flexDirection: 'column', // add this to stack the text and logo vertically
    alignItems: 'center', // add this to center the text and logo horizontally
  },
  logo: {
    width: 140,
    height: 140,
    zIndex: 1, // add this to set the logo's z-index to 1
  },
  logoText: {
    fontSize: 10, // set the font size to 10
    position: 'absolute', // add this to position the text absolutely
    top: 0, // add this to position the text at the top of the logo
    left: 0, // add this to position the text at the left of the logo
    zIndex: 2, // add this to set the text's z-index to 2 (higher than the logo's)
  },
};