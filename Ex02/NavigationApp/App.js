import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home/index';
import MembersScreen from './src/screens/tela2/index';
import ProjectScreen from "./src/screens/tela3/index";

export default function App() {
const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Members"
          component={MembersScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Project"
          component={ProjectScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
