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
import { ArrowLeft, MapPin, Check } from 'lucide-react-native';
import { COLORS } from '../theme';

const CITIES = ['Алматы қ.', 'Астана қ.', 'Шымкент қ.', 'Қарағанды қ.'];

export default function AddressScreen({ navigation }: any) {
  const [selectedCity, setSelectedCity] = useState('Алматы қ.');
  const [street, setStreet] = useState('Абай даңғылы, 42');
  const [apartment, setApartment] = useState('15-пәтер');

  const handleSave = () => {
    Alert.alert(
      'Мекенжай сақталды ✅',
      `${selectedCity}, ${street}, ${apartment}`
    );
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.goBack()}>
          <ArrowLeft size={20} color={COLORS.dark} />
        </TouchableOpacity>
        <Text style={styles.topTitle}>Жеткізу мекенжайы</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>Қаланы таңдаңыз</Text>
        <View style={styles.cityWrap}>
          {CITIES.map((city) => {
            const active = selectedCity === city;
            return (
              <TouchableOpacity
                key={city}
                style={[styles.cityChip, active && styles.cityChipActive]}
                onPress={() => setSelectedCity(city)}
              >
                <MapPin size={16} color={active ? COLORS.white : COLORS.primary} />
                <Text style={[styles.cityText, active && styles.cityTextActive]}>
                  {city}
                </Text>
                {active && <Check size={16} color={COLORS.white} />}
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={styles.label}>Көше мен үй нөмірі</Text>
        <TextInput
          value={street}
          onChangeText={setStreet}
          placeholder="Көше атауы, үй нөмірі"
          placeholderTextColor={COLORS.gray}
          style={styles.input}
        />

        <Text style={styles.label}>Пәтер / подъезд / домофон</Text>
        <TextInput
          value={apartment}
          onChangeText={setApartment}
          placeholder="Пәтер немесе кеңсе"
          placeholderTextColor={COLORS.gray}
          style={styles.input}
        />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.saveBtnText}>Мекенжайды сақтау</Text>
        </TouchableOpacity>
      </View>
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
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginBottom: 10,
    marginTop: 6,
  },
  cityWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 18 },
  cityChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: COLORS.primaryLight,
    borderWidth: 1,
    borderColor: '#90E0EF',
  },
  cityChipActive: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  cityText: { fontSize: 14, fontWeight: '600', color: COLORS.dark },
  cityTextActive: { color: COLORS.white },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 50,
    fontSize: 15,
    color: COLORS.dark,
    marginBottom: 16,
    backgroundColor: '#f8fafc',
  },
  footer: { padding: 20, borderTopWidth: 1, borderTopColor: '#e2e8f0' },
  saveBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: 'center',
  },
  saveBtnText: { color: COLORS.white, fontSize: 17, fontWeight: 'bold' },
});