import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function Button(props) {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={["#8A9EE2", "#3C4F8F"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[
        styles.linearGradient,
        {
          width: props.width === "" ? "auto" : props.width,
          height:42,
          marginRight: props.marginRight === "" ? "" : props.marginRight,
        },
      ]}
    >
      <TouchableOpacity
        onPress={props.back?() => navigation.goBack():() => navigation.navigate(props.ssr)}
        style={styles.button}
      >
        <Text style={styles.text}>
          {props.text === "" ? "Пусто" : props.text}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
var styles = StyleSheet.create({
  linearGradient: {
    marginTop: 16,
    borderRadius: 5,
  },
  button: {
    height: 42,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    color: "#fff",
    fontStyle: "normal",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    paddingVertical: 10,
    letterSpacing: 1,
  },
});
