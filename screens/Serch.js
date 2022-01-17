import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Image, View, Text } from "react-native";
import Header from "../components/header";
import Serch from "../components/serch";
import Button from "../components/buttonModal";
import Card from "../components/photographer_сard";

import { useAuth } from "../context/AuthContext";

export default function SerchPage() {
  const [photographers, setPhotographers] = useState();
  const [loadingPhotographs, setLoadingPhotographs] = useState(true);
  const { currentUser } = useAuth();
  useEffect(() => {
    const fetchName = async () => {
      try {
        const data = await fetch(
          "http://192.168.1.8:8080/users/photographers/",
          {
            headers: {
              Authorization: "Bearer " + currentUser,
            },
          }
        );
        const text = await data.json();
        setPhotographers(text);
        setLoadingPhotographs(false);
      } catch {}
    };
    if (currentUser) {
      fetchName();
    }
  }, []);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header text={"Поиск"} />
      <ScrollView>
        <View style={styles.conteiner}>
          <View style={styles.serch}>
            <Serch />
            <Image
              source={require("../assets/filter.png")}
              style={styles.filter}
            />
          </View>
          <Button text={"По умолчанию ▼"} />
          {loadingPhotographs || !currentUser ? (
            <></>
          ) : (
            <View>
              {photographers.map((photographer) => (
                <Card key={photographer.id} photographer={photographer} />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    paddingTop: 16,
    paddingRight: 16,
    paddingLeft: 16,
  },
  serch: {
    flex: 1,
    flexDirection: "row",
  },
  filter: {
    top: 4,
  },
});
