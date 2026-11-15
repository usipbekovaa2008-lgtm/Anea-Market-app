
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

type Props = {
  onBack: () => void;
};

export default function VerificationScreen({ onBack }: Props) {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.glow} />

      <Text style={styles.time}>9:41</Text>

      <TouchableOpacity onPress={onBack}>
        <Text style={styles.back}>‹</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.hello}>ONE MORE STEP 🩵</Text>

        <Text style={styles.title}>
          Enter your 4-digit code
        </Text>

        <Text style={styles.label}>Code</Text>

        <TextInput
          style={styles.codeInput}
          placeholder="_  _  _  _"
          placeholderTextColor="#80BCEB"
          keyboardType="number-pad"
          maxLength={4}
          value={code}
          onChangeText={setCode}
        />

        <TouchableOpacity onPress={() => setCode('')}>
          <Text style={styles.resend}>Resend Code</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={onBack}
      >
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Almost there! 💙
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FBFF',
    paddingHorizontal: 28,
    overflow: 'hidden',
  },
  glow: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#E1F1FF',
    top: -120,
    right: -100,
  },
  time: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: '600',
    color: '#20243A',
  },
  back: {
    fontSize: 43,
    color: '#20243A',
    marginTop: 22,
  },
  content: {
    marginTop: 85,
  },
  hello: {
    color: '#80BCEB',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 20,
  },
  title: {
    fontSize: 29,
    fontWeight: '800',
    color: '#20243A',
    marginBottom: 48,
  },
  label: {
    fontSize: 17,
    color: '#858D96',
    marginBottom: 15,
  },
  codeInput: {
    fontSize: 28,
    letterSpacing: 12,
    color: '#20243A',
    borderBottomWidth: 1,
    borderBottomColor: '#DCE8F1',
    paddingVertical: 12,
    marginBottom: 28,
  },
  resend: {
    fontSize: 16,
    color: '#80BCEB',
    fontWeight: '600',
  },
  nextButton: {
    position: 'absolute',
    right: 28,
    bottom: 75,
    width: 78,
    height: 78,
    borderRadius: 40,
    backgroundColor: '#80BCEB',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  arrow: {
    color: '#FFFFFF',
    fontSize: 48,
    lineHeight: 57,
  },
  footer: {
    position: 'absolute',
    bottom: 35,
    left: 28,
    color: '#9CBBD4',
    fontSize: 13,
  },
});

