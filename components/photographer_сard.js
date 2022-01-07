import React from "react";
import { StyleSheet, Dimensions, View, Image, Text, TouchableOpacity } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { useNavigation } from '@react-navigation/native';

let screenW = Dimensions.get("window").width;

export default function Photographer(props) {
  const navigation = useNavigation();
  return (
    <View style={{marginBottom: 8,}}>
      <Shadow startColor={"rgba(39,60,131,0.1)"}>
        <TouchableOpacity onPress={() => navigation.navigate('SerchCustomer', {surname:'Кочергин', name:'Константин', patronymic:'Анатольевич'})} style={styles.block}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image
              source={require("../assets/avatar.png")}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.fio}>Кочергин Константин</Text>
              <Text style={styles.tags}>
                #Портретная, #Свадебная, еще 5 жанров
              </Text>
            </View>
          </View>
          <Text style={styles.info}>
            Информация о том что может о себе человек из сферы фотографии
            рассказать, умещенные в три абзаца
          </Text>
          <View style={{ display: "flex", flexDirection: "row", marginTop: 16 }}>
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
        </TouchableOpacity>
      </Shadow>
    </View>
  );
}

var styles = StyleSheet.create({
  block: {
    width: screenW - 32,
    height: 248,
    borderRadius: 5,
    paddingTop: 12,
    paddingHorizontal: 20,
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 40,
    marginRight: 8,
  },
  fio: {
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
    paddingTop: 5,
  },
  info:{
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
    marginTop: 12,
  },
  tags: {
    fontSize: 12,
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
    color: "#7D94DF",
  },
  photos: {
    height: 90,
    width: 90,
    borderRadius: 5,
    marginRight: 9,
  },
});
