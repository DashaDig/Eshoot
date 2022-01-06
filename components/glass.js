import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


export default function Glass(props) {
  return (
    <LinearGradient
      colors={[
        "rgba(255, 255, 255, 0.3)",
        "rgba(255, 255, 255, 0)",
        "rgba(255, 255, 255, 0)",
        "rgba(255, 255, 255, 0.3)",
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.glassBorder}
      height={props.heightBorder}
    >
      <LinearGradient
        colors={[
          "rgba(255, 255, 255, 0.1)",
          "rgba(255, 255, 255, 0.2)",
          "rgba(255, 255, 255, 0.3)",
          "rgba(255, 255, 255, 0.4)",
          "rgba(255, 255, 255, 0.45)",
          "rgba(255, 255, 255, 0.5)",
          "rgba(255, 255, 255, 0.55)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.55)",
          "rgba(255, 255, 255, 0.5)",
          "rgba(255, 255, 255, 0.4)",
          "rgba(255, 255, 255, 0.3)",
          "rgba(255, 255, 255, 0.2)",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.glass}
        height={props.height}
      ></LinearGradient>
    </LinearGradient>
  );
}

var styles = StyleSheet.create({
  glass: {
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  glassBorder: {
    width: "85%",
    borderRadius: 10,
    alignItems: "center",
    padding: 2,
    position: "absolute",
    // borderWidth: 2,
    // borderColor: 'rgba(255, 255, 255, 0.3)',
  },
});
