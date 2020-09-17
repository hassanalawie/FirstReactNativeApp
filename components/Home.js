import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Nav from "./Nav";
import Header from "./Header";

export default function Home() {
  return (
    <View style={styles4.container}>
      <Header name="HOME" />
      <View style={styles4.row1}>
        <View style={styles4.icon} />
        <Image style={styles4.image} source={require("../assets/user.png")} />
        <View style={styles4.icon} />
      </View>
      <View style={styles4.row2}>
        <Button style={styles4.button} title="Likes" color="#333" />
        <Button style={styles4.button} title="Followers" color="#333" />
        <Button style={styles4.button} title="Collection" color="#333" />
      </View>
      <View style={styles4.row3}>
        <Text>__________________________________________</Text>
        <Text style={styles4.title}>ABOUT ME</Text>
        <Text>__________________________________________</Text>
        <Text style={styles4.subtitle}>
          description of my {"\n"} skills/work
        </Text>
        <Text>__________________________________________</Text>
      </View>
      <Nav />
    </View>
  );
}

const styles4 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4C646",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  row1: {
    marginTop: 90,
    marginBottom: 20,
    width: 370,
    height: 200,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  row2: {
    marginBottom: 20,
    width: 370,
    height: 70,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  row3: {
    marginBottom: 20,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#707070",
    margin: 10,
  },
  image: {
    width: 90,
    height: 90,
  },
  button: {
    borderColor: "#F4C646",
  },
  title: {
    paddingTop: 10,
    fontSize: 30,
  },
  subtitle: {
    paddingTop: 10,
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
});
