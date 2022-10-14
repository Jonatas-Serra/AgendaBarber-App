import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Feed: undefined;
  Apointment: undefined;
  Profile: undefined;
};
const Auth = createNativeStackNavigator<RootStackParamList>();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#272a30' },
      }}
    >
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
