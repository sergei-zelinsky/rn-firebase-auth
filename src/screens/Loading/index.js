import React, {Component} from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import firebase from 'react-native-firebase';
import {
  MAIN_SCREEN,
  SIGN_UP_SCREEN,
} from 'navigation';

class Loading extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      const nextScreen = user ? MAIN_SCREEN : SIGN_UP_SCREEN;

      this.props.navigation.navigate(nextScreen);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator
          style={styles.activityIndicator}
          size="large"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activityIndicator: {
    marginTop: 16,
  },
});

export default Loading;
