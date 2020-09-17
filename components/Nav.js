import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Nav() {
  return (
    <View style={styles3.container}>
      <View style={styles3.icon} />
      <View style={styles3.icon} />
      <View style={styles3.icon} />
    </View>
  );
}

const styles3 = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "10%",
    backgroundColor: "#E0D0AB",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#707070",
  },
});
