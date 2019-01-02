import React from 'react'
import {SwitchNavigator} from 'react-navigation'
import * as SCREENS from 'constants/screens';

import Loading from 'screens/Loading';
import Login from 'screens/Login';
import Main from 'screens/Main';
import SignUp from 'screens/SignUp';

const App = SwitchNavigator(
  {
    [SCREENS.LOADING]: Loading,
    [SCREENS.LOGIN]: Login,
    [SCREENS.MAIN]: Main,
    [SCREENS.SIGN_UP]: SignUp,
  },
  {
    initialRouteName: SCREENS.LOADING,
  }
);

export default App;
