import React from "react";
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

const FirstRoute = () => (
  <View style={styles.conteiner}>
    {/* <Card/>
    <Card/>
    <Card/> */}
  </View>
);

const SecondRoute = () => (
  <View style={styles.conteiner}>
    <Card/>
    {/* <Card/>
    <Card/> */}
  </View>
);

const ThirdRoute = () => (
  <View style={styles.conteiner}>
    {/* <Card/>
    <Card/>
    <Card/> */}
  </View>
);

const initialLayout = { width: Dimensions.get("window").width };

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

export default function SerchPage() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "В работе" },
    { key: "second", title: "Не согласовано" },
    { key: "third", title: "Архив" },
  ]);
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
