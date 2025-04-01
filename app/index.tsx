import { useEffect, useState } from 'react';
import { FlatList, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';

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

export default function AnimalsList() {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetchAnimals(filterType);
  }, [filterType]);

  const fetchAnimals = async (type?: string) => {
  
  };

  const renderAnimalItem = ({ item }: { item: Animal }) => (
  
  );

  const FilterButton = ({ type, label }: { type: string; label: string }) => (
    <TouchableOpacity
      className={`mr-2 rounded-full px-4 py-2 ${filterType === type ? 'bg-primary' : 'bg-background2'}`}
      onPress={() => setFilterType(filterType === type ? '' : type)}>
      <Text className={`${filterType === type ? 'text-white' : 'text-gray-300'}`}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView className="bg-background flex-1 p-4">
        <View className="mb-4">
    
  
          <View className="mb-4 flex-row">
            <FilterButton type="gato" label="Gatos" />
            <FilterButton type="perro" label="Perros" />
            <FilterButton type="mapache" label="Mapaches" />
          </View>
        </View>

        {loading ? (
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#00ACD8" />
          </View>
        ) : (
          <FlatList
            data={animals}
            renderItem={renderAnimalItem}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={
              <Text className="mt-10 text-center text-white">No animals found</Text>
            }
          />
        )}
      </SafeAreaView>
    </>
  );
}
