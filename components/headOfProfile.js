import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Users(params) {
  return (
    <View style={styles.conteiner}>
      <Image source={require("../assets/avatar.png")} style={styles.avatar} />
      <Text style={styles.fio}>{params.surnameC} {params.nameC}{"\n"}{params.patronymicC}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    height: 77,
    width: 77,
    borderRadius: 40,
    marginBottom:8
  },
  fio: {
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
    textAlign: "center",
    marginBottom:8
  },
});
