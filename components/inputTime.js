import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { Shadow } from "react-native-shadow-2";

export default function Input(props) {
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");
  const CheckHour = (newHour) => {
    setHour(newHour<24? String(newHour): "23")
    props.onChangeHour(newHour<24? newHour: 23);
  };
  const CheckMin = (newMin) => {
    setMin(newMin<60? String(newMin): "59")
    props.onChangeMin(newMin<60? newMin: 59);
  };
  return (
    <Shadow startColor={"rgba(39,60,131,0.1)"}>
      <View
        style={[styles.input, { width: props.width, flexDirection: "row" }]}
      >
        <TextInput
          placeholderTextColor="black"
          placeholder="00"
          value={hour}
          style={styles.placeholder}
          keyboardType={"numeric"}
          maxLength={2}
          onChangeText={CheckHour}
        />
        <Text>:</Text>
        <TextInput
          placeholderTextColor="black"
          placeholder="00"
          value={min}
          style={styles.placeholder}
          keyboardType={"numeric"}
          maxLength={2}
          onChangeText={CheckMin}
        />
      </View>
    </Shadow>
  );
}

var styles = StyleSheet.create({
  input: {
    justifyContent: "center",
    alignItems: "center",
    height: 42,
    borderRadius: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#7D94DF",
  },
  placeholder: {
    color: "black",
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    paddingVertical: 5,
  },
});
