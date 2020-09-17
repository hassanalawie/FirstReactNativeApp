import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

export default function Welcome() {
  return (
    <View style={styles2.welcome}>
      <Image source={require("../assets/user.png")} />
      <TextInput style={styles2.input} placeholder="Username" />
      <TextInput style={styles2.input} placeholder="Password" secureTextEntry />
      <View style={styles2.socials}>
        <View style={styles2.social} />
        <View style={styles2.social} />
        <View style={styles2.social} />
        <View style={styles2.social} />
      </View>
    </View>
  );
}

const styles2 = StyleSheet.create({
  welcome: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    fontSize: 20,
    padding: 5,
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    width: 300,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#F4C646",
    borderColor: "#CECECE",
    borderWidth: 3,
  },

  socials: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  social: {
    backgroundColor: "#F4C646",
    width: 50,
    height: 50,
    borderRadius: 100,
    margin: 10,
    marginTop: 20,
  },
});
