import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Shadow } from "react-native-shadow-2";

let screenW = Dimensions.get("window").width;

export default function Bar(props) {
  return (
    <Shadow startColor={"rgba(39,60,131,0.1)"}>
      <View style={styles.bar}>
        <LinearGradient
          colors={["#8A9EE2", "#3C4F8F"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.bar}
        ></LinearGradient>
        <LinearGradient
          colors={[
            "rgba(255, 255, 255, 0)",
            "rgba(255, 255, 255, 0.7)",
            "rgba(255, 255, 255, 0.5)",
            "rgba(255, 255, 255, 0.3)",
            "rgba(255, 255, 255, 0.1)",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={props.hidden?'':[styles.glass, {width: (screenW - 32)*props.width}]}
        ></LinearGradient>
      </View>
    </Shadow>
  );
}

const styles = StyleSheet.create({
  bar: {
    width: screenW - 32,
    height: 28,
    borderRadius: 5,
  },
  glass: {
    height: 28,
    borderWidth:2,
    borderRadius: 5,
    borderColor: "rgba(255, 255, 255, 0.5)",
    bottom:28
  },
});
