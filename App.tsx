import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Stacked navigation //
const Stack = createStackNavigator();
// ! Bottom Tabs //
import Tabs from "./Navigation/Tabs";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        {/* Tabs */}
        <Stack.Screen name="HomeScreen" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

