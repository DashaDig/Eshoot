import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { useNavigation } from "@react-navigation/native";

export default function Header(props) {
  return (
    <Shadow startColor={"rgba(39,60,131,0.1)"}>
      <View style={styles.header}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Back isBackNeed={props.back} />
          <Text style={styles.heading}>{props.text}</Text>
        </View>
        <Right isRightNeed={props.rightIcon} type={props.type}/>
      </View>
    </Shadow>
  );
}

function Back(props) {
  const isBackNeed = props.isBackNeed;
  const navigation = useNavigation();
  if (isBackNeed) {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require("../assets/back.png")}
          style={styles.settingsBack}
        />
      </TouchableOpacity>
    );
  }
  return false;
}

function Right(props) {
  const isRightNeed = props.isRightNeed;
  if (!isRightNeed) {
    return (
      <Image
        source={
          props.type === "Profile"
            ? require("../assets/settings.png")
            : require("../assets/bell.png")
        }
        style={props.type === "Profile" ? styles.settings : styles.settingsbell}
      />
    );
  }
  return false;
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  heading: {
    color: "#273C83",
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: "Roboto_500Medium",
    height: 38,
    paddingLeft: 16,
  },
  settings: {
    right: 12,
    bottom: 9,
  },
  settingsbell: {
    right: 18,
    bottom: 15,
  },
  settingsBack: {
    left: 20,
    marginRight: 24,
    top: 2,
  },
});
