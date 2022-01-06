import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../components/logo";
import Button from "../components/button_start";

export default function App() {
  return (
    <LinearGradient
      colors={["#8A9EE2", "#3C4F8F"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <View style={styles.screenBorders}></View>
      <View style={styles.content}>
        <Logo resolution={logoResolution} />
        <Text style={styles.test}>Eshoot</Text>
      </View>
      <View style={styles.screenBorders}>
        <Button text={"Войти"} type={"main"} ssr={"Date"} />
        <Button text={"Регистрация"} type={"registration"} ssr={"SignUp"} />
      </View>
      <StatusBar style="auto" />
    </LinearGradient>
    
  );
}

const logoResolution = {
  width: 101,
  height: 101,
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  screenBorders: {
    flex: 1,
    paddingRight: 16,
    paddingLeft: 16,
  },
  content: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 16,
    paddingLeft: 16,
  },
  test: {
    color: "white",
    fontWeight: "400",
    fontSize: 24,
    textShadowColor: "rgba(255, 255, 255, 0.3)",
    textShadowRadius: 10,
    top: 8,
    fontFamily: "Roboto_400Regular",
  },
});
