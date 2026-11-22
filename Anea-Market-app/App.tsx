import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Search, ShoppingCart, Heart, User } from 'lucide-react-native';

import SplashScreen from './src/screens/SplashScreen';
import Onboarding from './src/screens/Onboarding';
import SignInScreen from './src/auth/SignInScreen';
import VerificationScreen from './src/auth/VerificationScreen';
import SelectLocationScreen from './src/auth/SelectLocationScreen';
import LoginScreen from './src/auth/LoginScreen';
import SignUpScreen from './src/auth/SignUpScreen';

import HomeScreen from './src/screens/HomeScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import CategoryProductsScreen from './src/screens/CategoryProductsScreen';
import CartScreen from './src/screens/CartScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import AddressScreen from './src/screens/AddressScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import SupportScreen from './src/screens/SupportScreen';
import OrderAcceptedScreen from './src/checkout/OrderAcceptedScreen';
import OrderErrorScreen from './src/checkout/OrderErrorScreen';
import { CartProvider, useCart } from './src/context/CartContext';
import { COLORS } from './src/theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  const { totalCount } = useCart();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
          height: 64,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopColor: '#e2e8f0',
        },
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Басты') return <Home size={size} color={color} />;
          if (route.name === 'Каталог') return <Search size={size} color={color} />;
          if (route.name === 'Себет') return <ShoppingCart size={size} color={color} />;
          if (route.name === 'Таңдаулы') return <Heart size={size} color={color} />;
          return <User size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Басты" component={HomeScreen} />
      <Tab.Screen name="Каталог" component={ExploreScreen} />
      <Tab.Screen
        name="Себет"
        component={CartScreen}
        options={{
          tabBarBadge: totalCount > 0 ? totalCount : undefined,
          tabBarBadgeStyle: { backgroundColor: COLORS.primary, color: COLORS.white },
        }}
      />
      <Tab.Screen name="Таңдаулы" component={FavoritesScreen} />
      <Tab.Screen name="Профиль" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="Verification" component={VerificationScreen} />
          <Stack.Screen name="SelectLocation" component={SelectLocationScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Home" component={MainTabs} />
          <Stack.Screen name="CategoryProducts" component={CategoryProductsScreen} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
          <Stack.Screen name="Orders" component={OrdersScreen} />
          <Stack.Screen name="Address" component={AddressScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
          <Stack.Screen name="Support" component={SupportScreen} />
          <Stack.Screen name="OrderAccepted" component={OrderAcceptedScreen} />
          <Stack.Screen name="OrderError" component={OrderErrorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}