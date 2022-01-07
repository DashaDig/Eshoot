import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CalendarSvg from "../assets/calendar.svg";
import Clock from "../assets/clock.svg";
import Geotag from "../assets/geotag.svg";

let screenW = Dimensions.get("window").width;

export default function Card(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <View style={{ flexDirection: "row", marginTop: 8, marginLeft: 16 }}>
        <Image source={require("../assets/avatarS.png")} style={styles.ava} />
        <View>
          <Text style={styles.text}>Дигтяренко Дарья</Text>
          <Text style={styles.tegs}>Фотосессия Портретная</Text>
        </View>
      </View>
      <View style={{ marginLeft: 16, marginTop: 16 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <CalendarSvg style={styles.svg} />
          <Text style={[styles.text, { marginLeft: 8 }]}>30.11.2021</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Clock style={styles.svg} />
          <Text style={[styles.text, { marginLeft: 8 }]}> 4:09 - 12:34</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Geotag style={styles.svg} />
          <Text style={[styles.text, { marginLeft: 8 }]}>
            Екатеринбург, ул. Малышева, д. 123, кв 123
          </Text>
        </View>
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
  content: {
    width: "auto",
    height: 184,
    borderWidth: 1,
    
    borderColor:"#C4C4C4",
    borderRadius:5,
  },
  ava: {
    width: 46,
    height: 46,
    borderRadius: 5,
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
    paddingTop: 4,
  },
  tegs: {
    fontSize: 12,
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
  },
  svg: {
    minWidth: 20,
    maxWidth: 20,
    minHeight: 20,
    maxHeight: 20,
    top: 2,
  },
});
