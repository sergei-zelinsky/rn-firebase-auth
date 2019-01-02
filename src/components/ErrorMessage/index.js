import React from 'react'
import {
  StyleSheet,
  Text,
} from 'react-native';

const ErrorMessage = ({style, children, ...rest}) => (
  <Text
    style={{
      ...styles.errorMessage,
      ...style,
    }}
  >
    {children}
  </Text>
);

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
    padding: 4,
  },
});

export default ErrorMessage;

