
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
} from 'react-native';

import AneaLogo from '../components/AneaLogo';
import PinkButton from '../components/PinkButton';
import PhoneInput from '../components/PhoneInput';
import { COLORS } from '../theme';

interface PhoneLoginProps {
  onContinue: (phone: string) => void;
  onBack: () => void;
}

export default function PhoneLogin({
  onContinue,
  onBack,
}: PhoneLoginProps) {
  const [phone, setPhone] = useState('');

  const handleContinue = () => {
    if (phone.length === 10) {
      Keyboard.dismiss();
      onContinue(`+7${phone}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            onPress={onBack}
            style={styles.backButton}
          >
            <Text style={styles.backText}>‹</Text>
          </TouchableOpacity>

          <View style={styles.logoContainer}>
            <AneaLogo size={75} />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title}>
              Қош келдіңіз!
            </Text>

            <Text style={styles.description}>
              Anea-Market қосымшасына кіру үшін
              {'\n'}
              телефон нөміріңізді енгізіңіз.
            </Text>
          </View>

          <View style={styles.form}>
            <PhoneInput
              value={phone}
              onChangeText={setPhone}
            />

            <PinkButton
              title="Жалғастыру"
              onPress={handleContinue}
              disabled={phone.length !== 10}
            />
          </View>

          <Text style={styles.bottomText}>
            Жалғастыру арқылы сіз пайдалану шарттарымен
            келісесіз.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 25,
    paddingTop: 15,
    paddingBottom: 25,
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {
    fontSize: 35,
    color: COLORS.primaryDark,
    lineHeight: 40,
    marginTop: -4,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 25,
  },
  textContainer: {
    marginTop: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 27,
    fontWeight: '800',
    color: COLORS.text,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 23,
    marginTop: 12,
  },
  form: {
    gap: 22,
  },
  bottomText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 19,
    marginTop: 25,
  },
});
