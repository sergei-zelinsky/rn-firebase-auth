import React, {Component} from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import firebase from 'react-native-firebase';
import * as SCREENS from 'constants/screens';

class Loading extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      const nextScreen = user ? SCREENS.MAIN : SCREENS.SIGN_UP;

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
