import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const OrderSummary = () => {
  const [selected, setSelected] = useState("2");
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
          <TouchableOpacity
            style={
              selected === "2"
                ? styles.selectedscirclebutton
                : styles.cirlebutton
            }
            onPress={() => {
              setSelected("2");
            }}
          >
            <Text
              style={
                selected === "2"
                  ? { color: "#fff", fontSize: 20 }
                  : { color: "#9b2890", fontSize: 20 }
              }
            >
              2
            </Text>
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
      <Text
        style={{
          fontSize: 14,
          color: "#9b2890",
          fontWeight: "600",
          alignSelf: "flex-start",
          marginLeft: 23,
          marginBottom: 30,
        }}
      >
        Order Summary
      </Text>
      <View
        style={{
          overflow: "hidden",
          borderRadius: 20,
          borderColor: "#fff",
          borderWidth: 0.5,
          width: "90%",
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
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
            }}
          >
            <Image
              source={require("../assets/images/ban.png")}
              style={{
                width: 63,
                resizeMode: "contain",
                width: 80,
                height: 80,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: "#9b2890",
                position: "absolute",
                paddingTop: 10,
                marginLeft: 100,
              }}
            >
              Sensitives
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                position: "absolute",
                color: "#9b2890",
                paddingTop: 30,
                position: "absolute",
                marginLeft: 100,
              }}
            >
              Maxi Extra Long
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                position: "absolute",
                color: "#9b2890",
                paddingTop: 50,
                marginLeft: 100,
              }}
            >
              Rs 550
            </Text>
          </View>
        </BlurView>
      </View>
      <View
        style={{
          overflow: "hidden",
          borderRadius: 20,
          borderColor: "#fff",
          borderWidth: 0.5,
          width: "100%",
          backgroundColor: "transparent",
          marginTop: 130,
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
            Order Summary
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
                Total Amount
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
                Total Payable
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
                Confirm Order
              </Text>
            </View>
          </TouchableOpacity>
        </BlurView>
      </View>
    </LinearGradient>
  );
};

export default OrderSummary;

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
    height: 330,
  },
  divider: {
    height: 1.3,
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
    marginTop: 30,
  },
});
