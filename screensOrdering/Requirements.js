import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Bar from "../components/bar";
import Header from "../components/header";
import Input from "../components/input";
import Button from "../components/button";
import { Shadow } from "react-native-shadow-2";

import RadioButtonRN from "radio-buttons-react-native";

export default function Requirements() {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header text={"Оформление заказа"} back={true} rightIcon={true} />
      <View style={styles.content}>
        <Bar />
        <Text style={styles.heading}>Какие требования{"\n"}к фотографии?</Text>
        <View style={{ marginBottom: 24 }}>
          <Text style={styles.headingTwo}>Общее количество кадров</Text>
          <Input width={132} />
        </View>
        <View style={{ marginBottom: 24 }}>
          <Text style={styles.headingTwo}>Ориентация</Text>
        </View>
        <View style={{ marginBottom: 24 }}>
          <Text style={styles.headingTwo}>Пропорции</Text>
        </View>
        <View style={{ marginBottom: 24 }}>
          <Text style={styles.headingTwo}>Разрешение</Text>
        </View>
        <View style={{ marginBottom: 24 }}>
          <Text style={styles.headingTwo}>Формат</Text>
        </View>
        <Text style={styles.headingTwo}>Постобраотка</Text>
        
      </View>
      <View style={{ position: "absolute", bottom: 30, left: 16 }}>
        <Shadow startColor={"rgba(39,60,131,0.1)"}>
          <View style={styles.button}>
            <Button text={"Назад"} width={132} ssr={""} back={true} />
          </View>
        </Shadow>
      </View>
      <View style={{ position: "absolute", bottom: 30, right: 16 }}>
        <Shadow startColor={"rgba(39,60,131,0.1)"}>
          <View style={styles.button}>
            <Button text={"Завершить"} width={132} ssr={""} />
          </View>
        </Shadow>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginLeft: 16,
    alignItems: "flex-start",
    marginTop: 16,
  },
  heading: {
    fontSize: 22,
    fontStyle: "normal",
    fontFamily: "Roboto_500Medium",
    marginTop: 16,
    marginBottom: 16,
  },
  headingTwo: {
    fontSize: 18,
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
  },
  button: {
    marginBottom: 0,
    height: 40,
    bottom: 17,
  },
  buttonBack: {
    marginBottom: 0,
    height: 40,
    bottom: 17,
  },
});
