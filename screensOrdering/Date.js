import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Bar from "../components/bar";
import Header from "../components/header";
import Calendar from "../components/buttonDate";
import Button from "../components/button";
import { Shadow } from "react-native-shadow-2";
import Input from "../components/inputTime";

export default function Date({ route, navigation }) {
  // console.log("Получаем: ", route.params);
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header text={"Оформление заказа"} back={true} rightIcon={true} />
      <View style={styles.content}>
        <Bar width={0.7}/>
        <Text style={styles.heading}>Когда планируется съемка?</Text>
        <Calendar />
        <View style={{flexDirection:'row', alignItems:'center', marginTop:16, marginBottom:24}}>
            <Text style={styles.text}>С</Text>
            <Input width={104} />
            <Text style={[styles.text, {marginLeft:24}]}>По</Text>
            <Input width={104} />
        </View>
        <Text style={styles.headingTwo}>Крайняя дата сдачи фотографий</Text>
        <Calendar />
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
            <Button text={"Далее"} width={132} ssr={"Requirements"} />
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
  headingTwo:{
    fontSize: 18,
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
    marginRight:16
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
