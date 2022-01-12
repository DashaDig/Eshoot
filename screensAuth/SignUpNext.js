import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../components/logo";
import Glass from "../components/glass";
import EntryField from "../components/entryField";
import Button from "../components/button";
import Select from "../components/selectDrop";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../context/AuthContext";

export default function SignUpNext({ route}) {
  const email =route.params.username;
  const password =route.params.password;
  const [firstname, setFirstname] = React.useState("jopa");
  const [secondname, setSecondname] = React.useState("jopa");
  const [surname, setSurname] = React.useState("jopa");
  const [who, setWho] = React.useState("jopa");

  
  const onChangeFirstname = (name) => {
    setFirstname(name);
  };
  const onChangeSecondname = (name) => {
    setSecondname(name);
  };
  const onChangeSurname = (name) => {
    setSurname(name);
  };
  const onChangeWho = (role) => {
    setWho(role);
  };

  const { signup } = useAuth();
  const [error, setError] = useState("");
  const navigation = useNavigation();

  async function handleSubmit(e) {
    try {
      setError("");
      const checkLogin = await signup(
        who,
        firstname,
        surname,
        secondname,
        email,
        password
      );
      if (checkLogin && checkLogin.error) {
        console.log('какая то ошибка')
        return setError(checkLogin.error);
      }
      navigation.navigate("App")
    } catch (error) {
      console.log('Ошибка при регистрации')
      setError("Ошибка при регистрации");
    }
  }

  return (
    <LinearGradient
    colors={["#8A9EE2", "#3C4F8F"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.background}
    >
      <View style={styles.screenBorders}></View>
      <View style={styles.content}>
        <Glass height={360} heightBorder={364} />
        <Logo resolution={logoResolution} type={"onGlass"} />
        <View style={styles.blockForObj}>
          <EntryField type={"name"} text={"Имя"}  onChangeData={onChangeFirstname}/>
          <EntryField type={"surname"} text={"Фамилия"} paddingTop={"true"} onChangeData={onChangeSurname} />
          <EntryField
            type={"patronymic"}
            text={"Отчество"}
            paddingTop={"true"}
            onChangeData={onChangeSecondname}
          />
          <Select onChangeData={onChangeWho}/>
          <Button type={'Auth'} text={"Зарегистрироваться"} submit={true} handleSubmit={handleSubmit}/>
        </View>
      </View>
      <View style={styles.screenBorders}></View>
    </LinearGradient>
  );
}

const logoResolution = {
  width: 83,
  height: 83,
};

var styles = StyleSheet.create({
  blockForObj: {
    width: "66%",
    top: 58,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  screenBorders: {
    flexGrow: 1,
    paddingRight: 16,
    paddingLeft: 16,
    justifyContent: "flex-end",
    marginTop: 34,
  },
  content: {
    flexGrow: 2,
    alignItems: "center",
    paddingRight: 16,
    paddingLeft: 16,
    marginTop: 100,
  },
});
