import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function Field(props) {

  const onChange = (event) => props.onChangeData(event);

  return (
    <View
      style={[props.paddingTop === "true" ? styles.inputNext : styles.input]}
    >
      <TextInput
        placeholder={props.text}
        placeholderTextColor="#8A8282"
        onChangeText={onChange}
        style={styles.placeholder}
        secureTextEntry={props.password}
      />
    </View>
  );
}

var styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 42,
    paddingLeft: 14,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderWidth: 1,
    borderColor: "white",
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
