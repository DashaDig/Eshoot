import React, { useEffect, useState } from "react";
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

  fetch('http://192.168.1.2:8080/users/photographers/')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
  
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
