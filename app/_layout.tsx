import '../global.css';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Tabs, Stack } from 'expo-router';
import { Text, View, ActivityIndicator } from 'react-native';

export default function Layout() {
  const [userName, setUserName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkUserName() {
      try {
        const storedName = await AsyncStorage.getItem('userName');
        setUserName(storedName);
        setIsLoading(false);
      } catch (e) {
        console.error('Failed to load user name', e);
        setIsLoading(false);
      }
    }

    checkUserName();
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#262626',
        }}>
        <ActivityIndicator size="large" color="#00ACD8" />
        <Text style={{ color: 'white', marginTop: 10 }}>Cargando...</Text>
      </View>
    );
  }

  if (!userName) {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding" />
      </Stack>
    );
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#00ACD8',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#262626' },
        headerStyle: { backgroundColor: '#262626' },
        headerTintColor: 'white',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Animals',
          tabBarIcon: ({ color }) => <Ionicons name="paw" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="details"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="onboarding"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
