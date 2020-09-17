import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

export default function App() {
  return (
    <View style={styles.container}>
      <Portfolio />
      {/* <Home /> */}
      {/* <Welcome /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
