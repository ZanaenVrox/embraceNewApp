import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const QuestionOne = () => {
  const [selected, setSelected] = useState("null");
  const navigation = useNavigation();
  const handleSkip = () => {
    navigation.navigate("QuestionTwo");
  };
  const handleNext = () => {
    navigation.navigate("QuestionTwo");
  };
  return (
    <LinearGradient
      style={styles.container}
      colors={["#f6d9a9", "#f9d8b7", "#facdc8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.6, y: 0.6 }}
    >
      <Text
        style={{
          color: "#6F1D78",
          fontSize: 16,
          fontWeight: "500",
          marginBottom: 180,
        }}
      >
        How long does your period last ?{" "}
      </Text>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={selected === "under 2 days" ? styles.selectedfield : styles.boxfield}
          onPress={() => {
            setSelected("under 2 days");
          }}
        >
          <Text
            style={
              selected === "under 2 days"
                ? { color: "#fff", fontSize: 16 }
                : { color: "#6F1D78", fontSize: 16 }
            }
          >
            Under 2 days{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selected === "Typically,between 2-7 days"
              ? styles.selectedfield
              : styles.boxfield
          }
          onPress={() => {
            setSelected("Typically,between 2-7 days");
          }}
        >
          <Text
            style={
              selected === "Typically,between 2-7 days"
                ? { color: "#fff", fontSize: 16 }
                : { color: "#6F1D78", fontSize: 16 }
            }
          >
            Typically, between 2-7 days
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selected === "Usually more than a week"
              ? styles.selectedfield
              : styles.boxfield
          }
          onPress={() => {
            setSelected("Usually more than a week");
          }}
        >
          <Text
            style={
              selected === "Usually more than a week"
                ? { color: "#fff", fontSize: 16 }
                : { color: "#6F1D78", fontSize: 16 }
            }
          >
            Usually more than a week
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selected === "No bleeding" ? styles.selectedfield : styles.boxfield}
          onPress={() => {
            setSelected("No bleeding");
          }}
        >
          <Text
            style={
              selected === "No bleeding"
                ? { color: "#fff", fontSize: 16 }
                : { color: "#6F1D78", fontSize: 16 }
            }
          >
            No bleeding
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selected === "I can't keep track" ? styles.selectedfield : styles.boxfield
          }
          onPress={() => {
            setSelected("I can't keep track");
          }}
        >
          <Text
            style={
              selected === "I can't keep track"
                ? { color: "#fff", fontSize: 16 }
                : { color: "#6F1D78", fontSize: 16 }
            }
          >
            I can't keep track{" "}
          </Text>
        </TouchableOpacity>
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

export default QuestionOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 60,
    alignItems: "center",
  },
  boxfield: {
    width: "85%",
    height: 55,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E81F76",
    justifyContent: "center",
    paddingLeft:20,
    marginVertical: 10,
  },
  selectedfield: {
    width: "85%",
    height: 55,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#6F1D78",
    justifyContent: "center",
    paddingLeft:20,
    marginVertical: 10,
    backgroundColor: "#6F1D78",
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
