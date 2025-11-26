import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {useFonts} from 'expo-font';

export default function TelaDetalhe({ route }) {
  const { character } = route.params;
  const [fontsLoaded] = useFonts({
    'GetSchwifty': require('../../assets/fonts/Ricky-and-Morty-font.ttf'),
  });

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={[styles.name, { color: character.status === 'Dead' 
        ? 'red' 
        : character.status === 'Alive' 
        ? 'green' 
        : 'gray' }]}>Status: {character.status}</Text>
      <Text style={styles.name}>Species: {character.species}</Text>
      <Text style={styles.name}>Gender: {character.gender}</Text>
      <Text style={styles.name}>Origin: {character.origin.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  image: { width: 200, height: 200, borderRadius: 100 },
  name: { fontSize: 24, fontWeight: 'bold',
          marginVertical: 10,
         fontFamily:'GetSchwifty',
         color: 'green' },
});