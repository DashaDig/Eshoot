import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainStack from "./navigate";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <MainStack />;
  }
}
