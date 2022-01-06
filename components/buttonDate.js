import React, { useState } from "react";
import {
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import { Shadow } from "react-native-shadow-2";
import moment from "moment";
import {
  Calendar,
  LocaleConfig,
  CalendarList,
  Agenda,
} from "react-native-calendars";

LocaleConfig.locales["Pn"] = {
  monthNames: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ],
  monthNamesShort: [
    "Янв",
    "Февр",
    "Март",
    "Апр",
    "Май",
    "Июнь",
    "Июль",
    "Авг.",
    "Сент.",
    "Окт.",
    "Нояб.",
    "Дек.",
  ],
  dayNames: [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ],
  dayNamesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  today: "Сегодня",
};
LocaleConfig.defaultLocale = "Pn";

import CalendarSvg from "../assets/calendar.svg";

export default function ButtonDate(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());

  const trMonth = {
    0: "Января",
    1: "Февраля",
    2: "Марта",
    3: "Апреля",
    4: "Мая",
    5: "Июня",
    6: "Июля",
    7: "Августа",
    8: "Сентября",
    9: "Октября",
    10: "Ноября",
    11: "Декабря",
  };

  return (
    <View>
      <Shadow startColor={"rgba(39,60,131,0.1)"}>
        <View>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.button}
          >
            <CalendarSvg />
            <Text style={styles.text}>
              {date.getDate()} {trMonth[date.getMonth()]} {date.getFullYear()}
            </Text>
          </TouchableOpacity>
        </View>
      </Shadow>
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
            <Calendar
              style={styles.calendar}
              minDate={moment().format('YYYY-MM-DD')}
              firstDay={1}
              onDayPress={(day) => {
                setDate(new Date(day.dateString));
                setModalVisible(!modalVisible);
              }}
              theme={{
                textSectionTitleColor: "black",
                selectedDayBackgroundColor: "yellow",
                selectedDayTextColor: "#ffffff",
                todayTextColor: "#00adf5",
                dayTextColor: "black",
                textDisabledColor: "#d9e1e8",
                dotColor: "#00adf5",
                selectedDotColor: "#ffffff",
                arrowColor: "#7D94DF",
                disabledArrowColor: "#d9e1e8",
                textDayFontFamily: "Roboto_400Regular",
                textMonthFontFamily: "Roboto_500Medium",
                textDayHeaderFontFamily: "Roboto_400Regular",
                textDayFontWeight: "300",
                textDayHeaderFontWeight: "300",
                textDayFontSize: 18,
                textMonthFontSize: 24,
                textDayHeaderFontSize: 18,
              }}
            />
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
var styles = StyleSheet.create({
  button: {
    width: 216,
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#7D94DF",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
  },
  text: {
    fontSize: 16,
    fontStyle: "normal",
    fontFamily: "Roboto_400Regular",
    paddingLeft: 16,
  },
  calendar: {
    marginTop: 200,
    marginLeft: 16,
    width: 352,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#7D94DF",
  },
});
