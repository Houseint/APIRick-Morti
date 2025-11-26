import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaPersonagem from './src/Telas/TelaPersonagem';
import TelaDetalhe from './src/Telas/TelaDetalhe';
import {useFonts} from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'GetSchwifty': require('./assets/fonts/Ricky-and-Morty-font.ttf'),
  });
  return (
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Personagens" component={TelaPersonagem} options={{headerTintColor: 'yellow',
                           headerStyle: {backgroundColor: 'green', },
                           headerTitleStyle:{fontFamily:'GetSchwifty', fontSize: 30, fontWeight: 90, left: 450},
                           title: 'Rick and Morty Personagens'
                           
                          }}/>
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
