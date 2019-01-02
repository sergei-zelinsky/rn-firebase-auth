import React from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
} from 'react-native';

const TextInput = ({style, ...rest}) => (
  <RNTextInput
    style={{
      ...styles.textInput,
      ...style,
    }}
    {...rest}
  />
);

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    paddingLeft: 8,
    borderRadius: 2,
  }
});

export default TextInput;
