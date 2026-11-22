import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Send } from 'lucide-react-native';
import { COLORS } from '../theme';

const FAQ_LIST = [
  { q: 'Жеткізу қанша уақыт алады?', a: 'ANEA курьерлері тапсырысты 1 сағат ішінде жеткізеді.' },
  { q: 'Тауарды қалай қайтаруға немесе ауыстыруға болады?', a: 'Тапсырыс бөлімінен немесе осы беттен хабарлама жіберіңіз.' },
  { q: 'Төлем қалай жасалады?', a: 'Жеткізу кезінде немесе қолданба арқылы ыңғайлы тәсілмен.' },
];

export default function SupportScreen({ navigation }: any) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) {
      Alert.alert('Мәтін енгізіңіз', 'Сұрағыңызды немесе хабарламаңызды жазыңыз.');
      return;
    }
    Alert.alert('Жіберілді ✅', 'ANEA қолдау қызметі жақын арада жауап береді.');
    setMessage('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.goBack()}>
          <ArrowLeft size={20} color={COLORS.dark} />
        </TouchableOpacity>
        <Text style={styles.topTitle}>Көмек және қолдау</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.heroBanner}>
          <Text style={styles.heroEmoji}>💬</Text>
          <Text style={styles.heroTitle}>ANEA Қолдау 24/7</Text>
          <Text style={styles.heroSub}>Кез келген сұрақ бойынша көмектесуге дайынбыз</Text>
        </View>

        <Text style={styles.sectionTitle}>Жиі қойылатын сұрақтар</Text>
        {FAQ_LIST.map((item, idx) => (
          <View key={idx} style={styles.faqCard}>
            <Text style={styles.faqQ}>{item.q}</Text>
            <Text style={styles.faqA}>{item.a}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Сұрақ жазу</Text>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Мәселеңізді қысқаша жазыңыз..."
          placeholderTextColor={COLORS.gray}
          multiline
          style={styles.textArea}
        />

        <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
          <Send size={18} color={COLORS.white} />
          <Text style={styles.sendBtnText}>Хабарлама жіберу</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.white },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topTitle: { fontSize: 20, fontWeight: 'bold', color: COLORS.dark },
  spacer: { width: 40 },
  container: { padding: 20, paddingBottom: 40 },
  heroBanner: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#90E0EF',
  },
  heroEmoji: { fontSize: 38, marginBottom: 6 },
  heroTitle: { fontSize: 20, fontWeight: 'bold', color: COLORS.dark },
  heroSub: { fontSize: 13, color: COLORS.gray, marginTop: 4, textAlign: 'center' },
  sectionTitle: { fontSize: 17, fontWeight: 'bold', color: COLORS.dark, marginBottom: 10 },
  faqCard: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
  },
  faqQ: { fontSize: 15, fontWeight: 'bold', color: COLORS.dark },
  faqA: { fontSize: 13, color: COLORS.gray, marginTop: 4 },
  textArea: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 14,
    padding: 14,
    minHeight: 100,
    textAlignVertical: 'top',
    fontSize: 15,
    color: COLORS.dark,
    backgroundColor: '#f8fafc',
    marginBottom: 14,
  },
  sendBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  sendBtnText: { color: COLORS.white, fontSize: 17, fontWeight: 'bold' },
});