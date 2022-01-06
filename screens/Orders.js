import React from "react";
import { StyleSheet, ScrollView, Image, View, Dimensions } from "react-native";
import Header from "../components/header";
import Serch from "../components/serch";
import Button from "../components/buttonModal";
import Card from "../components/photographer_сard";

let screenW = Dimensions.get("window").width;

export default function SerchPage() {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header text={"Заказы"} />
      <ScrollView>
        <View style={styles.conteiner}>
          
        </View>
      </ScrollView>
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
