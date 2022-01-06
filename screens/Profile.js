import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/header";
import Users from "../components/headOfProfile";
import Info from "../components/userInfo";

export default function App() {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header text={"Личный кабинет"} />
      <Users
        surnameC={"Дигтяренко"}
        nameC={"Дарья"}
        patronymicC={"Евгеньевна"}
      />
      <View style={styles.content}>
        <Info text={"Город"} value={"Екатеринбург"} />
        <Info text={"Телефон"} value={"89828328495"} />
        <Info text={"Возраст"} value={"21 год"} />
        <Info text={"Удобное время для связи"} value={"с 10:00 до 19:00"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 16,
    marginLeft: 16,
    alignItems: "flex-start",
  },
});
