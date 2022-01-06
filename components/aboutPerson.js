import React from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { useNavigation } from "@react-navigation/native";
import Button from "./button";

let screenW = Dimensions.get("window").width;

export default function About(props) {
  const navigation = useNavigation();
  return (
    <View style={{ marginVertical: 8 }}>
      <Shadow startColor={"rgba(39,60,131,0.1)"}>
        <View style={styles.block}>
          <Text style={styles.info}>
            Информация о том что может о себе человек из сферы фотографии
            рассказать, умещенные в три абзаца...
          </Text>
        </View>
      </Shadow>
      <Button text={"Вся информация"} width={176} />
    </View>
  );
}

var styles = StyleSheet.create({
  block: {
    width: screenW - 32,
    height: 80,
    borderRadius: 5,
    paddingVertical: 9,
    paddingHorizontal: 8,
  },
  info: {
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
  },
});
