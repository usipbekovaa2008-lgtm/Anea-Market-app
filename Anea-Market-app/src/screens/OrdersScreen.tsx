import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'lucide-react-native';
import { COLORS } from '../theme';

const ORDERS = [
  {
    id: '#ANEA-1042',
    date: 'Бүгін, 11:45',
    status: 'Жеткізілуде 🛵',
    total: '$14.97',
    items: '🍌 × 1, 🍎 × 2',
  },
  {
    id: '#ANEA-1038',
    date: 'Кеше, 19:20',
    status: 'Жеткізілді ✅',
    total: '$8.49',
    items: '🫑 × 1, 🫚 × 1',
  },
  {
    id: '#ANEA-1029',
    date: '18 қараша',
    status: 'Жеткізілді ✅',
    total: '$19.96',
    items: '🍌 × 2, 🍎 × 2',
  },
];

export default function OrdersScreen({ navigation }: any) {
  const renderOrder = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.orderCard}
      activeOpacity={0.85}
      onPress={() =>
        Alert.alert(item.id, `Күйі: ${item.status}\nТауарлар: ${item.items}\nСомасы: ${item.total}`)
      }
    >
      <View style={styles.orderTop}>
        <Text style={styles.orderId}>{item.id}</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>

      <Text style={styles.itemsText}>{item.items}</Text>

      <View style={styles.orderBottom}>
        <Text style={styles.dateText}>{item.date}</Text>
        <Text style={styles.totalText}>{item.total}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation?.goBack?.()}
          >
            <ArrowLeft size={20} color={COLORS.dark} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Тапсырыстарым</Text>
          <View style={styles.spacer} />
        </View>

        <FlatList
          data={ORDERS}
          keyExtractor={(item) => item.id}
          renderItem={renderOrder}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  spacer: {
    width: 40,
  },
  listContent: {
    gap: 14,
    paddingBottom: 30,
  },
  orderCard: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 18,
    padding: 16,
    backgroundColor: COLORS.white,
  },
  orderTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  statusBadge: {
    backgroundColor: COLORS.primaryLight,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
  },
  itemsText: {
    fontSize: 16,
    color: COLORS.dark,
    marginBottom: 12,
  },
  orderBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 10,
  },
  dateText: {
    fontSize: 13,
    color: COLORS.gray,
  },
  totalText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
});