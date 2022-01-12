import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Bar from "../components/bar";
import Header from "../components/header";
import Button from "../components/button";
import { Shadow } from "react-native-shadow-2";

import RadioButtonRN from "radio-buttons-react-native";



export default function OrderRegistration({ navigation, route }) {
  const [Pageid, setPageid] = useState(0);
  const data = [
    {
      label: "Фотосессия",
      id: 1,
    },
    {
      label: "Репортаж",
      id: 2,
    },
    {
      label: "Предметная",
      id: 3,
    },
    {
      label: "Контентная",
      id: 4,
    },
    {
      label: "Другое",
      id: 5,
    },
  ];

  function SSR(id) {
    switch (id) {
      case 1:
        return "Photosession";
      case 2:
        return "Reportage";
      case 3:
        return "Subject";
      case 4:
        return "Subject";
      case 5:
        return"Subject";
      case 0:
        return "";
    }
  }

  function GetType(id) {
    switch (id) {
      case 1:
        return {type:"Фотосессия"};
      case 2:
        return {type:"Репортаж"};
      case 3:
        return {type:"Предметная"};
      case 4:
        return {type:"Контентная"};
      case 5:
        return {type:"Другое"};
      case 0:
        return "";
    }
  }

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header text={"Оформление заказа"} back={true} rightIcon={true} />
      <View style={styles.content}>
        <Bar hidden={true} width={0.5}/>
        <Text style={styles.heading}>Выберите вид съемки</Text>
      </View>
      <RadioButtonRN
        data={data}
        selectedBtn={(e) => setPageid(e.id)}
        animationTypes={["pulse"]}
        box={false}
        boxStyle={styles.radio}
        textStyle={styles.text}
        deactiveColor={"#7D94DF"}
        activeColor={"#7D94DF"}
        textColor={"black"}
      />
      <View style={{ position: "absolute", bottom: 30, right: 16 }}>
        <Shadow startColor={"rgba(39,60,131,0.1)"}>
          <View style={styles.button}>
            <Button text={"Далее"} width={132} ssr={SSR(Pageid)} apiData={{...route.params, ...GetType(Pageid)}}/>
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
    marginBottom: 36,
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
  radio: {
    backgroundColor: "white",
    marginBottom: 4,
  },
});
