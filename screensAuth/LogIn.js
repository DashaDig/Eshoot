import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../components/logo";
import Glass from "../components/glass";
import EntryField from "../components/entryField";
import Button from "../components/button";
import TextSsr from "../components/textSsr";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";

export default function LogIn() {
  const [username, setLogin] = React.useState("jopa");
  const [password, setPassword] = React.useState("jopa");
  const onChangeLogin = (username) => {
    setLogin(username);
  };
  const onChangePassword = (password) => {
    setPassword(password);
  };

  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigation = useNavigation();

  async function handleSubmit(params) {
    try {
      setError("");
      const checkLogin = await login(username, password);
      if (checkLogin && checkLogin.error) {
        console.log("Неверно введен логин или пароль");
        return setError(checkLogin.error);
      }
      navigation.navigate("App");
    } catch (error) {
      setError("Ошибка при входе в систему");
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
        <Glass height={287} heightBorder={291} />
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
          <Button
            type={"Auth"}
            submit={true}
            text={"Войти"}
            ssr={"App"}
            username={username}
            password={password}
            handleSubmit={handleSubmit}
          />
          <TextSsr
            text={"Нет аккаунта? "}
            bold={"Зарегистрироваться"}
            ssr={"SignUp"}
          />
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
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  blockForObj: {
    width: "66%",
    top: 58,
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
