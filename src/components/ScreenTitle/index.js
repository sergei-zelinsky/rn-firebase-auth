import React from 'react'
import {
  StyleSheet,
  Text,
} from 'react-native';

const ScreenTitle = ({style, children, ...rest}) => (
  <Text
    style={{
      ...styles.acreenTitle,
      ...style,
    }}
  >
    {children}
  </Text>
);

const styles = StyleSheet.create({
  acreenTitle: {
    fontSize: 22,
    marginBottom: 8,
  },
});

export default ScreenTitle;

