import React, { useState, useRef } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

export default function Select(props) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {
          label: 'Фотограф',
           value: 'Photographer',
           icon: () => <Image source={require('../assets/camera.png') } style={styles.iconStyle} />
        },
      {
          label: 'Пользователь',
           value: 'Customer',
           icon: () => <Image source={require('../assets/usersIcon.png')} style={styles.iconStyle} />
        }
    ]);
  
    const onChange = (event) => props.onChangeData(event);

    return (
      <DropDownPicker
        open={open}
        value={value}
        onChangeValue={onChange}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={"Кто"}
        style={styles.select}
        textStyle={styles.placeholder}
        dropDownDirection="BOTTOM"
        dropDownContainerStyle={styles.sel}
        showTickIcon={false}
      />
  );
}

const users = [
  { title: "Фотограф", image: require("../assets/camera.png") },
  { title: "Пользователь", image: require("../assets/usersIcon.png") },
];

var styles = StyleSheet.create({
  sel: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#F0F2F8",
    borderWidth: 1,
    borderColor: "white",
    top: 58,
  },
  select: {
    width: "100%",
    height: 42,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderWidth: 1,
    borderColor: "white",
    marginTop: 16,
    
  },
  
  placeholder: {
    color: "#8A8282",
    textAlign: "left",
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    paddingLeft:5
    
  },
  iconStyle: {
    width:21,
  },
});
