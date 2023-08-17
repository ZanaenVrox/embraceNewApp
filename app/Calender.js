import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { CalendarList } from "react-native-calendars";
import { LinearGradient } from "expo-linear-gradient";
const pastrang = 1;
const futurerang = 0;
const Calender = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  const handleSkip = () => {
    navigation.navigate("QuestionOne");
  };
  const handleNext = () => {
    navigation.navigate("QuestionOne");
  };
  return (
    <LinearGradient
        style={styles.container}
        colors={["#f6d9a9",'#f9d8b7', "#facdc8"]}

        start={{ x: 0, y: 0 }}
        end={{ x: 0.6, y: 0.6 }}
      >
      <Text style={{ color: "#6F1D78", fontSize: 16, fontWeight: "500" }}>
        When did your last period start?{" "}
      </Text>
      <View style={styles.calendar}>
        <CalendarList
          pastScrollRange={pastrang}
          futureScrollRange={futurerang}
          markingType="dot"
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
          theme={{
            monthTextColor:"#9b2890",
            textMonthFontSize: 20,
            textDayFontSize: 16,
            textDayHeaderFontSize: 14,
            selectedColor: "#9b2890",
            selectedDayBackgroundColor: "#9b2890",
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
              selectedColor: "#9b2890",
              selectedTextColor: "#fff",
            },
          }}
        />
        
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSkip}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Calender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 60,
    alignItems: "center",
  },
  calendar: {
    width: "100%",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    paddingHorizontal: 30,
  },
  buttonText: {
    fontSize: 18,
  },
});
//#EDB02A
//#F48273
