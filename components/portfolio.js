import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";


export default function Portfolio(props) {
  const navigation = useNavigation();
  return (
    <View style={{ marginVertical: 8 }}>
      <TouchableOpacity>
        <Image
          source={{
            uri: "https://4tololo.ru/sites/default/files/images/20163004154523.jpg?itok=8flfXa-P",
          }}
          style={styles.photos}
        />
        <LinearGradient
          colors={["rgba(39,60,131, 0.6)", "rgba(125,148,223, 0.6)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.glass}
        >
          {/* <Text>Портрет</Text> */}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

var styles = StyleSheet.create({
  photos: {
    height: 95,
    width: 95,
    borderRadius: 5,
    marginRight: 9,
    left: 5,
  },
  glass: {
    width: 105,
    height: 30,
    bottom:23,
    borderRadius: 5,
  },
  text: {
    fontSize: 12,
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
  },
});
