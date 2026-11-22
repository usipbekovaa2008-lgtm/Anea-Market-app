import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Check } from 'lucide-react-native';
import { COLORS } from '../theme';

export default function OrderAcceptedScreen({ route, navigation }: any) {
  const total = route?.params?.total || '0.00';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.badgeOuter}>
          <View style={styles.badgeInner}>
            <Check size={48} color={COLORS.white} strokeWidth={3} />
          </View>
        </View>

        <Text style={styles.title}>Тапсырысыңыз қабылданды</Text>
        <Text style={styles.subtitle}>
          ANEA дүкеніндегі ${total} сомалы тапсырысыңыз жиналып жатыр және жақын арада жеткізіледі.
        </Text>

        <TouchableOpacity
          style={styles.trackBtn}
          activeOpacity={0.85}
          onPress={() => navigation.replace('Orders')}
        >
          <Text style={styles.trackBtnText}>Тапсырысты бақылау</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.homeLink}
          onPress={() => navigation.replace('Home')}
        >
          <Text style={styles.homeLinkText}>Басты бетке оралу</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.white },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeOuter: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 28,
    borderWidth: 1,
    borderColor: '#90E0EF',
  },
  badgeInner: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.dark,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.gray,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 36,
  },
  trackBtn: {
    backgroundColor: COLORS.primary,
    width: '100%',
    paddingVertical: 17,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 16,
  },
  trackBtnText: { color: COLORS.white, fontSize: 17, fontWeight: 'bold' },
  homeLink: { paddingVertical: 8 },
  homeLinkText: { color: COLORS.dark, fontSize: 16, fontWeight: '600' },
});