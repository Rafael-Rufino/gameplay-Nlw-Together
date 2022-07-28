import React from "react";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";
import { SignIn } from "./src/screens/SignIn";
import theme from "./src/global/styles/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <SignIn />
      </ThemeProvider>
    </>
  );
}
