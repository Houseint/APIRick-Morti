import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default function TelaPersonagem({ navigation }) {
  const [personagem, setPersonagem] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setPersonagem(response.data.results);
        setCarregando(false);
      })
      .catch(error => {
        console.error(error);
        setCarregando(false);
      });
    }, []);

    if (carregando) {
      return (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="red" />
        </View>
      );
    }

    return (
      <FlatList
        data={personagem}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('Detalhes', { character: item })}
            >
            <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.status} - {item.species}</Text>
            </View>
          </TouchableOpacity>
        )}
      />)
}

const styles = StyleSheet.create({
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: { flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
  image: { width: 80, height: 80, borderRadius: 40 },
  info: { marginLeft: 10, justifyContent: 'center' },
  name: { fontSize: 16, fontWeight: 'bold' },
});