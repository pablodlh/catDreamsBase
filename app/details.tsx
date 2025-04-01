import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Animal {
  id: string;
  type: string;
  image: string;
  name: string;
  age: number;
  description: string;
  location: string;
  adopted: boolean;
  adoptionDate: string | null;
  adopterName?: string;
}

export default function Details() {
  const { id } = useLocalSearchParams();
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [userName, setUserName] = useState<string | null>(null);
  const [adopting, setAdopting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function loadUserNameAndAnimal() {
      
    }

    loadUserNameAndAnimal();
  }, [id]);

  const handleAdopt = async () => {
  
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: animal?.name,
          headerShown: true,
          headerStyle: { backgroundColor: '#262626' },
          headerTintColor: 'white',
        }}
      />

      <SafeAreaView className="bg-background flex-1">
        {loading ? (
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#00ACD8" />
          </View>
        ) : (
          <ScrollView>
          {/*todos lso detalles del animal y botón de adoptar */}
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
}
