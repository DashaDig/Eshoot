import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { Shadow } from "react-native-shadow-2";

export default function Input(props) {
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");
  const CheckHour = (hour) => {
    console.log(hour)
    setHour(Math.min(hour, 23))
    console.log(Math.min(hour, 23))
  }
  const CheckMin = (min) => {
    setMin(Math.min(min, 59))
  }
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
