import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Shadow } from "react-native-shadow-2";

export default function Header(props) {
  return (
    <Shadow startColor={'rgba(39,60,131,0.1)'}>
      <View style={styles.header}>
        <Text style={styles.heading}>{props.text}</Text>
        <Image
          source={props.text==="Личный кабинет"?require("../assets/settings.png"):require("../assets/bell.png")}
          style={props.text==="Личный кабинет"?styles.settings:styles.settingsbell}
        />
      </View>
    </Shadow>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    width:'100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  heading: {
    color: "#273C83",
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: "Roboto_500Medium",
    height: 38,
    paddingLeft: 16,
  },
  settings: {
    right: 12,
    bottom: 9,
  },
  settingsbell:{
    right: 18,
    bottom: 15
  }
});
