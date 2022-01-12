import React, { useState } from "react";
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
          height: 42,
          marginRight: props.marginRight === "" ? "" : props.marginRight,
          marginTop: props.marginTop !== false ? 16 : 0,
        },
      ]}
    >
      <TouchableOpacity
        onPress={
          props.back
            ? () => navigation.goBack()
            : props.submit
            ? props.handleSubmit
            : () => navigation.navigate(props.ssr, props.apiData)
        }
        style={props.type === "Auth" ? styles.buttonAuth : styles.button}
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
    borderRadius: 5,
  },
  buttonAuth: {
    height: 42,
    alignItems: "center",
    borderRadius: 5,
  },
  button: {
    height: 42,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#8A9EE2",
  },
  text: {
    color: "#fff",
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    paddingVertical: 10,
    letterSpacing: 0.2,
  },
});
