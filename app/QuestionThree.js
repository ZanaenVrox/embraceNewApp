import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
const QuestionThree = () => {
  const [selected, setSelected] = useState("null");
  const navigation = useNavigation();
  const handleSkip = () => {
    navigation.navigate("app/(tabs)/index.js");
  };
  const handleNext = () => {
    navigation.navigate("app/(tabs)/index.js");
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
          marginBottom: 200,
        }}
      >
        Do you have any reproductive health disorder (PCOS,endometriosis.etc ?)
        ?{" "}
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
            Yes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selected === "No" ? styles.selectedfield : styles.boxfield}
          onPress={() => {
            setSelected("No");
          }}
        >
          <Text
            style={
              selected === "No"
                ? { color: "#fff", fontSize: 16 }
                : { color: "#6F1D78", fontSize: 16 }
            }
          >
            No
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selected === "Yes,i am cured now"
              ? styles.selectedfield
              : styles.boxfield
          }
          onPress={() => {
            setSelected("Yes,i am cured now");
          }}
        >
          <Text
            style={
              selected === "Yes,i am cured now"
                ? { color: "#fff", fontSize: 16 }
                : { color: "#6F1D78", fontSize: 16 }
            }
          >
            Yes,i am cured now
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selected === "I don't know" ? styles.selectedfield : styles.boxfield
          }
          onPress={() => {
            setSelected("I don't know");
          }}
        >
          <Text
            style={
              selected === "I don't know"
                ? { color: "#fff", fontSize: 16 }
                : { color: "#6F1D78", fontSize: 16 }
            }
          >
            I don't know
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        {/* <TouchableOpacity style={styles.button} onPress={handleSkip}> */}
        <Link href="/home">
          <Text style={styles.buttonText}>Skip</Text>
        </Link>
        {/* </TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.button} onPress={handleNext}> */}
        <Link href="/home">
          <Text style={styles.buttonText}>Next</Text>
        </Link>
        {/* </TouchableOpacity> */}
      </View>
    </LinearGradient>
  );
};

export default QuestionThree;

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
