
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';

import AneaLogo from '../components/AneaLogo';
import PinkButton from '../components/PinkButton';
import { COLORS, RADIUS } from '../theme';

interface WelcomeScreenProps {
  onContinue: () => void;
}

export default function WelcomeScreen({
  onContinue,
}: WelcomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <AneaLogo size={100} />
        </View>

        <View style={styles.illustrationContainer}>
          <View style={styles.circle}>
            <Text style={styles.berry}>🫐</Text>
            <Text style={styles.fruit}>🍓</Text>
            <Text style={styles.fruitTwo}>🍇</Text>
            <Text style={styles.fruitThree}>🫐</Text>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Fresh products,{'\n'}
            <Text style={styles.titleBlue}>delivered to you!</Text>
          </Text>

          <Text style={styles.description}>
            Ең сапалы және жаңа өнімдер
            {'\n'}
            енді сіздің үйіңізге жеткізіледі.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <PinkButton
            title="Бастау"
            onPress={onContinue}
          />

          <Text style={styles.bottomText}>
            Anea-Market — әр күнге балғындық!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
    paddingBottom: 25,
    justifyContent: 'space-between',
  },

  logoContainer: {
    alignItems: 'center',
    marginTop: 10,
  },

  illustrationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  circle: {
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  berry: {
    fontSize: 105,
  },

  fruit: {
    position: 'absolute',
    fontSize: 55,
    left: 15,
    top: 35,
  },

  fruitTwo: {
    position: 'absolute',
    fontSize: 55,
    right: 15,
    top: 45,
  },

  fruitThree: {
    position: 'absolute',
    fontSize: 45,
    bottom: 20,
    right: 40,
  },

  textContainer: {
    alignItems: 'center',
  },

  title: {
    fontSize: 29,
    fontWeight: '800',
    color: COLORS.text,
    textAlign: 'center',
    lineHeight: 38,
  },

  titleBlue: {
    color: COLORS.primaryDark,
  },

  description: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 23,
    marginTop: 14,
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },

  bottomText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 18,
  },
});
