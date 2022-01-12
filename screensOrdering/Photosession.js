import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Bar from "../components/bar";
import Header from "../components/header";
import Button from "../components/button";
import { Shadow } from "react-native-shadow-2";

import RadioButtonRN from "radio-buttons-react-native";

export default function Photosession({ route, navigation }) {
  const [Pageid, setPageid] = useState(0);
  const data = [
    {
      label: "Портретная",
      id: 1,
    },
    {
      label: "Love story",
      id: 2,
    },
    {
      label: "Семейная",
      id: 3,
    },
    {
      label: "Детская",
      id: 4,
    },
    {
      label: "Креативная",
      id: 5,
    },
    {
      label: "Для беременных",
      id: 6,
    },
    {
      label: "Другое",
      id: 7,
    },
  ];

  function GetType(id) {
    switch (id) {
      case 1:
        return { subtype: "Портретная" };
      case 2:
        return { subtype: "Love story" };
      case 3:
        return { subtype: "Семейная" };
      case 4:
        return { subtype: "Детская" };
      case 5:
        return { subtype: "Креативная" };
      case 6:
        return { subtype: "Для беременных" };
      case 7:
        return { subtype: "Другое" };
      case 0:
        return "";
    }
  }

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header text={"Оформление заказа"} back={true} rightIcon={true} />
      <View style={styles.content}>
        <Bar width={0.3}/>
        <Text style={styles.heading}>Какая фотосессия вам нужна?</Text>
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
      <View style={{ position: "absolute", bottom: 30, left: 16 }}>
        <Shadow startColor={"rgba(39,60,131,0.1)"}>
          <View style={styles.button}>
            <Button text={"Назад"} width={132} back={true} />
          </View>
        </Shadow>
      </View>
      <View style={{ position: "absolute", bottom: 30, right: 16 }}>
        <Shadow startColor={"rgba(39,60,131,0.1)"}>
          <View style={styles.button}>
            <Button text={"Далее"} width={132} ssr={"Date"} apiData={{...route.params, ...GetType(Pageid)}}/>
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
  buttonBack: {
    marginBottom: 0,
    height: 40,
    bottom: 17,
  },
  radio: {
    backgroundColor: "white",
    marginBottom: 4,
  },
});
