import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaPersonagem from '../screens/TelaPersonagem';
import TelaDetalhe from '../screens/TelaDetalhe';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
   <Stack.Navigator>
        <Stack.Screen name="Personagens" component={TelaPersonagem} />
        <Stack.Screen name="Detalhes" component={TelaDetalhe} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
