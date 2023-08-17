import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";

const CycleHistory = () => {
  const [selected, setSelected] = useState("All");
  return (
    <LinearGradient
      style={styles.container}
      colors={["#f6d9a9", "#f9d8b7", "#facdc8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.6, y: 0.6 }}
    >
      <View style={styles.buttoncontainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            style={selected === "All" ? styles.selectedbutton : styles.button}
            onPress={() => {
              setSelected("All");
            }}
          >
            <Text
              style={
                selected === "All"
                  ? { color: "#fff", fontSize: 16 }
                  : { color: "#9b2890", fontSize: 16 }
              }
            >
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selected === "Last 3 Cycle"
                ? styles.selectedbutton
                : styles.button
            }
            onPress={() => {
              setSelected("Last 3 Cycle");
            }}
          >
            <Text
              style={
                selected === "Last 3 Cycle"
                  ? { color: "#fff", fontSize: 16 }
                  : { color: "#9b2890", fontSize: 16 }
              }
            >
              Last 3 Cycle
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          overflow: "hidden",
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderColor: "#fff",
          borderWidth: 1,
          width: "85%",
          backgroundColor: "transparent",
        }}
      >
        <BlurView intensity={60} tint="light" style={styles.blurbox}>
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
            <Text
              style={{
                fontSize: 16,
                color: "#9b2890",
                backgroundColor: "transparent",
                marginTop: 20,
                marginLeft: 20,
                marginBottom: 10,
              }}
            >
              2023
            </Text>
          </View>
          <View style={styles.divider} />
          <TouchableOpacity>
            <View
              style={{
                overflow: "hidden",
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderColor: "#fff",
                borderWidth: 0.9,
                width: "90%",
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              <BlurView intensity={90} tint="light" style={styles.cyclebox}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      color: "#9b2890",
                      marginLeft: 15,
                      marginTop: 20,
                    }}
                  >
                    Current Cycle:28 days
                  </Text>
                  <Ionicons
                    name="chevron-forward-sharp"
                    size={25}
                    color="#9b2890"
                    marginTop={20}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "600",
                    color: "#9b2890",
                    marginLeft: 15,
                  }}
                >
                  Started Aug 17
                </Text>
              </BlurView>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                overflow: "hidden",
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderColor: "#fff",
                borderWidth: 0.9,
                width: "90%",
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              <BlurView intensity={90} tint="light" style={styles.cyclebox}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      color: "#9b2890",
                      marginLeft: 15,
                      marginTop: 20,
                    }}
                  >
                    -1days
                  </Text>
                  <Ionicons
                    name="chevron-forward-sharp"
                    size={25}
                    color="#9b2890"
                    marginTop={20}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "600",
                    color: "#9b2890",
                    marginLeft: 15,
                  }}
                >
                  Aug 17 - Aug 21
                </Text>
              </BlurView>
            </View>
          </TouchableOpacity>
        </BlurView>
      </View>
    </LinearGradient>
  );
};

export default CycleHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 30,
    alignItems: "center",
  },
  buttoncontainer: {
    width: "100%",
    marginBottom: 40,
  },
  button: {
    height: 38,
    width: 140,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#9b2890",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  selectedbutton: {
    height: 38,
    width: 140,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#9b2890",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9b2890",
  },
  blurbox: {
    height: 380,
  },
  periodwindow: {
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    paddingTop: 20,
    backgroundColor: "transparent",
  },
  divider: {
    height: 0.5,
    backgroundColor: "#fff",
    width: "100%",
  },
  cyclebox: {
    height: 100,
  },
});
