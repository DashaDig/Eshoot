import React, { useState, useEffect } from "react";
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
import { useAuth } from "../context/AuthContext";

let screenW = Dimensions.get("window").width;

export default function Card({ order }) {
  const navigation = useNavigation();

  const [otherMen, setOtherMen] = useState();

  const [loading, setLoading] = useState(true);
  const { currentUser, currentUserInfo } = useAuth();

  useEffect(() => {
    const fetchName = async () => {
      try {
        const data = await fetch(
          `http://192.168.1.8:8080/users/${
            currentUserInfo.role === "Customer" ? "photographers" : "customers"
          }/${
            currentUserInfo.role === "Customer"
              ? order.performer_id
              : order.customer_id
          }`,
          {
            headers: {
              Authorization: "Bearer " + currentUser,
            },
          }
        );
        if (data.ok) {
          const text = await data.json();
          setOtherMen(text);
          setLoading(false);
        }
      } catch {}
    };
    fetchName();
  }, []);
  return (
    <View>
      {loading ? (
        <></>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate("Order", {order:order, person:otherMen})}>
          <View style={styles.content}>
            <View
              style={{ flexDirection: "row", marginTop: 8, marginLeft: 16 }}
            >
              <Image
                source={require("../assets/avatarS.png")}
                style={styles.ava}
              />
              <View>
                <Text style={styles.text}>
                  {otherMen.last_name} {otherMen.first_name}
                </Text>
                <Text style={styles.tegs}>
                  {order.type} {order.subtype}
                </Text>
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
                <Text style={[styles.text, { marginLeft: 8 }]}>
                  {order.date.split("-").reverse().join(".")}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <Clock style={styles.svg} />
                <Text style={[styles.text, { marginLeft: 8 }]}>
                  {order.start_time.slice(0, 5)}
                  {" - "}
                  {order.end_time.slice(0, 5)}
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Geotag style={styles.svg} />
                <Text style={[styles.text, { marginLeft: 8 }]}>
                  {order.address}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

var styles = StyleSheet.create({
  content: {
    width: "auto",
    height: 184,
    borderWidth: 1,

    borderColor: "#C4C4C4",
    borderRadius: 5,
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
