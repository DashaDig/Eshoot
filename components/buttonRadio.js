import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Shadow } from "react-native-shadow-2";

export default function ButtonRadio(props) {
  const changeData = () => {
    setPress(!press)
    props.onChangeData({ name: props.text ,isChecked: !press })
  };
  const [press, setPress] = useState(false);
  return (
    <View style={{marginRight: 8,}}>
      <Shadow startColor={"rgba(39,60,131,0.1)"}>
        <TouchableOpacity
          onPress={changeData}
          style={[
            press ? styles.buttonPress : styles.button,
            { width: props.width },
          ]}
          activeOpacity={0.5}
        >
          <Text style={press ? styles.textPress : styles.text}>
            {props.text === "" ? "Пусто" : props.text}
          </Text>
        </TouchableOpacity>
      </Shadow>
    </View>
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
    borderWidth: 1,
    borderColor: "#7D94DF",
    
  },
  buttonPress: {
    height: 42,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#7D94DF",
    borderWidth: 1,
    borderColor: "#7D94DF",
  },
  text: {
    color: "black",
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    paddingVertical: 10,
  },
  textPress: {
    color: "white",
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    paddingVertical: 10,
  },
});
