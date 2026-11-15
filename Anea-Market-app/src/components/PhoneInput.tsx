
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import { COLORS, RADIUS } from '../theme';

interface PhoneInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export default function PhoneInput({
  value,
  onChangeText,
}: PhoneInputProps) {
  const handleDone = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Телефон нөмірі</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.countryCode}>🇰🇿 +7</Text>

        <View style={styles.divider} />

        <TextInput
          style={styles.input}
          placeholder="777 123 45 67"
          placeholderTextColor={COLORS.textSecondary}
          keyboardType="phone-pad"
          value={value}
          onChangeText={(text) =>
            onChangeText(text.replace(/\D/g, '').slice(0, 10))
          }
          maxLength={10}
        />
      </View>

      <Text style={styles.hint}>
        Сізге растау коды SMS арқылы жіберіледі
      </Text>

      <TouchableOpacity
        style={styles.doneButton}
        onPress={handleDone}
      >
        <Text style={styles.doneText}>Дайын</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 10,
  },
  inputContainer: {
    height: 58,
    backgroundColor: COLORS.inputBackground,
    borderRadius: RADIUS.medium,
    borderWidth: 1,
    borderColor: COLORS.border,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  countryCode: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.text,
  },
  divider: {
    width: 1,
    height: 25,
    backgroundColor: COLORS.border,
    marginHorizontal: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: COLORS.text,
  },
  hint: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 9,
  },
  doneButton: {
    alignSelf: 'flex-end',
    marginTop: 12,
    paddingVertical: 8,
    paddingHorizontal: 18,
    backgroundColor: COLORS.primaryLight,
    borderRadius: RADIUS.small,
  },
  doneText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primaryDark,
  },
});

