import React, {Component} from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ScreenTitle from 'components/ScreenTitle';
import ErrorMessage from 'components/ErrorMessage';
import TextInput from 'components/TextInput';
import firebase from 'react-native-firebase'
import * as SCREENS from 'constants/screens';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: null,
  };

  handleLogin = async () => {
    try {
      const {
        email,
        password
      } = this.state;

      await firebase.auth().signInWithEmailAndPassword(email, password);

      this.props.navigation.navigate(SCREENS.MAIN);
    } catch (error){
      this.setState({
        errorMessage:error.message
      });
    }
  };

  handleSignUp = () => {
    this.props.navigation.navigate(SCREENS.SIGN_UP);
  };

  createInputChangeHandler = name => (
    value => {
      this.setState({
        [name]: value,
      });
    }
  );

  render() {
    const {
      email,
      password,
      errorMessage,
    } = this.state;
    return (
      <View style={styles.container}>
        <ScreenTitle>
          Login
        </ScreenTitle>
        {
          errorMessage && (
            <ErrorMessage>
              {errorMessage}
            </ErrorMessage>
          )
        }
        <TextInput
          autoCapitalize="none"
          onChangeText={this.createInputChangeHandler('email')}
          placeholder="Email"
          style={styles.textInput}
          value={email}
        />
        <TextInput
          autoCapitalize="none"
          onChangeText={this.createInputChangeHandler('password')}
          placeholder="Password"
          secureTextEntry
          style={styles.textInput}
          value={password}
        />
        <Button
          title="Login"
          onPress={this.handleLogin}
        />
        <Button
          title="Don't have an account? Sign Up"
          onPress={this.handleSignUp}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '90%',
  }
});

export default Login;
