import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header(props) {
  return (
    <View style={styles5.container}>
      <View style={styles5.icon} />
      <Text style={styles5.text}> {props.name} </Text>
      <View style={styles5.icon} />
    </View>
  );
}

const styles5 = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 120,
    backgroundColor: "#E0D0AB",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#707070",
    margin: 10,
  },
  text: {
    margin: 10,
    fontSize: 20,
  },
});
