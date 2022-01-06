import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Info(props) {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.heading}>{props.text}</Text>
      <Text style={styles.content}>{props.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    marginBottom: 16,
    alignItems:'flex-start'
  },
  heading: {
    fontSize: 16,
    fontStyle: "normal",
    color:'#8A8282',
    fontFamily: "Roboto_500Medium",
    textAlign: "center",
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
    textAlign: "center",
  },
});
