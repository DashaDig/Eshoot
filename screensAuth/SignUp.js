import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../components/logo";
import Glass from "../components/glass";
import EntryField from "../components/entryField";
import Button from "../components/button";
import TextSsr from "../components/textSsr";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();

  const [error, setError] = useState("");
  const [username, setLogin] = React.useState("jopa");
  const [password, setPassword] = React.useState("jopa");
  const [passwordSecond, setPasswordSecond] = React.useState("jopa");
  const onChangeLogin = (username) => {
    setLogin(username);
  };
  const onChangePassword = (password) => {
    setPassword(password);
  };
  const onChangeSecondPassword = (password) => {
    setPasswordSecond(password);
  };

  async function handleSubmit(params) {
    try {
      setError("");
      if (password !== passwordSecond) {
        console.log("Не совпадают пароли");
        return setError(error);
      }
      navigation.navigate("SignUpNext", {
        username: username,
        password: password,
      });
    } catch (error) {
      setError("Ошибка при обработке запросов");
      console.log(error);
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
        <Glass height={343} heightBorder={347} />
        <Logo resolution={logoResolution} type={"onGlass"} />
        <View style={styles.blockForObj}>
          <EntryField
            type={"logIn"}
            text={"Логин"}
            onChangeData={onChangeLogin}
          />
          <EntryField
            type={"password"}
            text={"Пароль"}
            paddingTop={"true"}
            password={true}
            onChangeData={onChangePassword}
          />
          <EntryField
            type={"password"}
            text={"Повторить пароль"}
            paddingTop={"true"}
            password={true}
            onChangeData={onChangeSecondPassword}
          />
          <Button
            type={"Auth"}
            submit={true}
            text={"Продолжить"}
            handleSubmit={handleSubmit}
          />
          <TextSsr text={"Есть аккаунт? "} bold={"Войти"} ssr={"LogIn"} />
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
