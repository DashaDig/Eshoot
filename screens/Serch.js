import React from "react";
import { StyleSheet, FlatList, Image, View, Dimensions } from "react-native";
import { Shadow } from "react-native-shadow-2";
import Header from "../components/header";
import Serch from "../components/serch";
import Button from "../components/buttonModal";
import Card from "../components/photographer_сard";

let screenW = Dimensions.get("window").width;

export default function SerchPage() {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header text={"Поиск"} />
      <View style={styles.conteiner}>
        <View style={styles.serch}>
          <Serch />
          <Image
            source={require("../assets/filter.png")}
            style={styles.filter}
          />
        </View>
        <Button text={"По умолчанию ▼"} />
        <Card/>
        <Card/><Card/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    paddingTop: 16,
    paddingRight: 16,
    paddingLeft: 16,
  },
  serch: {
    flex: 1,
    flexDirection: "row",
  },
  filter: {
    top: 4,
  },
});
