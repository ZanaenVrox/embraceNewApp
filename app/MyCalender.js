import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { CalendarList } from "react-native-calendars";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { BlurView } from "expo-blur";
const pastrang = 12;
const futurerang = 12;

const MyCalender = () => {
  const [addsymptom, setAddSymptom] = useState("");
  const [isDateSelected, setIsDateSelected] = useState(false);
  const handleDayPress = (day) => {
    setSelected(day.dateString);
    setIsDateSelected(true);
  };
  const [selected, setSelected] = useState("");
  return (
    // <ScrollView>
    <LinearGradient
      style={styles.container}
      colors={["#f6d9a9", "#f9d8b7", "#facdc8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.6, y: 0.6 }}
    >
      <View style={styles.periodwindow}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 10,
              borderColor: "#EAA99C",
              backgroundColor: "#EAA99C",
              alignSelf: "center",
            }}
          ></View>
          <Text
            style={{
              fontSize: 14,
              color: "#9b2890",
            }}
          >
            Period
          </Text>
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 10,
              borderColor: "#F4AE32",
              backgroundColor: "#F4AE32",
              alignSelf: "center",
            }}
          ></View>
          <Text
            style={{
              fontSize: 14,
              color: "#9b2890",
            }}
          >
            Fertile Window
          </Text>
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 10,
              borderColor: "#EAA99C",
              backgroundColor: "#EAA99C",
              alignSelf: "center",
            }}
          ></View>
          <Text
            style={{
              fontSize: 14,
              color: "#9b2890",
            }}
          >
            Ovulation
          </Text>
        </View>
      </View>
      <View style={styles.calendar}>
        <CalendarList
          pastScrollRange={pastrang}
          futureScrollRange={futurerang}
          markingType="dot"
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
          theme={{
            monthTextColor: "#9b2890",
            textMonthFontSize: 20,
            textDayFontSize: 16,
            textDayHeaderFontSize: 14,
            selectedColor: "transparent",
            selectedDayBackgroundColor: "transparent",
            textSectionTitleColor: "#9b2890",
            dayTextColor: "#9b2890",
            todayTextColor: "#9b2890",
            textDisabledColor: "#9b2890",
            calendarBackground: "transparent",
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: "transparent",
              selectedTextColor: "#9b2890",
            },
          }}
        />
      </View>
      <TouchableOpacity>
        <View style={styles.symptombutton}>
          <Text
            style={{
              fontSize: 14,
              color: "#fff",
            }}
          >
            Mark Symptoms
          </Text>
        </View>
      </TouchableOpacity>
      <BlurView intensity={80} tint="light" style={styles.popbox}>
        <View style={styles.symptompop}>
          <Text
            style={{
              fontSize: 14,
              color: "#fff",
            }}
          >
            Mark Symptoms
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "#9b2890",
              fontWeight: "500",
              marginLeft: 30,
              paddingTop: 10,
              marginBottom: 30,
            }}
          >
            9th August
          </Text>
          <AntDesign
            name="closecircleo"
            size={18}
            color="#9b2890"
            marginRight={30}
            marginTop={20}
          />
        </View>
        <View style={styles.divider}></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 30,
          }}
        >
          <TextInput
            style={styles.inputField}
            placeholder="Add symptoms, moods"
            value={addsymptom}
            onChangeText={setAddSymptom}
            placeholderTextColor="#9b2890"
          />
          <AntDesign name="pluscircleo" size={18} color="#9b2890" />
        </View>
      </BlurView>
      {/* </View> */}
    </LinearGradient>
    //  </ScrollView>
  );
};

export default MyCalender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 20,
    alignItems: "center",
  },
  periodwindow: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "white",
    width: "90%",
    height: 38,
    borderRadius: 20,
    marginBottom: 15,
  },
  calendar: {
    width: "100%",
  },
  symptombutton: {
    height: 35,
    width: 160,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#9b2890",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9b2890",
    alignSelf: "center",
    marginTop: -100,
  },
  symptompop: {
    height: 35,
    width: 160,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#9b2890",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9b2890",
    alignSelf: "center",
    marginTop: -40,
  },
  divider: {
    height: 1.5,
    backgroundColor: "#B0BAC6",
    marginHorizontal: 30,
    marginBottom: 30,
  },
  inputField: {
    fontSize: 14,
    fontWeight: "500",
  },
  popbox: {
    paddingTop: 25,
    // backgroundColor: "#f6d9a9",
    height: 190,
    width: "100%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
});
