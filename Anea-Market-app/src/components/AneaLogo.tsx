
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface AneaLogoProps {
  size?: number;
  showName?: boolean;
}

export default function AneaLogo({
  size = 90,
  showName = true,
}: AneaLogoProps) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.logo,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
          },
        ]}
      >
        <View style={styles.leaf} />

        <View style={[styles.berry, styles.berryLeft]} />
        <View style={[styles.berry, styles.berryRight]} />
        <View style={[styles.berry, styles.berryBottom]} />

        <View style={styles.berryDot} />
      </View>

      {showName && (
        <Text style={styles.brandName}>
          Anea<Text style={styles.brandAccent}>-Market</Text>
        </Text>
      )}

      {showName && (
        <Text style={styles.subtitle}>
          Fresh products, happy life
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    backgroundColor: '#DDF3FF',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  berry: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#287EBB',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    position: 'absolute',
  },

  berryLeft: {
    left: 13,
    top: 28,
  },

  berryRight: {
    right: 13,
    top: 28,
  },

  berryBottom: {
    bottom: 12,
    alignSelf: 'center',
  },

  berryDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#A9DDF8',
    position: 'absolute',
    top: 37,
  },

  leaf: {
    width: 18,
    height: 10,
    backgroundColor: '#55B987',
    borderRadius: 10,
    position: 'absolute',
    top: 13,
    transform: [{ rotate: '-25deg' }],
  },

  brandName: {
    fontSize: 27,
    fontWeight: '800',
    color: '#173B56',
    marginTop: 12,
  },

  brandAccent: {
    color: '#55A9E0',
  },

  subtitle: {
    fontSize: 12,
    color: '#7D9AAF',
    marginTop: 4,
  },
});
