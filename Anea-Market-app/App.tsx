
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';

import WelcomeScreen from './src/screens/WelcomeScreen';
import PhoneLogin from './src/screens/PhoneLogin';
import VerifyCode from './src/screens/VerifyCode';
import HomeScreen from './src/screens/HomeScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';

import { COLORS } from './src/theme';

type Screen =
  | 'welcome'
  | 'phone'
  | 'verify'
  | 'home'
  | 'categories';

export default function App() {
  const [currentScreen, setCurrentScreen] =
    useState<Screen>('welcome');

  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {currentScreen === 'welcome' && (
        <WelcomeScreen
          onContinue={() => setCurrentScreen('phone')}
        />
      )}

      {currentScreen === 'phone' && (
        <PhoneLogin
          onContinue={(phoneNumber) => {
            setPhone(phoneNumber);
            setCurrentScreen('verify');
          }}
          onBack={() => setCurrentScreen('welcome')}
        />
      )}

      {currentScreen === 'verify' && (
        <VerifyCode
          phone={phone}
          onVerify={() => setCurrentScreen('home')}
          onBack={() => setCurrentScreen('phone')}
        />
      )}

      {currentScreen === 'home' && (
        <HomeScreen
          onOpenCategories={() => setCurrentScreen('categories')}
        />
      )}

      {currentScreen === 'categories' && (
        <CategoriesScreen
          onBack={() => setCurrentScreen('home')}
          onSelectCategory={(category) => {
            console.log('Таңдалған санат:', category);
            setCurrentScreen('home');
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
