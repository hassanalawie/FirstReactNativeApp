import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Nav from "./Nav";
import Header from "./Header";
import { Col, Row, Grid } from "react-native-easy-grid";

export default function Home() {
  return (
    <View style={styles6.container}>
      <Header name="MY PORTFOLIO" />
      <View style={styles6.grid}>
        <View style={styles6.box1} />
        <View style={styles6.box2} />
        <View style={styles6.box3} />
        <View style={styles6.box4} />
      </View>
      <Nav />
    </View>
  );
}

const styles6 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4C646",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  grid: {
    position: "absolute",
    top: 120,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  box1: {
    backgroundColor: "#fff",
    width: 160,
    height: 240,
    borderWidth: 1,
    borderColor: "#000",
    margin: 5,
  },
  box2: {
    backgroundColor: "#fff",
    width: 190,
    height: 120,
    borderWidth: 1,
    borderColor: "#000",
    margin: 5,
  },
  box3: {
    backgroundColor: "#fff",
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: "#000",
    margin: 5,
  },
  box4: {
    backgroundColor: "#fff",
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: "#000",
    margin: 5,
  },
});
