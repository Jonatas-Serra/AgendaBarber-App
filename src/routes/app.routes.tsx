import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Feed from '../screens/Feed';
import Apointment from '../screens/Apointment';
import Profile from '../screens/Profile';

export type RootStackParamList = {
  Feed: undefined;
  Apointment: undefined;
  Profile: undefined;
};

const App = createNativeStackNavigator<RootStackParamList>();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#272a30' },
      }}
    >
      <App.Screen name="Feed" component={Feed} />
      <App.Screen name="Apointment" component={Apointment} />
      <App.Screen name="Profile" component={Profile} />
    </App.Navigator>
  );
};

export default AppRoutes;
