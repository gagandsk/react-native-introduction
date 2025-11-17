import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToPage = () => {
    navigation.navigate("Settings");
  };
  return (
    <SafeAreaView>
      <Text>Pantalla HomeScreen</Text>
      <Text>Pantalla HomeScreen</Text>
      <Text>Pantalla HomeScreen</Text>
      <Text>Pantalla HomeScreen</Text>
      <Text>Pantalla HomeScreen</Text>
      <Text>Pantalla HomeScreen</Text>
      <Text>Pantalla HomeScreen</Text>
      <Text>Pantalla HomeScreen</Text>
      <Text>Pantalla HomeScreen</Text>
      <Button onPress={goToPage} title="Ir a Settings" />
    </SafeAreaView>
  );
}
