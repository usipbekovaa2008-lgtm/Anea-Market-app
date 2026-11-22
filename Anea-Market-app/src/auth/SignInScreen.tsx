import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../theme';

export default function SignInScreen({ navigation }: any) {
  const [phone, setPhone] = useState('');

  const handleContinuePhone = () => {
    const cleaned = phone.trim();
    if (cleaned.length < 7) {
      Alert.alert('Нөмірді тексеріңіз', 'Телефон нөмірін толық енгізіңіз.');
      return;
    }
    navigation.navigate('Verification', { phone: `+7 ${cleaned}` });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.heroBox}>
          <Text style={styles.heroEmoji}>🛒</Text>
          <Text style={styles.brand}>ANEA</Text>
          <Text style={styles.title}>ANEA арқылы азық-түлік{'\n'}алдырыңыз</Text>
        </View>

        <Text style={styles.label}>Телефон нөмірі</Text>
        <View style={styles.phoneRow}>
          <View style={styles.codeBox}>
            <Text style={styles.codeText}>🇰🇿 +7</Text>
          </View>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            placeholder="700 123 45 67"
            placeholderTextColor={COLORS.gray}
            keyboardType="phone-pad"
            style={styles.phoneInput}
          />
        </View>

        <TouchableOpacity
          style={styles.primaryBtn}
          activeOpacity={0.85}
          onPress={handleContinuePhone}
        >
          <Text style={styles.primaryBtnText}>Жалғастыру</Text>
        </TouchableOpacity>

        <View style={styles.rowLinks}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.linkText}>Email арқылы кіру</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.linkText}>Тіркелу</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.orText}>Немесе әлеуметтік желі арқылы</Text>

        <TouchableOpacity
          style={styles.socialBtn}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('SelectLocation')}
        >
          <Text style={styles.socialBtnText}>G  Google арқылы жалғастыру</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.socialBtn, styles.darkBlueBtn]}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('SelectLocation')}
        >
          <Text style={styles.socialBtnText}>f  Facebook арқылы жалғастыру</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.white },
  container: { flex: 1, padding: 22, justifyContent: 'center' },
  heroBox: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#90E0EF',
  },
  heroEmoji: { fontSize: 44 },
  brand: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primary,
    letterSpacing: 3,
    marginTop: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.dark,
    textAlign: 'center',
    marginTop: 6,
  },
  label: { fontSize: 14, fontWeight: '600', color: COLORS.gray, marginBottom: 8 },
  phoneRow: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  codeBox: {
    backgroundColor: '#f1f5f9',
    borderRadius: 14,
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center',
    height: 52,
  },
  codeText: { fontSize: 15, fontWeight: 'bold', color: COLORS.dark },
  phoneInput: {
    flex: 1,
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 52,
    fontSize: 16,
    color: COLORS.dark,
  },
  primaryBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: 'center',
  },
  primaryBtnText: { color: COLORS.white, fontSize: 17, fontWeight: 'bold' },
  rowLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  linkText: { color: COLORS.primary, fontWeight: '600', fontSize: 14 },
  orText: {
    textAlign: 'center',
    color: COLORS.gray,
    fontSize: 13,
    marginVertical: 20,
  },
  socialBtn: {
    backgroundColor: '#0096C7',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 12,
  },
  darkBlueBtn: { backgroundColor: COLORS.dark },
  socialBtnText: { color: COLORS.white, fontSize: 15, fontWeight: 'bold' },
});