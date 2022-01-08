import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainStack from "./navigate";
import AppLoading from "expo-app-loading";

import { useAuth } from "./context/AuthContext";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

const API_URL = "http://localhost:8080";

const Stack = createStackNavigator();


export default function App() {
  
  let [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return <MainStack />;
  }
}
