
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { COLORS, RADIUS } from '../theme';

const categories = [
  { id: '1', name: 'Барлығы', icon: '🛍️' },
  { id: '2', name: 'Жемістер', icon: '🍎' },
  { id: '3', name: 'Көкөністер', icon: '🥦' },
  { id: '4', name: 'Жидектер', icon: '🫐' },
  { id: '5', name: 'Сүт өнімдері', icon: '🥛' },
];

const products = [
  {
    id: '1',
    name: 'Көкжидек',
    category: 'Жидектер',
    price: 1800,
    unit: '125 г',
    emoji: '🫐',
  },
  {
    id: '2',
    name: 'Құлпынай',
    category: 'Жидектер',
    price: 2200,
    unit: '250 г',
    emoji: '🍓',
  },
  {
    id: '3',
    name: 'Алма',
    category: 'Жемістер',
    price: 950,
    unit: '1 кг',
    emoji: '🍎',
  },
  {
    id: '4',
    name: 'Банан',
    category: 'Жемістер',
    price: 850,
    unit: '1 кг',
    emoji: '🍌',
  },
  {
    id: '5',
    name: 'Брокколи',
    category: 'Көкөністер',
    price: 1200,
    unit: '1 дана',
    emoji: '🥦',
  },
  {
    id: '6',
    name: 'Сүт',
    category: 'Сүт өнімдері',
    price: 650,
    unit: '1 л',
    emoji: '🥛',
  },
];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] =
    useState('Барлығы');

  const [search, setSearch] = useState('');
  const [cartCount, setCartCount] = useState(0);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'Барлығы' ||
      product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Қайырлы күн! 👋</Text>
            <Text style={styles.brandName}>
              Anea<Text style={styles.brandBlue}>-Market</Text>
            </Text>
          </View>

          <TouchableOpacity style={styles.cartButton}>
            <Ionicons
              name="bag-outline"
              size={25}
              color={COLORS.primaryDark}
            />

            {cartCount > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>
                  {cartCount}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* ADDRESS */}
        <TouchableOpacity style={styles.address}>
          <Ionicons
            name="location-outline"
            size={20}
            color={COLORS.primaryDark}
          />

          <View style={styles.addressText}>
            <Text style={styles.addressLabel}>
              Жеткізу мекенжайы
            </Text>
            <Text style={styles.addressValue}>
              Мекенжайды таңдаңыз
            </Text>
          </View>

          <Ionicons
            name="chevron-down"
            size={18}
            color={COLORS.textSecondary}
          />
        </TouchableOpacity>

        {/* SEARCH */}
        <View style={styles.searchContainer}>
          <Ionicons
            name="search-outline"
            size={22}
            color={COLORS.textSecondary}
          />

          <TextInput
            style={styles.searchInput}
            placeholder="Өнімдерді іздеу..."
            placeholderTextColor={COLORS.textSecondary}
            value={search}
            onChangeText={setSearch}
          />

          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch('')}>
              <Ionicons
                name="close-circle"
                size={20}
                color={COLORS.textSecondary}
              />
            </TouchableOpacity>
          )}
        </View>

        {/* BANNER */}
        <View style={styles.banner}>
          <View style={styles.bannerText}>
            <Text style={styles.bannerSmall}>
              ANEA-MARKET
            </Text>

            <Text style={styles.bannerTitle}>
              Балғындықты
              {'\n'}
              таңдаңыз!
            </Text>

            <Text style={styles.bannerDescription}>
              Күнделікті жаңа өнімдер
            </Text>
          </View>

          <Text style={styles.bannerEmoji}>🫐</Text>
        </View>

        {/* CATEGORIES */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Санаттар
          </Text>
          <Text style={styles.sectionSubtitle}>
            Барлық өнімдер
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categories}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryButton,
                selectedCategory === category.name &&
                  styles.selectedCategory,
              ]}
              onPress={() =>
                setSelectedCategory(category.name)
              }
            >
              <Text style={styles.categoryEmoji}>
                {category.icon}
              </Text>

              <Text
                style={[
                  styles.categoryName,
                  selectedCategory === category.name &&
                    styles.selectedCategoryText,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* PRODUCTS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Танымал өнімдер
          </Text>
          <Text style={styles.sectionSubtitle}>
            {filteredProducts.length} өнім
          </Text>
        </View>

        <View style={styles.productsGrid}>
          {filteredProducts.map((product) => (
            <View key={product.id} style={styles.productCard}>
              <View style={styles.productImage}>
                <Text style={styles.productEmoji}>
                  {product.emoji}
                </Text>
              </View>

              <Text style={styles.productName}>
                {product.name}
              </Text>

              <Text style={styles.productUnit}>
                {product.unit}
              </Text>

              <View style={styles.productBottom}>
                <Text style={styles.productPrice}>
                  {product.price.toLocaleString('ru-RU')} ₸
                </Text>

                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() =>
                    setCartCount((count) => count + 1)
                  }
                >
                  <Ionicons
                    name="add"
                    size={23}
                    color={COLORS.white}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {filteredProducts.length === 0 && (
          <Text style={styles.emptyText}>
            Өнім табылмады
          </Text>
        )}

        <Text style={styles.footer}>
          Anea-Market — әр күнге балғындық! 🫐
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  brandName: {
    fontSize: 25,
    fontWeight: '800',
    color: COLORS.text,
    marginTop: 3,
  },
  brandBlue: {
    color: COLORS.primary,
  },
  cartButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 19,
    height: 19,
    borderRadius: 10,
    backgroundColor: COLORS.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: '700',
  },
  address: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 13,
    borderRadius: RADIUS.medium,
    marginTop: 22,
  },
  addressText: {
    flex: 1,
    marginLeft: 10,
  },
  addressLabel: {
    fontSize: 11,
    color: COLORS.textSecondary,
  },
  addressValue: {
    fontSize: 13,
    color: COLORS.text,
    fontWeight: '600',
    marginTop: 3,
  },
  searchContainer: {
    height: 52,
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.medium,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: COLORS.text,
  },
  banner: {
    height: 155,
    backgroundColor: COLORS.primaryLight,
    borderRadius: 22,
    marginTop: 22,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  bannerText: {
    flex: 1,
  },
  bannerSmall: {
    fontSize: 10,
    fontWeight: '800',
    color: COLORS.primaryDark,
    letterSpacing: 1,
  },
  bannerTitle: {
    fontSize: 23,
    fontWeight: '800',
    color: COLORS.text,
    marginTop: 7,
    lineHeight: 28,
  },
  bannerDescription: {
    fontSize: 11,
    color: COLORS.textSecondary,
    marginTop: 7,
  },
  bannerEmoji: {
    fontSize: 75,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 27,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: COLORS.text,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: COLORS.primaryDark,
  },
  categories: {
    gap: 10,
    paddingRight: 10,
  },
  categoryButton: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 13,
    paddingVertical: 12,
    alignItems: 'center',
    minWidth: 82,
  },
  selectedCategory: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  categoryEmoji: {
    fontSize: 24,
    marginBottom: 6,
  },
  categoryName: {
    fontSize: 11,
    color: COLORS.text,
    fontWeight: '600',
  },
  selectedCategoryText: {
    color: COLORS.white,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 14,
  },
  productCard: {
    width: '48%',
    backgroundColor: COLORS.white,
    borderRadius: 18,
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  productImage: {
    height: 115,
    backgroundColor: COLORS.primaryLight,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  productEmoji: {
    fontSize: 65,
  },
  productName: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.text,
  },
  productUnit: {
    fontSize: 11,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  productBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 13,
  },
  productPrice: {
    fontSize: 13,
    fontWeight: '800',
    color: COLORS.primaryDark,
  },
  addButton: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    textAlign: 'center',
    color: COLORS.textSecondary,
    marginTop: 30,
  },
  footer: {
    textAlign: 'center',
    color: COLORS.textSecondary,
    fontSize: 11,
    marginTop: 30,
  },
});
