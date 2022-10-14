import React from 'react';
import { View, StatusBar, PermissionsAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';

import Routes from './routes';

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Permissão de localização',
        message:
          'O aplicativo precisa da sua localização para funcionar corretamente',
        buttonNeutral: 'Pergunte-me depois',
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Você pode usar a localização');
    } else {
      console.log('Localização negada');
    }
  } catch (err) {
    console.warn(err);
  }
};

const App: React.FC = () => {
  requestLocationPermission();
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#272a30" />
      <AppProvider>
        <View style={{ backgroundColor: '#312e38', flex: 1 }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
