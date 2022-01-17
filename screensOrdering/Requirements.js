import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import Bar from "../components/bar";
import Header from "../components/header";
import Input from "../components/input";
import Button from "../components/button";
import ButtonRadio from "../components/buttonRadio";
import { Shadow } from "react-native-shadow-2";

import { useAuth } from "../context/AuthContext";

export default function Requirements({ route, navigation }) {
  const { currentUser } = useAuth();

  const [numberOfFrame, setNumberOfFrame] = React.useState("");
  const onChangeNumberOfFrame = (number) => {
    setNumberOfFrame(number);
  };
  const [orientation, setOrientation] = React.useState({});
  const onChangeOrientation = (number) => {
    setOrientation((prev) => {
      return { ...prev, [number.name]: number.isChecked };
    });
  };

  const [proportions, setProportions] = React.useState({});
  const onChangeProportions = (number) => {
    setProportions((prev) => {
      return { ...prev, [number.name]: number.isChecked };
    });
  };

  const [fileFormat, setFileFormat] = React.useState({});
  const onChangeFileFormat = (number) => {
    setFileFormat((prev) => {
      return { ...prev, [number.name]: number.isChecked };
    });
  };

  const [postProcessing, setPostProcessing] = React.useState({});
  const onChangePostProcessing = (number) => {
    setPostProcessing((prev) => {
      return { ...prev, [number.name]: number.isChecked };
    });
  };

  function objectToString(elem) {
    let elemnts = [];
    for (let key in elem) {
      if (elem[key]) elemnts.push(key);
    }
    return elemnts.join(", ");
  }

  async function handleSubmit(e) {
    const paramsInfo = {
      type: route.params.type,
      subtype: route.params.subtype,
      description: "Описание отсутствует",
      date: route.params.dateStart,
      start_time: route.params.startTime,
      end_time: route.params.endTime,
      address: "Локация отсутствует",
      price: 0,
      deadline: new Date(route.params.dateEnd).toISOString(),
      number_of_frames: numberOfFrame,
      orientation: objectToString(orientation),
      proportions: objectToString(proportions),
      file_format: objectToString(fileFormat),
      post_processing: objectToString(postProcessing),
    };
    const postConfig = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + currentUser,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paramsInfo),
    };
    
    try {
      const response = await fetch(
        `http://192.168.1.8:8080/users/${route.params.perfomerId}/orders`,
        postConfig
      );
      const newOrder = await response.json();

      if (!response.ok) {
      }
      navigation.navigate("Orders");
    } catch (error) {
    }
  }

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header text={"Оформление заказа"} back={true} rightIcon={true} />
      <View style={styles.content}>
        <Bar width={1} />
        <Text style={styles.heading}>Какие требования{"\n"}к фотографии?</Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <View style={{ marginBottom: 24 }}>
            <Text style={styles.headingTwo}>Общее количество кадров</Text>
            <Input
              width={132}
              keyboard={"numeric"}
              onChangeData={onChangeNumberOfFrame}
            />
          </View>
          <View style={{ marginBottom: 24 }}>
            <Text style={styles.headingTwo}>Ориентация</Text>
            <View style={{ flexDirection: "row" }}>
              <ButtonRadio
                text={"Альбомная"}
                width={132}
                onChangeData={onChangeOrientation}
              />
              <ButtonRadio
                text={"Книжная"}
                width={132}
                onChangeData={onChangeOrientation}
              />
            </View>
          </View>
          <View style={{ marginBottom: 24 }}>
            <Text style={styles.headingTwo}>Пропорции</Text>
            <View style={{ flexDirection: "row" }}>
              <ButtonRadio
                text={"1×1"}
                width={76}
                onChangeData={onChangeProportions}
              />
              <ButtonRadio
                text={"2×3"}
                width={76}
                onChangeData={onChangeProportions}
              />
              <ButtonRadio
                text={"3×4"}
                width={76}
                onChangeData={onChangeProportions}
              />
              <ButtonRadio
                text={"16×9"}
                width={76}
                onChangeData={onChangeProportions}
              />
            </View>
          </View>
          {/* <View style={{ marginBottom: 24 }}>
            <Text style={styles.headingTwo}>Разрешение</Text>
            <View style={{flexDirection:'row'}}>
              <View>
                <Text style={styles.text}>Ширина</Text>
                <View style={{flexDirection:'row', alignItems:'flex-end'}}>
                  <Input width={132} keyboard={"numeric"} />
                  <Text style={[styles.text, {marginLeft:8}]}>px</Text>
                </View>
              </View>
              <View style={{marginLeft:13}}>
                <Text style={styles.text}>Высота</Text>
                <View style={{flexDirection:'row', alignItems:'flex-end'}}>
                  <Input width={132} keyboard={"numeric"} />
                  <Text style={[styles.text, {marginLeft:8}]}>px</Text>
                </View>
              </View>
            </View>
          </View> */}
          <View style={{ marginBottom: 24 }}>
            <Text style={styles.headingTwo}>Формат</Text>
            <View style={{ flexDirection: "row" }}>
              <ButtonRadio
                text={"JPG"}
                width={76}
                onChangeData={onChangeFileFormat}
              />
              <ButtonRadio
                text={"PNG"}
                width={76}
                onChangeData={onChangeFileFormat}
              />
              <ButtonRadio
                text={"TIFF"}
                width={76}
                onChangeData={onChangeFileFormat}
              />
              <ButtonRadio
                text={"RAW"}
                width={76}
                onChangeData={onChangeFileFormat}
              />
            </View>
          </View>
          <Text style={styles.headingTwo}>Постобраотка</Text>
          <View style={{ flexDirection: "row" }}>
            <ButtonRadio
              text={"Удаление дефектов"}
              width={188}
              onChangeData={onChangePostProcessing}
            />
            <ButtonRadio
              text={"Цветокоррекция"}
              width={132}
              onChangeData={onChangePostProcessing}
            />
          </View>
          <View style={{ marginTop: 8, marginBottom: 100 }}>
            <ButtonRadio
              text={"Удаление фона"}
              width={188}
              onChangeData={onChangePostProcessing}
            />
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
              <Button
                text={"Завершить"}
                width={132}
                submit={true}
                handleSubmit={handleSubmit}
                // apiData={{
                //   ...route.params,
                //   numberOfFrame: numberOfFrame,
                //   orientation: orientation,
                //   proportions: proportions,
                //   fileFormat:fileFormat,
                //   postProcessing:postProcessing
                // }}
              />
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
