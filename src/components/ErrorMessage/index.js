import React from 'react';
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
    color: '#ff0000',
    padding: 4,
  },
});

export default ErrorMessage;
