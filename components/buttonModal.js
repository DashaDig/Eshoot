import React, { useState } from "react";
import {
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function Button(props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          style={styles.modal}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <TouchableWithoutFeedback>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Здесь будет что-то</Text>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.text}>
          {props.text}
          <Text style={styles.textBold}>{props.bold}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

var styles = StyleSheet.create({
  button: {
    marginTop: 46,
    marginBottom: 16,
    alignItems: "flex-start",
  },
  text: {
    color: "black",
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modal: {
    flex: 1,
  },
  modalView: {
    top: 100,
    margin: 20,
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#7D94DF",
    alignItems: "center",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
