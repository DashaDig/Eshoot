// import * as React from "react";
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MainStack from "./navigate";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

const API_URL = "http://192.168.1.2:8080";
// const cookie = require("cross-cookie");

const Stack = createStackNavigator();

export default function App() {
  fetch(API_URL+'/users/customers/')
  .then((response) => response.json())
  .then(json => console.log(json))
 

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
