import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Minus, Plus, Trash2, X, ChevronRight, CreditCard } from 'lucide-react-native';
import { COLORS } from '../theme';
import { useCart } from '../context/CartContext';

const DELIVERY_METHODS = ['Курьер (1 сағат)', 'Өзі алып кету', 'Экспресс 30 мин'];
const PROMO_CODES = ['Жеңілдік жоқ', 'ANEA10 (-10%)', 'ALMATY5 (-$5)'];

export default function CartScreen({ navigation }: any) {
  const { items, totalPrice, changeQty, removeItem, clearCart } = useCart();

  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const [delivery, setDelivery] = useState(DELIVERY_METHODS[0]);
  const [paymentMethod, setPaymentMethod] = useState('Kaspi / Карта');
  const [promo, setPromo] = useState(PROMO_CODES[0]);
  const [simulateError, setSimulateError] = useState(false);

  const numericBase = parseFloat(totalPrice) || 0;
  const finalTotal =
    promo === 'ANEA10 (-10%)'
      ? Math.max(0, numericBase * 0.9).toFixed(2)
      : promo === 'ALMATY5 (-$5)'
      ? Math.max(0, numericBase - 5).toFixed(2)
      : numericBase.toFixed(2);

  const handleCheckout = () => {
    if (items.length === 0) {
      navigation.navigate('OrderError', {
        reason: 'Себетіңіз бос. Тапсырыс рәсімдеу үшін алдымен тауар қосыңыз.',
      });
      return;
    }
    setCheckoutVisible(true);
  };

  const cycleDelivery = () => {
    const idx = DELIVERY_METHODS.indexOf(delivery);
    setDelivery(DELIVERY_METHODS[(idx + 1) % DELIVERY_METHODS.length]);
  };

  const cyclePayment = () => {
    setPaymentMethod((prev) =>
      prev === 'Kaspi / Карта' ? 'Қолма-қол ақша' : 'Kaspi / Карта'
    );
  };

  const cyclePromo = () => {
    const idx = PROMO_CODES.indexOf(promo);
    setPromo(PROMO_CODES[(idx + 1) % PROMO_CODES.length]);
  };

  const handlePlaceOrder = () => {
    setCheckoutVisible(false);
    if (simulateError) {
      navigation.navigate('OrderError', {
        reason: 'Төлемді өңдеу кезінде ақау шықты. Қайта байқап көріңіз.',
      });
      return;
    }
    const paidAmount = finalTotal;
    clearCart();
    navigation.navigate('OrderAccepted', { total: paidAmount });
  };

  const renderCartItem = ({ item }: { item: any }) => (
    <View style={styles.cartCard}>
      <View style={styles.emojiBox}>
        <Text style={styles.emojiText}>{item.emoji}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemUnit}>{item.unit}</Text>

        <View style={styles.qtyRow}>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => changeQty(item.id, -1)}
          >
            <Minus size={16} color={COLORS.dark} />
          </TouchableOpacity>
          <Text style={styles.qtyText}>{item.qty}</Text>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => changeQty(item.id, 1)}
          >
            <Plus size={16} color={COLORS.dark} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.rightBox}>
        <TouchableOpacity onPress={() => removeItem(item.id)}>
          <Trash2 size={18} color={COLORS.gray} />
        </TouchableOpacity>
        <Text style={styles.itemTotal}>${(item.price * item.qty).toFixed(2)}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Менің себетім</Text>

        {items.length === 0 ? (
          <View style={styles.emptyBox}>
            <Text style={styles.emptyEmoji}>🛒</Text>
            <Text style={styles.emptyText}>Себетіңіз әзірге бос</Text>
          </View>
        ) : (
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderCartItem}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
          />
        )}

        <View style={styles.footer}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Жалпы сома:</Text>
            <Text style={styles.totalAmount}>${totalPrice}</Text>
          </View>

          <TouchableOpacity
            style={styles.checkoutBtn}
            activeOpacity={0.85}
            onPress={handleCheckout}
          >
            <Text style={styles.checkoutBtnText}>Тапсырыс беру</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={checkoutVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setCheckoutVisible(false)}
      >
        <View style={styles.sheetBackdrop}>
          <View style={styles.sheetCard}>
            <View style={styles.sheetHeader}>
              <Text style={styles.sheetTitle}>Тапсырысты рәсімдеу</Text>
              <TouchableOpacity onPress={() => setCheckoutVisible(false)}>
                <X size={22} color={COLORS.dark} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.optionRow} onPress={cycleDelivery}>
              <Text style={styles.optionLabel}>Жеткізу</Text>
              <View style={styles.optionRight}>
                <Text style={styles.optionValue}>{delivery}</Text>
                <ChevronRight size={18} color={COLORS.dark} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionRow} onPress={cyclePayment}>
              <Text style={styles.optionLabel}>Төлем</Text>
              <View style={styles.optionRight}>
                <CreditCard size={16} color={COLORS.primary} />
                <Text style={styles.optionValue}>{paymentMethod}</Text>
                <ChevronRight size={18} color={COLORS.dark} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionRow} onPress={cyclePromo}>
              <Text style={styles.optionLabel}>Промокод</Text>
              <View style={styles.optionRight}>
                <Text style={styles.optionValue}>{promo}</Text>
                <ChevronRight size={18} color={COLORS.dark} />
              </View>
            </TouchableOpacity>

            <View style={styles.optionRowLast}>
              <Text style={styles.optionLabel}>Жалпы құны</Text>
              <View style={styles.optionRight}>
                <Text style={styles.finalPrice}>${finalTotal}</Text>
                <ChevronRight size={18} color={COLORS.dark} />
              </View>
            </View>

            <TouchableOpacity
              style={styles.errorToggleRow}
              onPress={() => setSimulateError((prev) => !prev)}
            >
              <Text style={styles.errorToggleText}>
                {simulateError
                  ? '⚠️ Қате күйін тексеру: ҚОСУЛЫ'
                  : 'Қате күйін тексеру: ӨШІРУЛІ'}
              </Text>
            </TouchableOpacity>

            <Text style={styles.termsNote}>
              Тапсырыс беру арқылы сіз{' '}
              <Text
                style={styles.termsBold}
                onPress={() =>
                  Alert.alert('Шарттар', 'ANEA қызмет көрсету шарттары мен ережелері.')
                }
              >
                Шарттар мен ережелерге
              </Text>{' '}
              келісесіз.
            </Text>

            <TouchableOpacity
              style={styles.placeOrderBtn}
              activeOpacity={0.85}
              onPress={handlePlaceOrder}
            >
              <Text style={styles.placeOrderText}>Тапсырысты растау</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.white },
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 15 },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.dark,
    textAlign: 'center',
    marginBottom: 20,
  },
  listContent: { paddingBottom: 20, gap: 14 },
  cartCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 18,
    padding: 12,
    backgroundColor: COLORS.white,
  },
  emojiBox: {
    width: 64,
    height: 64,
    borderRadius: 14,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  emojiText: { fontSize: 34 },
  infoBox: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: 'bold', color: COLORS.dark },
  itemUnit: { fontSize: 13, color: COLORS.gray, marginTop: 2 },
  qtyRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10, gap: 12 },
  qtyBtn: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyText: { fontSize: 16, fontWeight: 'bold', color: COLORS.dark },
  rightBox: { alignItems: 'flex-end', justifyContent: 'space-between', height: 68 },
  itemTotal: { fontSize: 16, fontWeight: 'bold', color: COLORS.primary },
  emptyBox: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyEmoji: { fontSize: 56, marginBottom: 10 },
  emptyText: { fontSize: 17, color: COLORS.gray, fontWeight: '600' },
  footer: {
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  totalLabel: { fontSize: 18, color: COLORS.gray, fontWeight: '600' },
  totalAmount: { fontSize: 24, fontWeight: 'bold', color: COLORS.dark },
  checkoutBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: 'center',
  },
  checkoutBtnText: { color: COLORS.white, fontSize: 18, fontWeight: 'bold' },
  sheetBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(3, 4, 94, 0.35)',
    justifyContent: 'flex-end',
  },
  sheetCard: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    padding: 22,
  },
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  sheetTitle: { fontSize: 20, fontWeight: 'bold', color: COLORS.dark },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  optionRowLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  optionLabel: { fontSize: 16, fontWeight: '600', color: COLORS.gray },
  optionRight: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  optionValue: { fontSize: 15, fontWeight: 'bold', color: COLORS.dark },
  finalPrice: { fontSize: 16, fontWeight: 'bold', color: COLORS.primary },
  errorToggleRow: {
    backgroundColor: COLORS.primaryLight,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginTop: 4,
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  errorToggleText: { fontSize: 12, fontWeight: '700', color: COLORS.dark },
  termsNote: { fontSize: 12, color: COLORS.gray, lineHeight: 18, marginBottom: 16 },
  termsBold: { color: COLORS.dark, fontWeight: 'bold' },
  placeOrderBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: 'center',
  },
  placeOrderText: { color: COLORS.white, fontSize: 17, fontWeight: 'bold' },
});