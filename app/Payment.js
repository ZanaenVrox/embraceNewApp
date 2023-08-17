import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
const Payment = () => {
  const [selected, setSelected] = useState("3");
  const [code, setCode] = useState("");
  return (
    <LinearGradient
      style={styles.container}
      colors={["#f6d9a9", "#f9d8b7", "#facdc8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.6, y: 0.6 }}
    >
      <View style={{ width: "100%", marginBottom: 50 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 40,
          }}
        >
          <TouchableOpacity style={styles.cirlebutton}>
            <Text style={{ color: "#9b2890", fontSize: 20 }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cirlebutton}>
            <Text style={{ color: "#9b2890", fontSize: 20 }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selected === "3"
                ? styles.selectedscirclebutton
                : styles.cirlebutton
            }
            onPress={() => {
              setSelected("3");
            }}
          >
            <Text
              style={
                selected === "3"
                  ? { color: "#fff", fontSize: 20 }
                  : { color: "#9b2890", fontSize: 20 }
              }
            >
              3
            </Text>
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
              marginHorizontal: 40,
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
          height: 47,
          width: "90%",
          borderWidth: 1,
          borderColor: "#9b2890",
          borderRadius: 22,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            style={{
              fontSize: 14,
              color: "#9b2890",
              borderColor: "#9b2890",
              marginLeft: 20,
            }}
            placeholder="Enter your promo code"
            placeholderTextColor="#9b2890"
            value={code}
            onChangeText={setCode}
          />
          <View
            style={{
              height: 45,
              width: 45,
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "#9b2890",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#9b2890",
              marginLeft: 172,
            }}
          >
            <AntDesign name="arrowright" size={18} color="white" />
          </View>
        </View>
      </View>
      <View
        style={{
          overflow: "hidden",
          borderRadius: 20,
          borderColor: "#fff",
          borderWidth: 0.5,
          width: "100%",
          backgroundColor: "transparent",
          marginTop: 100,
        }}
      >
        <BlurView
          intensity={70}
          tint="light"
          style={styles.orderblurbox}
          backgroundColor="transparent"
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              justifyContent: "center",
              alignSelf: "center",
              color: "#9b2890",
              paddingTop: 20,
              marginBottom: 40,
            }}
          >
            Order Details
          </Text>
          <View style={{ width: "100%" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#9b2890",
                  fontWeight: "500",
                }}
              >
                Subtotal
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#9b2890",
                  fontWeight: "600",
                }}
              >
                RS 345
              </Text>
            </View>
            <View style={styles.divider} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
                marginBottom: 10,
                paddingTop: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#9b2890",
                  fontWeight: "500",
                }}
              >
                Discount
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#9b2890",
                  fontWeight: "600",
                }}
              >
                RS 0
              </Text>
            </View>
            <View style={styles.divider} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
                marginBottom: 10,
                paddingTop: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#9b2890",
                  fontWeight: "500",
                }}
              >
                Shipping Charges
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#9b2890",
                  fontWeight: "600",
                }}
              >
                RS 0
              </Text>
            </View>
            <View style={styles.divider} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
                paddingTop: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#9b2890",
                  fontWeight: "500",
                }}
              >
                Total
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#9b2890",
                  fontWeight: "600",
                }}
              >
                RS 345
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#9b2890",
                  fontWeight: "500",
                }}
              >
                Place Order
              </Text>
            </View>
          </TouchableOpacity>
        </BlurView>
      </View>
    </LinearGradient>
  );
};

export default Payment;

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
  orderblurbox: {
    height: 400,
  },
  divider: {
    height: 1.2,
    backgroundColor: "#9b2890",
    width: "90%",
    marginHorizontal: 22,
  },
  button: {
    height: 38,
    width: 190,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: 40,
  },
});
