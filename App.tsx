import React from "react";
import { ThemeProvider } from "styled-components";
import { StatusBar, LogBox } from "react-native";
import theme from "./src/global/styles/theme";

LogBox.ignoreLogs([
  "You are not currently signed in to Expo on your development machine.",
]);

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import { Routes } from "./src/routes";
import { Background } from "./src/components/Background";
import { AuthProvider } from "./src/hooks/auth";
import { Load } from "./src/components/Load";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <Load />;
  }
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Background>
    </ThemeProvider>
  );
}
