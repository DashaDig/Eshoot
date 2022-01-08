import React from "react";
import { StyleSheet, ScrollView, Image, View } from "react-native";
import Header from "../components/header";
import Serch from "../components/serch";
import Button from "../components/buttonModal";
import Card from "../components/photographer_сard";

export default function Calendar() {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header text={"Календарь"} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    paddingTop: 16,
    paddingRight: 16,
    paddingLeft: 16,
  },
});
