import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Shadow } from "react-native-shadow-2";

export default function Input(props) {
  return (
    <Shadow startColor={"rgba(39,60,131,0.1)"}>
      <View style={[styles.input, { width: props.width }]}>
        <TextInput
          placeholder={props.text}
          placeholderTextColor="black"
          style={styles.placeholder}
        />
      </View>
    </Shadow>
  );
}

var styles = StyleSheet.create({
  input: {
    height: 42,
    paddingLeft: 14,
    borderRadius: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#7D94DF",
  },
  inputNext: {
    width: "100%",
    height: 42,
    paddingLeft: 14,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderWidth: 1,
    borderColor: "white",
    marginTop: 16,
  },
  placeholder: {
    color: "black",
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    paddingVertical: 5,
  },
});
