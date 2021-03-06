import React, { useContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  return result;
}

const AuthContext = React.createContext();
const API_URL = "http://192.168.1.8:8080";

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [currentUserInfo, setCurrentUserInfo] = useState({
    "first_name": "",
    "last_name": "",
    "middle_name": "",
    "email": "",
    "phone": "",
    "birthdate": "",
    "city": "",
    "role": "",
    "created_date": "",
    "id": "",
    "password": ""
  });

  const login = async (email, password) => {
    let body = 'username=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password);

    const postConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    };

    const response = await fetch(API_URL + "/token", postConfig);
    const currentUser = await response.json();
    if (!response.ok) {
      return { error: currentUser.detail };
    }

    setCurrentUser(currentUser.access_token);
    save("currentUser", currentUser.access_token);
    await userInfo(currentUser.access_token);
  };

  const signup = async (
    role,
    firstName,
    middleName,
    lastName,
    email,
    password
  ) => {
    const params = {
      first_name: firstName,
      last_name: lastName,
      middle_name: middleName,
      email: email,
      phone: "string",
      birthdate: new Date("2000-01-01").toISOString(),
      city: "string",
      role: role,
      created_date: new Date().toISOString(),
      password: password,
    };

    const postConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    };
    const API_URL_ROLE =
      role === "Photographer" ? "photographers/" : "customers/";
    const response = await fetch(
      API_URL + "/users/" + API_URL_ROLE,
      postConfig
    );
    const newUser = await response.json();
    if (!response.ok) {
      return { error: newUser.error };
    }
    await login(email, password);
  };

  const userInfo = async (user) => {
    const data = await fetch(API_URL + "/users/me", {
      headers: {
        Authorization: "Bearer " + user,
      },
    });
    const text = await data.json();
    setCurrentUserInfo(text);
  };

  useEffect(() => {
    const currentUserInCookies = getValueFor("currentUser");
    if (currentUserInCookies) {
      setCurrentUser(currentUserInCookies);
      userInfo(currentUserInCookies);
    }
    setLoading(false);
  }, []);

  const value = {
    currentUser,
    currentUserInfo,
    login,
    signup,
    userInfo,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
