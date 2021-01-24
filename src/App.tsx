import React from "react";
import { StatusBar } from "react-native";
import { AppearanceProvider } from "react-native-appearance";
import { Navigator } from "~/providers";

export default function App() {
  return (
    <AppearanceProvider>
      <StatusBar />
      <Navigator />
    </AppearanceProvider>
  );
}
