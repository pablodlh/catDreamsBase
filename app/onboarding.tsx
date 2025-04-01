import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OnboardingScreen() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleContinue = async () => {
    if (name.trim().length < 2) {
      setError('Please enter a valid name (at least 2 characters)');
      return;
    }

    try {
      await AsyncStorage.setItem('userName', name.trim());
      router.replace('/');
    } catch (e) {
      console.error('Failed to save name', e);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="bg-background flex-1 p-6">
        <View className="flex-1 justify-center">
          <Text className="text-primary mb-8 text-center text-3xl font-bold">Bienvenido</Text>

          <Text className="mb-2 text-xl text-white">Introduce tu nombre:</Text>
          <TextInput
            className="bg-background2 mb-2 rounded-lg p-4 text-white"
            placeholderTextColor="gray"
            value={name}
            onChangeText={setName}
          />

          {error ? <Text className="mb-4 text-red-500">{error}</Text> : null}

          <TouchableOpacity className="bg-primary mt-4 rounded-lg p-4" onPress={handleContinue}>
            <Text className="text-center text-lg font-bold text-white">Continuar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}
