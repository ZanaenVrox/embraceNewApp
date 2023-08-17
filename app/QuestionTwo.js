import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const QuestionTwo = () => {
  const [selected, setSelected] = useState("null");
  const navigation = useNavigation();
  const handleSkip = () => {
    navigation.navigate("QuestionThree");
  };
  const handleNext = () => {
    navigation.navigate("QuestionThree");
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
          marginBottom: 250,
        }}
      >
        Is your mentrual cycle regular?{" "}
      </Text>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={selected === "Yes" ? styles.selectedfield : styles.boxfield}
          onPress={() => {
            setSelected("Yes");
          }}
        >
          <Text
            style={
              selected === "Yes"
                ? { color: "#fff", fontSize: 16 }
                : { color: "#6F1D78", fontSize: 16 }
            }
          >
            Yes{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selected === "Sometime a week later or a week early"
              ? styles.selectedfield
              : styles.boxfield
          }
          onPress={() => {
            setSelected("Sometime a week later or a week early");
          }}
        >
          <Text
            style={
              selected === "Sometime a week later or a week early"
                ? { color: "#fff", fontSize: 16 }
                : { color: "#6F1D78", fontSize: 16 }
            }
          >
            Sometime a week later or a week early
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selected === "Its irregular"
              ? styles.selectedfield
              : styles.boxfield
          }
          onPress={() => {
            setSelected("Its irregular");
          }}
        >
          <Text
            style={
              selected === "Its irregular"
                ? { color: "#fff", fontSize: 16 }
                : { color: "#6F1D78", fontSize: 16 }
            }
          >
            Its irregular
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

export default QuestionTwo;

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
    paddingLeft: 20,
    marginVertical: 10,
  },
  selectedfield: {
    width: "85%",
    height: 55,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#6F1D78",
    justifyContent: "center",
    paddingLeft: 20,
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
