import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const MarkSymptoms = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#f6d9a9", "#f9d8b7", "#facdc8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.6, y: 0.6 }}
    >
      <View
        style={{
          overflow: "hidden",
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderColor: "#fff",
          borderWidth: 0.5,
          width: "90%",
          backgroundColor: "transparent",
        }}
      >
        <BlurView intensity={30} tint="light" style={styles.moodbox}>
          {/* <View style={styles.moodbox}> */}
          <Text
            style={{
              fontSize: 16,
              color: "#9b2890",
              fontWeight: "600",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              marginTop: 10,
            }}
          >
            Moods
          </Text>
          <Image
            style={{
              width: 18,
              height: 18,
              resizeMode: "contain",
            }}
            source={require("../assets/images/bell.png")}
          />
        </BlurView>

        {/* </View> */}
      </View>
    </LinearGradient>
  );
};

export default MarkSymptoms;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 50,
    alignItems: "center",
  },
  moodbox: {
    height: 150,
  },
});
