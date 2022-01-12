import React from "react";
import { StyleSheet, View, Text } from "react-native";
import StartPage from "./screensAuth/StartPage";
import LogIn from "./screensAuth/LogIn";
import SignUp from "./screensAuth/SignUp";
import SignUpNext from "./screensAuth/SignUpNext";

import Profil from "./assets/profile.svg";
import Calenda from "./assets/calendarMenu.svg";
import Dm from "./assets/dm.svg";
import Ord from "./assets/orderMenu.svg";
import Search from "./assets/searchMenu.svg";

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
import Order from "./screens/Order";

import Message from "./screens/Message";

import Calendar from "./screens/Calendar";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AuthProvider } from "./context/AuthContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator 
        // initialRouteName="App"
        >
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
          <Stack.Group navigationKey={"GetOrder"}>
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
            <Stack.Screen
            name="Order"
            component={Order}
            options={{
              headerShown: false,
            }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

function App() {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarShowLabel: false, tabBarStyle: { height: 65 } }}
      initialRouteName="Profile"
      inactiveColor="#3e2465"
      barStyle={styles.bar}
    >
      <Tab.Screen
        name="Serch"
        component={Serch}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: focused?60:65,
                width: 65,
                backgroundColor: focused?'#7D94DF':'',
                borderRadius:focused?5:0,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Search style={{ maxWidth: 32, maxHeight: 32 }} />
              <Text
                style={{
                  fontSize: 12,
                  color: "#273C83",
                  fontFamily: "Roboto_400Regular",
                }}
              >
                Поиск
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
            style={{
              height: focused?60:65,
              width: 65,
              backgroundColor: focused?'#7D94DF':'',
              borderRadius:focused?5:0,
              alignItems: "center",
              justifyContent: "center",
            }}
            >
              <Ord style={{ maxWidth: 32, maxHeight: 32 }} />
              <Text
                style={{
                  fontSize: 12,
                  color: "#273C83",
                  fontFamily: "Roboto_400Regular",
                }}
              >
                Заказы
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
            style={{
              height: focused?60:65,
              width: 65,
              backgroundColor: focused?'#7D94DF':'',
              borderRadius:focused?5:0,
              alignItems: "center",
              justifyContent: "center",
            }}
            >
              <Dm style={{ maxWidth: 32, maxHeight: 32 }} />
              <Text
                style={{
                  fontSize: 12,
                  color: "#273C83",
                  fontFamily: "Roboto_400Regular",
                  marginTop: 5,
                }}
              >
                Диалоги
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: focused ? 60 : 65,
                width: 65,
                backgroundColor: focused ? "#7D94DF" : "",
                borderRadius: focused ? 5 : 0,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Calenda style={{ maxWidth: 32, maxHeight: 32 }} />
              <Text
                style={{
                  fontSize: 12,
                  color: "#273C83",
                  fontFamily: "Roboto_400Regular",
                }}
              >
                Календарь
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: focused ? 60 : 65,
                width: 65,
                backgroundColor: focused ? "#7D94DF" : "",
                borderRadius: focused ? 5 : 0,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Profil style={{ maxWidth: 24, maxHeight: 32 }} />
              <Text
                style={{
                  fontSize: 12,
                  color: "#273C83",
                  fontFamily: "Roboto_400Regular",
                }}
              >
                Профиль
              </Text>
            </View>
          ),
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
