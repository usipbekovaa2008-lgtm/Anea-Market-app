
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { COLORS, RADIUS } from '../theme';

interface CategoriesScreenProps {
  onBack: () => void;
  onSelectCategory: (category: string) => void;
}

const categories = [
  { id: '1', name: 'Жемістер', emoji: '🍎', description: 'Жаңа піскен жемістер' },
  { id: '2', name: 'Көкөністер', emoji: '🥦', description: 'Пайдалы көкөністер' },
  { id: '3', name: 'Жидектер', emoji: '🫐', description: 'Балғын жидектер' },
  { id: '4', name: 'Сүт өнімдері', emoji: '🥛', description: 'Сүт, ірімшік және йогурт' },
  { id: '5', name: 'Ет өнімдері', emoji: '🥩', description: 'Сапалы ет өнімдері' },
  { id: '6', name: 'Нан өнімдері', emoji: '🥐', description: 'Жаңа піскен нан' },
  { id: '7', name: 'Сусындар', emoji: '🧃', description: 'Түрлі сусындар' },
  { id: '8', name: 'Тәттілер', emoji: '🍫', description: 'Дәмді тәттілер' },
];

export default function CategoriesScreen({
  onBack,
  onSelectCategory,
}: CategoriesScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={onBack}
        >
          <Ionicons
            name="chevron-back"
            size={24}
            color={COLORS.primaryDark}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Санаттар</Text>

        <View style={styles.placeholder} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>
          Өнім санаттары
        </Text>

        <Text style={styles.subtitle}>
          Өзіңізге қажетті өнімдерді таңдаңыз
        </Text>

        <View style={styles.grid}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.card}
              activeOpacity={0.8}
              onPress={() => onSelectCategory(category.name)}
            >
              <View style={styles.emojiContainer}>
                <Text style={styles.emoji}>
                  {category.emoji}
                </Text>
              </View>

              <Text style={styles.categoryName}>
                {category.name}
              </Text>

              <Text style={styles.description}>
                {category.description}
              </Text>

              <View style={styles.arrow}>
                <Ionicons
                  name="arrow-forward"
                  size={17}
                  color={COLORS.primaryDark}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: COLORS.text,
  },
  placeholder: {
    width: 42,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: COLORS.text,
  },
  subtitle: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 8,
    marginBottom: 22,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 15,
  },
  card: {
    width: '48%',
    minHeight: 175,
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.large,
    padding: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  emojiContainer: {
    width: 65,
    height: 65,
    borderRadius: 20,
    backgroundColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 13,
  },
  emoji: {
    fontSize: 38,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.text,
  },
  description: {
    fontSize: 10,
    color: COLORS.textSecondary,
    marginTop: 5,
  },
  arrow: {
    position: 'absolute',
    right: 12,
    bottom: 12,
  },
});
