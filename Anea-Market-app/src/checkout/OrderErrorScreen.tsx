import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { X } from 'lucide-react-native';
import { COLORS } from '../theme';

export default function OrderErrorScreen({ route, navigation }: any) {
  const reason =
    route?.params?.reason || 'Төлемді өңдеу кезінде ақау шықты. Қайта байқап көріңіз.';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.closeTopBtn}
          onPress={() => navigation.goBack()}
        >
          <X size={22} color={COLORS.dark} />
        </TouchableOpacity>

        <View style={styles.card}>
          <View style={styles.illustrationBox}>
            <Text style={styles.illustrationEmoji}>🛍️⚠️</Text>
          </View>

          <Text style={styles.title}>Қап! Тапсырыс өтпеді</Text>
          <Text style={styles.subtitle}>{reason}</Text>

          <TouchableOpacity
            style={styles.retryBtn}
            activeOpacity={0.85}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.retryBtnText}>Қайта көру</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.homeLink}
            onPress={() => navigation.replace('Home')}
          >
            <Text style={styles.homeLinkText}>Басты бетке оралу</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: 'rgba(3, 4, 94, 0.25)' },
  container: {
    flex: 1,
    padding: 22,
    justifyContent: 'center',
  },
  closeTopBtn: {
    alignSelf: 'flex-start',
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
  },
  illustrationBox: {
    width: 116,
    height: 116,
    borderRadius: 58,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#90E0EF',
  },
  illustrationEmoji: { fontSize: 42 },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.dark,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.gray,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  retryBtn: {
    backgroundColor: COLORS.primary,
    width: '100%',
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 14,
  },
  retryBtnText: { color: COLORS.white, fontSize: 17, fontWeight: 'bold' },
  homeLink: { paddingVertical: 6 },
  homeLinkText: { color: COLORS.dark, fontSize: 15, fontWeight: '600' },
});