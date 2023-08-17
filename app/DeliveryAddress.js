import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
const DeliveryAddress = () => {
  const [selected, setSelected] = useState("1");
  const [fullName, setFullName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");
  return (
    <LinearGradient
      style={styles.container}
      colors={["#f6d9a9", "#f9d8b7", "#facdc8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.6, y: 0.6 }}
    >
      <View style={{ width: "90%", marginBottom: 30 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 40,
          }}
        >
          <TouchableOpacity
            style={
              selected === "1"
                ? styles.selectedscirclebutton
                : styles.cirlebutton
            }
            onPress={() => {
              setSelected("1");
            }}
          >
            <Text
              style={
                selected === "1"
                  ? { color: "#fff", fontSize: 20 }
                  : { color: "#9b2890", fontSize: 20 }
              }
            >
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cirlebutton}>
            <Text style={{ color: "#9b2890", fontSize: 20 }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cirlebutton}>
            <Text style={{ color: "#9b2890", fontSize: 20 }}>3</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              paddingTop: 5,
              justifyContent: "center",
              fontSize: 14,
              color: "#9b2890",
            }}
          >
            Shipping
          </Text>
          <Text
            style={{
              paddingTop: 5,
              justifyContent: "center",
              fontSize: 14,
              color: "#9b2890",
              marginHorizontal: 20,
            }}
          >
            Summary
          </Text>
          <Text
            style={{
              paddingTop: 5,
              justifyContent: "center",
              fontSize: 14,
              color: "#9b2890",
            }}
          >
            Payment
          </Text>
        </View>
      </View>
      <View
        style={{
          borderRadius: 15,
          overflow: "hidden",
          width: "80%",
          backgroundColor: "transparent",
        }}
      >
        <BlurView
          intensity={70}
          tint="light"
          style={styles.blurbox}
          backgroundColor="transparent"
        >
          <View
            style={{
              paddingTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                color: "#9b2890",
              }}
            >
              Delivery Address
            </Text>
            <TextInput
              style={styles.inputField}
              placeholder="Full Name"
              placeholderTextColor="#9b2890"
              value={fullName}
              onChangeText={setFullName}
            />
            <TextInput
              style={styles.inputField}
              placeholderTextColor="#9b2890"
              placeholder="Contact Number"
              value={number}
              onChangeText={setNumber}
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.inputField}
              placeholderTextColor="#9b2890"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.inputField}
              placeholderTextColor="#9b2890"
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />
            <TextInput
              style={styles.inputField}
              placeholderTextColor="#9b2890"
              placeholder="Country"
              value={country}
              onChangeText={setCountry}
            />
            <TextInput
              style={styles.inputField}
              placeholderTextColor="#9b2890"
              placeholder="City"
              value={city}
              onChangeText={setCity}
            />
            <TextInput
              style={styles.inputField}
              placeholderTextColor="#9b2890"
              placeholder="Zip/Postal Code"
              value={code}
              onChangeText={setCode}
              keyboardType="numeric"
            />
          </View>
        </BlurView>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{ fontSize: 16, color: "#ffff" }}>Continue</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default DeliveryAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 20,
    alignItems: "center",
  },
  cirlebutton: {
    height: 60,
    width: 60,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#9b2890",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  selectedscirclebutton: {
    height: 60,
    width: 60,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#9b2890",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9b2890",
  },
  blurbox: {
    height: 520,
  },
  inputField: {
    height: 50,
    marginBottom: 15,
    fontSize: 14,
    color: "#000000",
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderColor: "#9b2890",
  },
  button: {
    backgroundColor: "#9b2890",
    borderRadius: 15,
    height: 50,
    width: "80%",
    borderColor: "#9b2890",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});
