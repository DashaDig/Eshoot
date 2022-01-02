import React from "react";
import { StyleSheet, Image } from "react-native";
import StartPage from "./screensAuth/StartPage";
import LogIn from "./screensAuth/LogIn";
import SignUp from "./screensAuth/SignUp";
import SignUpNext from "./screensAuth/SignUpNext";
import Profile from "./screens/Profile";
import Serch from "./screens/Serch";
import Orders from "./screens/Orders";
import Message from "./screens/Message";
import Calendar from "./screens/Calendar";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={StartPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUpNext"
          component={SignUpNext}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="App"
          component={App}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <Tab.Navigator initialRouteName="Profile" barStyle={styles.bar}>
      <Tab.Screen
        name="Serch"
        component={Serch}
        options={{
          tabBarLabel: "Поиск",
        }}
      />
      <Tab.Screen name="Orders" component={Orders} options={{
          tabBarLabel: "Заказы",
        }} />
      <Tab.Screen name="Message" component={Message} options={{
          tabBarLabel: "Диалоги",
        }} />
      <Tab.Screen name="Calendar" component={Calendar} options={{
          tabBarLabel: "Календарь",
        }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: "Профиль",
        }}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "white",
  },
});
