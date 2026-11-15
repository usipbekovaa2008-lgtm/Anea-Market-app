
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
  onNext: () => void;
};

export default function NumberScreen({ onNext }: Props) {
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.glow} />

      <Text style={styles.time}>9:41</Text>

      <View style={styles.content}>
        <Text style={styles.hello}>WELCOME TO BLUE MART 🩵</Text>

        <Text style={styles.title}>
          Enter your mobile number
        </Text>

        <Text style={styles.label}>Mobile Number</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.flag}>🇰🇿</Text>
          <Text style={styles.code}>+7</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            placeholderTextColor="#A8B9C8"
            keyboardType="phone-pad"
            maxLength={10}
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        <Text style={styles.info}>
          We will send you a verification code
        </Text>
      </View>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={onNext}
      >
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Fresh products, happy life ✨
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
  content: {
    marginTop: 107,
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DCE8F1',
    paddingBottom: 13,
    gap: 12,
  },
  flag: {
    fontSize: 27,
  },
  code: {
    fontSize: 19,
    color: '#20243A',
  },
  input: {
    flex: 1,
    fontSize: 17,
    color: '#20243A',
  },
  info: {
    color: '#A4B0BB',
    fontSize: 13,
    marginTop: 16,
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


