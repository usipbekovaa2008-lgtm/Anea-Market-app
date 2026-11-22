import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, MapPin } from 'lucide-react-native';
import { COLORS } from '../theme';

const CITIES = ['Алматы', 'Астана', 'Шымкент', 'Қарағанды', 'Ақтөбе'];
const ZONES: Record<string, string[]> = {
  Алматы: ['Бостандық ауданы', 'Медеу ауданы', 'Алмалы ауданы'],
  Астана: ['Есіл ауданы', 'Нұра ауданы', 'Сарыарқа ауданы'],
  Шымкент: ['Әл-Фараби ауданы', 'Еңбекші ауданы'],
  Қарағанды: ['Қазыбек би ауданы', 'Әлихан Бөкейхан ауданы'],
  Ақтөбе: ['Астана ауданы', 'Алматы ауданы'],
};

export default function SelectLocationScreen({ navigation }: any) {
  const [city, setCity] = useState('Алматы');
  const [zone, setZone] = useState(ZONES['Алматы'][0]);

  const handleCityChange = (newCity: string) => {
    setCity(newCity);
    setZone(ZONES[newCity][0]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <ArrowLeft size={20} color={COLORS.dark} />
        </TouchableOpacity>

        <View style={styles.pinBadge}>
          <MapPin size={34} color={COLORS.primary} />
        </View>

        <Text style={styles.title}>Орналасқан жерді таңдаңыз</Text>
        <Text style={styles.subtitle}>
          Аймағыңыздағы ANEA дүкені мен жеткізу уақытын көру үшін қаланы таңдаңыз
        </Text>

        <Text style={styles.label}>Қала</Text>
        <View style={styles.chipWrap}>
          {CITIES.map((item) => {
            const active = item === city;
            return (
              <TouchableOpacity
                key={item}
                style={[styles.chip, active && styles.chipActive]}
                onPress={() => handleCityChange(item)}
              >
                <Text style={[styles.chipText, active && styles.chipTextActive]}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={styles.label}>Аудан / аймақ</Text>
        <View style={styles.zoneBox}>
          {ZONES[city].map((z) => {
            const active = z === zone;
            return (
              <TouchableOpacity
                key={z}
                style={[styles.zoneItem, active && styles.zoneItemActive]}
                onPress={() => setZone(z)}
              >
                <Text style={[styles.zoneText, active && styles.zoneTextActive]}>
                  {z}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
          style={styles.submitBtn}
          activeOpacity={0.85}
          onPress={() => navigation.replace('Home')}
        >
          <Text style={styles.submitBtnText}>Растау</Text>
        </TouchableOpacity>
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
    marginBottom: 16,
  },
  pinBadge: {
    width: 72,
    height: 72,
    borderRadius: 22,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 16,
  },
  title: { fontSize: 24, fontWeight: 'bold', color: COLORS.dark, textAlign: 'center' },
  subtitle: {
    fontSize: 14,
    color: COLORS.gray,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 24,
  },
  label: { fontSize: 14, fontWeight: 'bold', color: COLORS.dark, marginBottom: 10 },
  chipWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 20 },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: COLORS.primaryLight,
    borderWidth: 1,
    borderColor: '#90E0EF',
  },
  chipActive: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  chipText: { fontSize: 14, fontWeight: '600', color: COLORS.dark },
  chipTextActive: { color: COLORS.white },
  zoneBox: { gap: 10, marginBottom: 28 },
  zoneItem: {
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  zoneItemActive: { backgroundColor: COLORS.primaryLight, borderColor: COLORS.primary },
  zoneText: { fontSize: 15, fontWeight: '600', color: COLORS.dark },
  zoneTextActive: { color: COLORS.primary },
  submitBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 'auto',
  },
  submitBtnText: { color: COLORS.white, fontSize: 17, fontWeight: 'bold' },
});