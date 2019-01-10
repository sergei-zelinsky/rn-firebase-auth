import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  View,
} from 'react-native';
import ScreenTitle from 'components/ScreenTitle';
import ErrorMessage from 'components/ErrorMessage';
import TextInput from 'components/TextInput';
import firebase from 'react-native-firebase';
import {
  LOGIN_SCREEN,
  MAIN_SCREEN,
} from 'navigation';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: null,
  };

  handleSignUp = async () => {
    try {
      const {email, password} = this.state;

      await firebase.auth().createUserWithEmailAndPassword(email, password);

      this.props.navigation.navigate(MAIN_SCREEN);
    } catch (error) {
      this.setState({
        errorMessage: error.message
      });
    }
  };

  createInputChangeHandler = name => (
    value => {
      this.setState({
        [name]: value,
      });
    }
  );

  handleLogin = () => {
    this.props.navigation.navigate(LOGIN_SCREEN);
  };

  render() {
    const {
      email,
      password,
      errorMessage,
    } = this.state;

    return (
      <View style={styles.container}>
        <ScreenTitle>Sign Up</ScreenTitle>
        {
          errorMessage && (
            <ErrorMessage>
              {this.state.errorMessage}
            </ErrorMessage>
          )
        }
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={this.createInputChangeHandler('email')}
          value={email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={this.createInputChangeHandler('password')}
          value={password}
        />
        <Button
          title="Sign Up"
          onPress={this.handleSignUp}
        />
        <Button
          title="Already have an account? Login"
          onPress={this.handleLogin}
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
  textInput: {
    width: '90%',
  }
});

export default SignUp;
