import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../components/logo";
import Glass from "../components/glass";
import EntryField from "../components/entryField";
import Button from "../components/button";
import Select from "../components/selectDrop";

export default function StartPage() {
  return (
    <LinearGradient
    colors={["#8A9EE2", "#3C4F8F"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.background}
    >
      <View style={styles.screenBorders}></View>
      <View style={styles.content}>
        <Glass height={360} heightBorder={364} />
        <Logo resolution={logoResolution} type={"onGlass"} />
        <View style={styles.blockForObj}>
          <EntryField type={"name"} text={"Имя"} />
          <EntryField type={"surname"} text={"Фамилия"} paddingTop={"true"} />
          <EntryField
            type={"patronymic"}
            text={"Отчество"}
            paddingTop={"true"}
          />
          <Select />
          <Button text={"Зарегистрироваться"} />
        </View>
      </View>
      <View style={styles.screenBorders}></View>
    </LinearGradient>
  );
}

const logoResolution = {
  width: 83,
  height: 83,
};

var styles = StyleSheet.create({
  blockForObj: {
    width: "66%",
    top: 58,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  screenBorders: {
    flexGrow: 1,
    paddingRight: 16,
    paddingLeft: 16,
    justifyContent: "flex-end",
    marginTop: 34,
  },
  content: {
    flexGrow: 2,
    alignItems: "center",
    paddingRight: 16,
    paddingLeft: 16,
    marginTop: 100,
  },
});
