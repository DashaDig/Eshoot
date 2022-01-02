import React from "react";
import { StyleSheet, TextInput, View, Dimensions } from "react-native";
import { Shadow } from "react-native-shadow-2";

let screenW = Dimensions.get("window").width;

export default function Serch(props) {
  return (
    <Shadow
      viewStyle={{ backgroundColor: "white", marginRight: 16 }}
      size={[screenW * 0.78, 34]}
      startColor={'rgba(39,60,131,0.1)'}
    >
      <View style={styles.input}>
        <TextInput
          placeholder={"Поиск"}
          placeholderTextColor="black"
          style={styles.placeholder}
          secureTextEntry={props.password}
        />
      </View>
    </Shadow>
  );
}

var styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 34,
    paddingLeft: 14,
    borderRadius: 5,
  },
  placeholder: {
    color: "black",
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    paddingVertical: 5,
  },
});
