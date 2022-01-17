import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  View,
  Text,
} from "react-native";
import Header from "../components/header";
import Info from "../components/userInfo";
import Input from "../components/input";
import Button from "../components/button";
import { Shadow } from "react-native-shadow-2";
import { useAuth } from "../context/AuthContext";

let screenW = Dimensions.get("window").width;

export default function Order({ route, navigation }) {
  const { currentUserInfo } = useAuth();
  const order = route.params.order;
  const person = route.params.person;
  const [shouldShow, setShouldShow] = useState(false);
  const [shouldShowNotes, setShouldShowNotes] = useState(false);
  const [listOfInfo] = React.useState([
    { id: 0, head: "Тип", text: order.type + ": " + order.subtype },
    { id: 1, head: "Дата", text: order.date.split("-").reverse().join(".") },
    {
      id: 2,
      head: "Время",
      text: order.start_time.slice(0, 5) + " - " + order.end_time.slice(0, 5),
    },
    {
      id: 3,
      head: "Дэдлайн сдачи",
      text: order.deadline.slice(0, 10).split("-").reverse().join("."),
    },
    {
      id: 4,
      head: "Локация",
      text: order.address,
    },
    {
      id: 5,
      head: "Цена",
      text: order.price,
    },
  ]);

  const [listOfDemand] = React.useState([
    { id: 0, head: "Количество кадров", text: order.number_of_frames },
    { id: 1, head: "Ориентация", text: order.orientation },
    // { id: 2, head: "Разрешение", text: "2400×1600 px" },
    { id: 2, head: "Пропорции", text: order.proportions },
    { id: 3, head: "Формат", text: order.file_format },
    {
      id: 4,
      head: "Постобработка",
      text: order.post_processing,
    },
  ]);

  // const [listOfNotes] = React.useState([
  //   {
  //     id: 0,
  //     head: "Необходимая техника в аренду",
  //     text: "https://rentacamera.ru/products/canon-8-15mm-f-4-0l-fisheye-usm",
  //   },
  //   {
  //     id: 1,
  //     head: "Нужно взять на съемку",
  //     text: "2 синхронизатора, софтбох 50 на 50",
  //   },
  //   {
  //     id: 2,
  //     head: "Дресскод или стиль одежды",
  //     text: "Деловая, в синих тонах",
  //   },
  // ]);

  
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header text={"Заказ№ "+ order.id.slice(0, 10)} back={true} rightIcon={true} />
      <ScrollView>
        <View style={styles.conteiner}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../assets/avatar.png")}
                style={styles.avatar}
              />
              <Text style={[styles.textName, { marginLeft: 16 }]}>
                {person.last_name} {person.first_name}
                {"\n"}
                {person.middle_name}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 12,
                fontStyle: "normal",
                fontFamily: "Roboto_400Regular",
                top: 5,
                textAlign: "right",
              }}
            >
              Заказ от:{"\n"}
              {order.created_date.slice(0, 10).split("-").reverse().join(".")}
            </Text>
          </View>
          <View style={{ marginTop: 16, marginBottom: 16 }}>
            {listOfInfo.map((item) => (
              <Info text={item.head} value={item.text} />
            ))}
            {/* <View>
              <Text style={styles.textH}>Цена</Text>
              <View style={{ flexDirection: "row" }}>
                <Input
                  text={"0 руб"}
                  keyboard={"numeric"}
                  width={(screenW - 32) / 2}
                />
                <Button
                  text={"Предложить другую"}
                  width={(screenW - 32) / 2}
                  marginTop={false}
                />
              </View>
            </View> */}
            <View style={{ marginBottom: 16 }}>
              <Text style={styles.textH}>Референсы</Text>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{
                    uri: "https://4tololo.ru/sites/default/files/images/20163004154523.jpg?itok=8flfXa-P",
                  }}
                  style={styles.photos}
                />
                <Image
                  source={{
                    uri: "https://sib.fm/storage/article/April2021/a9BjF5GjLE26Aw8gYvQ0.jpeg",
                  }}
                  style={styles.photos}
                />
                <Image
                  source={{
                    uri: "https://ss.metronews.ru/userfiles/materials/159/1599953/858x540_909a8133.jpg",
                  }}
                  style={styles.photos}
                />
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => setShouldShow(!shouldShow)}
                style={styles.button}
              >
                <Text style={styles.text}>Технические требования</Text>
              </TouchableOpacity>
              {shouldShow
                ? listOfDemand.map((item) => (
                    <Info text={item.head} value={item.text} />
                  ))
                : null}
            </View>
            {/* <View>
              <TouchableOpacity
                onPress={() => setShouldShowNotes(!shouldShowNotes)}
                style={styles.button}
              >
                <Text style={styles.text}>Заметки по заказу</Text>
              </TouchableOpacity>
              {shouldShowNotes
                ? listOfNotes.map((item) => (
                    <Info text={item.head} value={item.text} />
                  ))
                : null}
            </View> */}
          </View>
        </View>
        <View style={{ marginTop: 63 }}>
          <View style={{ position: "absolute", bottom: 30, left: 16 }}>
            <Shadow startColor={"rgba(39,60,131,0.1)"}>
              <View style={styles.DownButton}>
                <Button text={"Отклонить"} width={132} back={true} />
              </View>
            </Shadow>
          </View>
          {order.customer_id === currentUserInfo.id ? (
            <></>
          ) : (
            <View style={{ position: "absolute", bottom: 30, right: 16 }}>
              <Shadow startColor={"rgba(39,60,131,0.1)"}>
                <View style={styles.DownButton}>
                  <Button text={"Принять"} width={132} ssr={"Date"} />
                </View>
              </Shadow>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    paddingTop: 24,
    paddingRight: 16,
    paddingLeft: 16,
  },
  avatar: {
    width: 46,
    height: 46,
  },
  textH: {
    color: "#7B7B7B",
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: "Roboto_500Medium",
    marginBottom: 7,
  },
  textName: {
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
  },
  text: {
    color: "#fff",
    fontStyle: "normal",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    paddingVertical: 10,
    letterSpacing: 0.2,
  },
  photos: {
    height: 90,
    width: 90,
    borderRadius: 5,
    marginRight: 9,
  },
  button: {
    height: 42,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#8A9EE2",
    marginBottom: 16,
  },
  DownButton: {
    marginBottom: 0,
    height: 40,
    bottom: 17,
  },
});
