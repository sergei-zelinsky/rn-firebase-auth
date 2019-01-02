import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  View,
} from 'react-native';
import ScreenTitle from 'components/ScreenTitle';
import firebase from 'react-native-firebase'
import * as SCREENS from 'constants/screens';

class Main extends Component {
  state = {
    currentUser: null
  };

  componentDidMount() {
    const {currentUser} = firebase.auth();

    this.setState({
      currentUser,
    })
  }

  handleSignOut = () => {
    firebase.auth().signOut();

    this.props.navigation.navigate(SCREENS.LOGIN);

  };

  render() {
    const {currentUser} = this.state;

    return (
      <View style={styles.container}>
        <ScreenTitle>
          Hi {currentUser && currentUser.email}!
        </ScreenTitle>
        <Button
          title="Sign Out"
          onPress={this.handleSignOut}
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
});

export default Main;
