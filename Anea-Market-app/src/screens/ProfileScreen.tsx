import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  MapPin,
  Package,
  Heart,
  Bell,
  HelpCircle,
  ChevronRight,
} from 'lucide-react-native';
import { COLORS } from '../theme';

export default function ProfileScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.profileCard}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarEmoji}>🛍️</Text>
          </View>
          <Text style={styles.userName}>ANEA Қолданушысы</Text>
          <Text style={styles.userEmail}>anea.client@example.com</Text>
        </View>

        <View style={styles.menuList}>
          <TouchableOpacity
            style={styles.menuRow}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Orders')}
          >
            <View style={styles.menuLeft}>
              <View style={styles.iconBadge}>
                <Package size={20} color={COLORS.primary} />
              </View>
              <Text style={styles.menuTitle}>Тапсырыстарым</Text>
            </View>
            <View style={styles.menuRight}>
              <Text style={styles.menuInfo}>3 белсенді</Text>
              <ChevronRight size={20} color={COLORS.gray} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuRow}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Address')}
          >
            <View style={styles.menuLeft}>
              <View style={styles.iconBadge}>
                <MapPin size={20} color={COLORS.primary} />
              </View>
              <Text style={styles.menuTitle}>Жеткізу мекенжайы</Text>
            </View>
            <View style={styles.menuRight}>
              <Text style={styles.menuInfo}>Алматы қ.</Text>
              <ChevronRight size={20} color={COLORS.gray} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuRow}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Таңдаулы')}
          >
            <View style={styles.menuLeft}>
              <View style={styles.iconBadge}>
                <Heart size={20} color={COLORS.primary} />
              </View>
              <Text style={styles.menuTitle}>Таңдаулылар</Text>
            </View>
            <View style={styles.menuRight}>
              <Text style={styles.menuInfo}>6 тауар</Text>
              <ChevronRight size={20} color={COLORS.gray} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuRow}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Notifications')}
          >
            <View style={styles.menuLeft}>
              <View style={styles.iconBadge}>
                <Bell size={20} color={COLORS.primary} />
              </View>
              <Text style={styles.menuTitle}>Хабарландырулар</Text>
            </View>
            <View style={styles.menuRight}>
              <Text style={styles.menuInfo}>Қосулы</Text>
              <ChevronRight size={20} color={COLORS.gray} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuRow}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Support')}
          >
            <View style={styles.menuLeft}>
              <View style={styles.iconBadge}>
                <HelpCircle size={20} color={COLORS.primary} />
              </View>
              <Text style={styles.menuTitle}>Көмек және қолдау</Text>
            </View>
            <View style={styles.menuRight}>
              <Text style={styles.menuInfo}>ANEA 24/7</Text>
              <ChevronRight size={20} color={COLORS.gray} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.white },
  container: { padding: 20, paddingBottom: 40 },
  profileCard: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 22,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#90E0EF',
  },
  avatarCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarEmoji: { fontSize: 40 },
  userName: { fontSize: 22, fontWeight: 'bold', color: COLORS.dark },
  userEmail: { fontSize: 14, color: COLORS.gray, marginTop: 4 },
  menuList: { gap: 12 },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: COLORS.white,
  },
  menuLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  iconBadge: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuTitle: { fontSize: 16, fontWeight: '600', color: COLORS.dark },
  menuRight: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  menuInfo: { fontSize: 13, color: COLORS.gray },
});