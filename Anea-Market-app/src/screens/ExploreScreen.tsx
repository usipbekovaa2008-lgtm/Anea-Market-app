
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

import AneaLogo from '../context/CartContext';
import PinkButton from '../context/PinkButton';
import { COLORS, RADIUS } from '../theme';

interface VerifyCodeProps {
  phone: string;
  onVerify: () => void;
  onBack: () => void;
}

export default function VerifyCode({
  phone,
  onVerify,
  onBack,
}: VerifyCodeProps) {
  const [code, setCode] = useState('');
  const inputRef = useRef<React.ComponentRef<typeof TextInput>>(null);

  const handleVerify = () => {
    if (code.length === 4) {
      Keyboard.dismiss();
      onVerify();
    }
  };

  const handleDone = () => {
    Keyboard.dismiss();
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
              Кодты растау
            </Text>

            <Text style={styles.description}>
              Біз {phone} нөміріне растау кодын жібердік.
              {'\n'}
              Төменге 4 таңбалы кодты енгізіңіз.
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => inputRef.current?.focus()}
          >
            <View style={styles.codeContainer}>
              {[0, 1, 2, 3].map((index) => (
                <View
                  key={index}
                  style={[
                    styles.codeBox,
                    code.length === index && styles.activeCodeBox,
                  ]}
                >
                  <Text style={styles.codeText}>
                    {code[index] || ''}
                  </Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>

          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={(text) =>
              setCode(text.replace(/\D/g, '').slice(0, 4))
            }
            keyboardType="number-pad"
            maxLength={4}
            style={styles.hiddenInput}
            autoFocus={false}
          />

          <TouchableOpacity
            style={styles.resendButton}
            onPress={() => {
              setCode('');
              Keyboard.dismiss();
            }}
          >
            <Text style={styles.resendText}>
              Кодты қайта енгізу
            </Text>
          </TouchableOpacity>

          <View style={styles.buttonContainer}>
            <PinkButton
              title="Растау"
              onPress={handleVerify}
              disabled={code.length !== 4}
            />

            <TouchableOpacity
              style={styles.doneButton}
              onPress={handleDone}
            >
              <Text style={styles.doneText}>Дайын</Text>
            </TouchableOpacity>
          </View>
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
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 27,
    fontWeight: '800',
    color: COLORS.text,
  },
  description: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 23,
    marginTop: 12,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 14,
  },
  codeBox: {
    width: 58,
    height: 62,
    backgroundColor: COLORS.inputBackground,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeCodeBox: {
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  codeText: {
    fontSize: 25,
    fontWeight: '700',
    color: COLORS.text,
  },
  hiddenInput: {
    position: 'absolute',
    width: 1,
    height: 1,
    opacity: 0,
  },
  resendButton: {
    alignSelf: 'center',
    marginTop: 25,
  },
  resendText: {
    color: COLORS.primaryDark,
    fontSize: 14,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 'auto',
    paddingTop: 25,
  },
  doneButton: {
    alignSelf: 'center',
    padding: 12,
    marginTop: 5,
  },
  doneText: {
    color: COLORS.primaryDark,
    fontSize: 14,
    fontWeight: '700',
  },
});
