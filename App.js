import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Table1 from "./Table1";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <Image
              style={styles.tinyLogo}
              source={require("./assets/profile.png")}
            />
          </View>
          <View style={styles.left}>
            <Text style={styles.headerleft}>{`JAABIR AHMED\nAR-RAHMAAN`}</Text>
          </View>
          <View style={styles.center}>
            <Text
              style={styles.headercenter}
            >{`Available Points : 5680\nTotal PointsRewarded : 8200`}</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.headerright}>
              <Ionicons name="ios-star-outline" size={20} color="#fcba03" />5
            </Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.headerright}>
              <Ionicons name="ios-star-outline" size={20} color="red" />8
            </Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.headerright}>
              <Ionicons name="ios-star-outline" size={20} color="gray" />3
            </Text>
            <Text style={styles.level}>Level 5</Text>
          </View>
        </View>
        <View style={styles.body}>
          <Table1 />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 25,
    flexDirection: "row",
  },
  body: {
    marginLeft: 4,
    width: "98%",
    height: 465,
    borderWidth: 1,
    borderColor: "grey",
  },
  headerleft: {
    color: "black",
    fontWeight: "bold",
    fontSize: 10,
    right: 20,
    textAlign: "center",
  },
  headercenter: {
    color: "black",
    fontWeight: "bold",
    fontSize: 10,
    alignItems: "center",
    textAlign: "center",
  },
  headerright: {
    color: "black",
    fontWeight: "bold",
    fontSize: 10,
    left: 30,
  },
  level: {
    color: "black",
    fontWeight: "bold",
    fontSize: 10,
  },
  tinyLogo: {
    width: 30,
    height: 30,
    marginRight: 25,
    alignItems: "center",
  },
});
