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

export default function VerificationScreen({ route, navigation }: any) {
  const phone = route?.params?.phone || '+7 700 123 45 67';
  const [code, setCode] = useState('');

  const handleVerify = () => {
    if (code.trim().length < 4) {
      Alert.alert('Код қате', '4 таңбалы растау кодын енгізіңіз.');
      return;
    }
    navigation.navigate('SelectLocation');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <ArrowLeft size={20} color={COLORS.dark} />
        </TouchableOpacity>

        <Text style={styles.title}>4 таңбалы кодты енгізіңіз</Text>
        <Text style={styles.subtitle}>Код {phone} нөміріне жіберілді</Text>

        <Text style={styles.label}>Растау коды</Text>
        <TextInput
          value={code}
          onChangeText={setCode}
          placeholder="- - - -"
          placeholderTextColor={COLORS.gray}
          keyboardType="number-pad"
          maxLength={4}
          style={styles.codeInput}
        />

        <View style={styles.bottomRow}>
          <TouchableOpacity
            onPress={() => Alert.alert('Код қайта жіберілді ✅', `${phone} нөміріне жаңа код жіберілді.`)}
          >
            <Text style={styles.resendText}>Кодты қайта жіберу</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.nextBtn} onPress={handleVerify}>
            <Text style={styles.nextBtnText}>Растау</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.white },
  container: { flex: 1, padding: 22 },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: { fontSize: 24, fontWeight: 'bold', color: COLORS.dark },
  subtitle: { fontSize: 14, color: COLORS.gray, marginTop: 6, marginBottom: 28 },
  label: { fontSize: 14, fontWeight: '600', color: COLORS.gray, marginBottom: 8 },
  codeInput: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary,
    fontSize: 26,
    letterSpacing: 14,
    color: COLORS.dark,
    paddingVertical: 10,
    marginBottom: 32,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resendText: { color: COLORS.primary, fontSize: 15, fontWeight: '600' },
  nextBtn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 26,
    paddingVertical: 14,
    borderRadius: 15,
  },
  nextBtnText: { color: COLORS.white, fontSize: 16, fontWeight: 'bold' },
});