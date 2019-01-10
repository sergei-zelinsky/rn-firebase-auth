import React from 'react';
import {SwitchNavigator} from 'react-navigation';

import Loading from 'screens/Loading';
import Login from 'screens/Login';
import Main from 'screens/Main';
import SignUp from 'screens/SignUp';

export const LOADING_SCREEN = '@screens/loading';
export const LOGIN_SCREEN = '@screens/login';
export const MAIN_SCREEN = '@screens/main';
export const SIGN_UP_SCREEN = '@screens/sign-up';

const RootStack = SwitchNavigator(
  {
    [LOADING_SCREEN]: Loading,
    [LOGIN_SCREEN]: Login,
    [MAIN_SCREEN]: Main,
    [SIGN_UP_SCREEN]: SignUp,
  },
  {
    initialRouteName: LOADING_SCREEN,
  }
);

export {
  RootStack
};
