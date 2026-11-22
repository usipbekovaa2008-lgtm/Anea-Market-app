import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Bell } from 'lucide-react-native';
import { COLORS } from '../theme';

export default function NotificationsScreen({ navigation }: any) {
  const [orderAlerts, setOrderAlerts] = useState(true);
  const [promoAlerts, setPromoAlerts] = useState(true);
  const [courierAlerts, setCourierAlerts] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.goBack()}>
          <ArrowLeft size={20} color={COLORS.dark} />
        </TouchableOpacity>
        <Text style={styles.topTitle}>Хабарландырулар</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.rowCard}>
          <View style={styles.leftCol}>
            <View style={styles.badge}>
              <Bell size={18} color={COLORS.primary} />
            </View>
            <View style={styles.textCol}>
              <Text style={styles.title}>Тапсырыс мәртебесі</Text>
              <Text style={styles.desc}>Тапсырыс қабылданғанда және жеткізілгенде</Text>
            </View>
          </View>
          <Switch
            value={orderAlerts}
            onValueChange={setOrderAlerts}
            trackColor={{ false: '#cbd5e1', true: COLORS.primaryLight }}
            thumbColor={orderAlerts ? COLORS.primary : '#f1f5f9'}
          />
        </View>

        <View style={styles.rowCard}>
          <View style={styles.leftCol}>
            <View style={styles.badge}>
              <Text style={styles.emoji}>🏷️</Text>
            </View>
            <View style={styles.textCol}>
              <Text style={styles.title}>Жеңілдіктер мен акциялар</Text>
              <Text style={styles.desc}>ANEA дүкеніндегі жаңа ұсыныстар</Text>
            </View>
          </View>
          <Switch
            value={promoAlerts}
            onValueChange={setPromoAlerts}
            trackColor={{ false: '#cbd5e1', true: COLORS.primaryLight }}
            thumbColor={promoAlerts ? COLORS.primary : '#f1f5f9'}
          />
        </View>

        <View style={styles.rowCard}>
          <View style={styles.leftCol}>
            <View style={styles.badge}>
              <Text style={styles.emoji}>🛵</Text>
            </View>
            <View style={styles.textCol}>
              <Text style={styles.title}>Курьер хабарламасы</Text>
              <Text style={styles.desc}>Курьер мекенжайға жақындағанда</Text>
            </View>
          </View>
          <Switch
            value={courierAlerts}
            onValueChange={setCourierAlerts}
            trackColor={{ false: '#cbd5e1', true: COLORS.primaryLight }}
            thumbColor={courierAlerts ? COLORS.primary : '#f1f5f9'}
          />
        </View>
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
  container: { padding: 20, gap: 14 },
  rowCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  leftCol: { flexDirection: 'row', alignItems: 'center', flex: 1, paddingRight: 10, gap: 12 },
  badge: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: { fontSize: 20 },
  textCol: { flex: 1 },
  title: { fontSize: 16, fontWeight: 'bold', color: COLORS.dark },
  desc: { fontSize: 13, color: COLORS.gray, marginTop: 2 },
});