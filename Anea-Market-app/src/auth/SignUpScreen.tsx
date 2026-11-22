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
import { ArrowLeft } from 'lucide-react-native';
import { COLORS } from '../theme';

export default function SignUpScreen({ navigation }: any) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!username.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Өрістерді толтырыңыз', 'Атыңызды, email және құпиясөзді енгізіңіз.');
      return;
    }
    Alert.alert('Тіркелу сәтті өтті ✅', `Қош келдіңіз, ${username}!`);
    navigation.navigate('SelectLocation');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <ArrowLeft size={20} color={COLORS.dark} />
        </TouchableOpacity>

        <Text style={styles.emoji}>🛒</Text>
        <Text style={styles.title}>Тіркелу</Text>
        <Text style={styles.subtitle}>ANEA аккаунтын ашу үшін деректерді енгізіңіз</Text>

        <Text style={styles.label}>Пайдаланушы аты</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Аты-жөніңіз"
          placeholderTextColor={COLORS.gray}
          style={styles.input}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="anea.client@example.com"
          placeholderTextColor={COLORS.gray}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        <Text style={styles.label}>Құпиясөз</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="••••••••"
          placeholderTextColor={COLORS.gray}
          secureTextEntry
          style={styles.input}
        />

        <Text style={styles.termsText}>
          Жалғастыра отырып, сіз{' '}
          <Text style={styles.termsLink}>Қызмет көрсету шарттары</Text> мен{' '}
          <Text style={styles.termsLink}>Құпиялылық саясатына</Text> келісесіз.
        </Text>

        <TouchableOpacity style={styles.signUpBtn} onPress={handleSignUp}>
          <Text style={styles.signUpBtnText}>Тіркелу</Text>
        </TouchableOpacity>

        <View style={styles.bottomRow}>
          <Text style={styles.bottomGray}>Аккаунтыңыз бар ма? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.bottomLink}>Кіру</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.white },
  container: { flex: 1, padding: 22, justifyContent: 'center' },
  backBtn: {
    position: 'absolute',
    top: 16,
    left: 22,
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: { fontSize: 44, textAlign: 'center', marginBottom: 8 },
  title: { fontSize: 26, fontWeight: 'bold', color: COLORS.dark },
  subtitle: { fontSize: 14, color: COLORS.gray, marginTop: 4, marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '600', color: COLORS.gray, marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 50,
    fontSize: 15,
    color: COLORS.dark,
    backgroundColor: '#f8fafc',
    marginBottom: 14,
  },
  termsText: { fontSize: 12, color: COLORS.gray, lineHeight: 18, marginBottom: 18 },
  termsLink: { color: COLORS.primary, fontWeight: '600' },
  signUpBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: 'center',
  },
  signUpBtnText: { color: COLORS.white, fontSize: 17, fontWeight: 'bold' },
  bottomRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 18 },
  bottomGray: { color: COLORS.gray, fontSize: 14 },
  bottomLink: { color: COLORS.primary, fontSize: 14, fontWeight: 'bold' },
});