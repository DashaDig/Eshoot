import * as React from "react";
import { StyleSheet, Dimensions, ScrollView, Text, View } from "react-native";
import Header from "../components/header";
import Users from "../components/headOfProfile";
import About from "../components/aboutPerson";
import Portfolio from "../components/portfolio";
import Button from "../components/button";

let screenW = Dimensions.get("window").width;

export default function Customer({ route, navigation }) {
  const { photographer } = route.params;
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header text={photographer.middle_name + " " + photographer.first_name} back={true} />
      <View style={{ flex: 10 }}>
        <ScrollView>
          <Users surnameC={photographer.middle_name} nameC={photographer.first_name} patronymicC={photographer.last_name} />
          <View style={styles.content}>
            <Text style={styles.tag}>
              #Фотосессия #Репортаж #Предметная #Контентная #Семейная #Детская
              #Детский праздник #Свадьба
            </Text>
            <Text style={styles.heading}>О себе</Text>
            <About />
            <Text style={styles.heading}>Портфолио</Text>
            <Portfolio />
            <Text style={styles.heading}>Заказы</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.button}>
        <Button
          text={"Все отзывы"}
          width={(screenW - 48) / 3}
          marginRight={8}
          ssr={'SerchCustomer'}
        />
        <Button
          text={"Перейти в лс"}
          width={(screenW - 48) / 3}
          marginRight={8}
          ssr={'SignUpNext'}
        />
        <Button
          text={"Заказать"}
          width={(screenW - 48) / 3}
          ssr= {'OrderRegistration'}
          apiData={{perfomerId:photographer.id}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginLeft: 16,
    alignItems: "flex-start",
  },
  tag: {
    fontSize: 12,
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
    lineHeight: 28,
    letterSpacing: 0.4,
  },
  heading: {
    fontSize: 18,
    fontStyle: "normal",
    fontFamily: "Roboto_500Medium",
    marginTop: 8,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 16,
    bottom: 16,
  },
});
