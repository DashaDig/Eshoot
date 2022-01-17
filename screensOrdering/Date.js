import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Bar from "../components/bar";
import Header from "../components/header";
import Calendar from "../components/buttonDate";
import Button from "../components/button";
import { Shadow } from "react-native-shadow-2";
import Input from "../components/inputTime";
import moment from "moment";

export default function Date({ route, navigation }) {
  const [hourStart, setHourStart] = React.useState("00");
  const [minStart, setMinStart] = React.useState("00");
  const [hourEnd, setHourEnd] = React.useState("00");
  const [minEnd, setMinEnd] = React.useState("00");
  const onChangeHourTime = (hour) => {
    setHourStart(hour);
  };
  const onChangeMinTime = (min) => {
    setMinStart(min);
  };
  const onChangeHourTimeE = (hour) => {
    setHourEnd(hour);
  };
  const onChangeMinTimeE = (min) => {
    setMinEnd(min);
  };
  const startTime = hourStart + ':' + minStart + ":00.241Z";
  const endTime = hourEnd + ':' + minEnd + ":00.241Z";

  const [dateStart, setDateStart] = React.useState(moment().format('YYYY-MM-DD'));
  const [dateEnd, setDateEnd] = React.useState(moment().format('YYYY-MM-DD'));
  const onChangeDateStart = (date) => {
    setDateStart(date);
  };
  const onChangeDateEnd= (date) => {
    setDateEnd(date);
  };
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header text={"Оформление заказа"} back={true} rightIcon={true} />
      <View style={styles.content}>
        <Bar width={0.7}/>
        <Text style={styles.heading}>Когда планируется съемка?</Text>
        <Calendar onChangeData={onChangeDateStart} />
        <View style={{flexDirection:'row', alignItems:'center', marginTop:16, marginBottom:24}}>
            <Input width={104} onChangeHour={onChangeHourTime} onChangeMin={onChangeMinTime}/>
            <Text style={[styles.text, {marginLeft:24}]}>–</Text>
            <Input width={104} onChangeHour={onChangeHourTimeE} onChangeMin={onChangeMinTimeE}/>
        </View>
        <Text style={styles.headingTwo}>Крайняя дата сдачи фотографий</Text>
        <Calendar onChangeData={onChangeDateEnd}/>
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
            <Button text={"Далее"} width={132} ssr={"Requirements"} apiData={{...route.params, startTime:startTime, endTime:endTime, dateStart:dateStart, dateEnd:dateEnd}}/>
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
