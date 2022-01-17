import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  Dimensions,
  Text,
  StatusBar,
} from "react-native";
import Header from "../components/header";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import Card from "../components/orderCard";
import { useAuth } from "../context/AuthContext";

const initialLayout = { width: Dimensions.get("window").width };

export default function SerchPage() {
  const [orders, setOrders] = useState();
  const [loadingOrders, setLoadingOrders] = useState(true);
  const { currentUser, currentUserInfo, loading } = useAuth();
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const data = await fetch(
          "http://192.168.1.8:8080/users/" + currentUserInfo.id + "/orders",
          {
            headers: {
              Authorization: "Bearer " + currentUser,
            },
          }
        );
        const text = await data.json();
        setOrders(text);
        setLoadingOrders(false);
      } catch {}
    };
    if (currentUserInfo.id) {
      fetchOrder();
    }
  }, [currentUserInfo]);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "В работе" },
    { key: "second", title: "Не согласовано" },
    { key: "third", title: "Архив" },
  ]);

  const FirstRoute = () => (
    <View style={styles.container}>
      {loadingOrders || loading ? (
        <></>
      ) : (
        orders.filter((order) => order.status === "in_progress"||order.status === "waiting").map((order) => (
          <Card
            order={order}
            key={order.id}
          />
        ))
      )}
    </View>
  );

  const SecondRoute = () => (
    <View style={styles.container}>
      {loadingOrders || loading ? (
        <></>
      ) : (
        orders.filter((order) => order.status === "new").map((order) => (
          <Card
            order={order}
            key={order.id}
          />
        ))
      )}
    </View>
  );

  const ThirdRoute = () => (
    <View style={styles.container}>
      {loadingOrders || loading ? (
        <></>
      ) : (
        orders.filter((order) => order.status === "closed"||order.status === "canсelled").map((order) => (
          <Card
            order={order}
            key={order.id}
          />
        ))
      )}
    </View>
  );
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      renderLabel={({ route }) => (
        <Text numberOfLines={1} style={styles.buttonText}>
          {route.title}
        </Text>
      )}
      indicatorStyle={{ backgroundColor: "white" }}
      style={styles.barButton}
      tabStyle={{ width: "auto" }}
    />
  );

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header text={"Заказы"} />
      <TabView
        navigationState={{ index, routes }}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  conteinera: {
    paddingTop: 16,
    paddingRight: 16,
    paddingLeft: 16,
  },
  barButton: {
    backgroundColor: "white",
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#7D94DF",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  serch: {
    flex: 1,
    flexDirection: "row",
  },
  filter: {
    top: 4,
  },
  container: {
    marginTop: 24,
  },
});
