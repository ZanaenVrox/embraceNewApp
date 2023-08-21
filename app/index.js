import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import {  useNavigation } from "expo-router";
import BrandServices from "./Services/BrandServices";
import { useEffect } from "react";

const Welcome = () => {
  const navigation = useNavigation();

  // const userLogin = () => {
  //   BrandServices.getBrands()
  //     .then((res) => {
  //       console.log("res", res);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  // useEffect(() => {
  //   userLogin();
  // }, []);

  return (
    <>
      <LinearGradient
        style={styles.container}
        colors={["#E81F76", "#6F1D78"]}
        start={{ x: 0, y: 0.4 }}
        end={{ x: 1, y: 1 }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "600",
            color: "#fff",
            marginBottom: 20,
          }}
        >
          Welcome to
        </Text>
        <View>
          <Image
            source={require("../assets/images/heartpurple.png")}
            style={{
              width: 320,
              height: 320,
              resizeMode: "contain",
            }}
          />
        </View>
        <ScrollView>
          <View
            style={{
              borderRadius: 20,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              overflow: "hidden",
              flex: 1,
              width: "100%",
              backgroundColor: "transparent",
            }}
          >
            <BlurView intensity={80} tint="light" style={styles.blurContainer}>
              <TextInput
                placeholderTextColor="#000000"
                placeholder="Full Name "
                style={styles.inputfieldname}
              />
              <TextInput
                placeholderTextColor="#000000"
                placeholder="Date of Birth "
                style={styles.inputfielddate}
              />
              <TextInput
                placeholderTextColor="#000000"
                placeholder="Mobile Number"
                style={styles.inputfieldnumber}
                keyboardType="numeric"
              />

              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("QuestionThree")}
              >
                <Text style={{ fontSize: 16, color: "#ffff" }}> Sign in</Text>
              </TouchableOpacity>
            </BlurView>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 100,
    alignItems: "center",
  },
  blurContainer: {
    height: 340,
    width: 330,
    justifyContent: "center",
  },
  inputfieldname: {
    fontSize: 16,
    height: 55,
    width: "85%",
    borderWidth: 1,
    paddingLeft: 15,
    borderColor: "#fff",
    backgroundColor: "transparent",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: "center",
    marginBottom: 20,
  },
  inputfielddate: {
    fontSize: 16,
    height: 55,
    width: "85%",
    borderWidth: 1,
    paddingLeft: 15,
    borderColor: "#fff",
    backgroundColor: "transparent",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: "center",
    marginBottom: 20,
  },
  inputfieldnumber: {
    fontSize: 16,
    height: 55,
    width: "85%",
    borderWidth: 1,
    paddingLeft: 15,
    borderColor: "#fff",
    backgroundColor: "transparent",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#E81F76",
    borderRadius: 20,
    height: 55,
    width: "85%",
    borderColor: "#E81F76",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
