import { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function loadUserName() {
      try {
        const name = await AsyncStorage.getItem('userName');
        setUserName(name);
      } catch (error) {
        console.error('Failed to load user name', error);
      }
    }

    loadUserName();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userName');
      router.replace('/onboarding');
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };

  return (
    <SafeAreaView className="bg-background flex-1 p-6">
      <View className="flex-1 items-center justify-center">
        <View className="bg-background2 mb-6 h-24 w-24 items-center justify-center rounded-full">
          <Ionicons name="person" size={50} color="#00ACD8" />
        </View>

        <Text className="mb-1 text-2xl font-bold text-white">{userName || 'User'}</Text>
        <Text className="mb-8 text-gray-400">Animal Lover</Text>

        <TouchableOpacity
          className="bg-primary mt-4 w-full rounded-lg px-6 py-3"
          onPress={handleLogout}>
          <Text className="text-center font-semibold text-white">Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
