import React from "react";
import { StyleSheet, Image } from "react-native";
import StartPage from "./screensAuth/StartPage";
import LogIn from "./screensAuth/LogIn";
import SignUp from "./screensAuth/SignUp";
import SignUpNext from "./screensAuth/SignUpNext";

import Profile from "./screens/Profile";

import Serch from "./screens/Serch";
import SerchCustomer from "./screens/SerchCustomer";
import OrderRegistration from "./screensOrdering/OrderRegistration";
import Photosession from "./screensOrdering/Photosession";
import Reportage from "./screensOrdering/Reportage";
import Subject from "./screensOrdering/Subject";
import Date from "./screensOrdering/Date";
import Requirements from "./screensOrdering/Requirements";

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
        <Stack.Screen
          name="SerchCustomer"
          component={SerchCustomer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Group navigationKey={'GetOrder'}>
          <Stack.Screen
          name="OrderRegistration"
          component={OrderRegistration}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Photosession"
          component={Photosession}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Reportage"
          component={Reportage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Subject"
          component={Subject}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Date"
          component={Date}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Requirements"
          component={Requirements}
          options={{
            headerShown: false,
          }}
        />
        </Stack.Group>
        
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
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarLabel: "Заказы",
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarLabel: "Диалоги",
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: "Календарь",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Профиль",
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "white",
  },
});
