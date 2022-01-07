import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import Bar from "../components/bar";
import Header from "../components/header";
import Input from "../components/input";
import Button from "../components/button";
import ButtonRadio from "../components/buttonRadio";
import { Shadow } from "react-native-shadow-2";

export default function Requirements() {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header text={"Оформление заказа"} back={true} rightIcon={true} />
      <View style={styles.content}>
        <Bar />
        <Text style={styles.heading}>Какие требования{"\n"}к фотографии?</Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <View style={{ marginBottom: 24 }}>
            <Text style={styles.headingTwo}>Общее количество кадров</Text>
            <Input width={132} keyboard={"numeric"} />
          </View>
          <View style={{ marginBottom: 24 }}>
            <Text style={styles.headingTwo}>Ориентация</Text>
            <View style={{ flexDirection: "row" }}>
              <ButtonRadio text={"Альбомная"} width={132} />
              <ButtonRadio text={"Книжная"} width={132} />
            </View>
          </View>
          <View style={{ marginBottom: 24 }}>
            <Text style={styles.headingTwo}>Пропорции</Text>
            <View style={{ flexDirection: "row" }}>
              <ButtonRadio text={"1×1"} width={76} />
              <ButtonRadio text={"2×3"} width={76} />
              <ButtonRadio text={"3×4"} width={76} />
              <ButtonRadio text={"16×9"} width={76} />
            </View>
          </View>
          <View style={{ marginBottom: 24 }}>
            <Text style={styles.headingTwo}>Разрешение</Text>
          </View>
          <View style={{ marginBottom: 24 }}>
            <Text style={styles.headingTwo}>Формат</Text>
            <View style={{ flexDirection: "row" }}>
              <ButtonRadio text={"JPG"} width={76} />
              <ButtonRadio text={"PNG"} width={76} />
              <ButtonRadio text={"TIFF"} width={76} />
              <ButtonRadio text={"RAW"} width={76} />
            </View>
          </View>
          <Text style={styles.headingTwo}>Постобраотка</Text>
          <View style={{ flexDirection: "row" }}>
            <ButtonRadio text={"Удаление дефектов"} width={188} />
            <ButtonRadio text={"Цветокоррекция"} width={132} />
          </View>
          <View style={{ marginTop: 8, marginBottom: 100 }}>
            <ButtonRadio text={"Удаление фона"} width={188} />
          </View>
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
              <Button text={"Завершить"} width={132} ssr={'Serch'} />
            </View>
          </Shadow>
        </View>
      </ScrollView>
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
