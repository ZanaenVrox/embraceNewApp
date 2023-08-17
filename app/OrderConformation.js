import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const OrderConformation = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#f6d9a9", "#f9d8b7", "#facdc8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.6, y: 0.6 }}
    >
      <View
        style={{
          height: 80,
          width: 80,
          borderRadius: 50,
          borderWidth: 1,
          borderColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          marginBottom: 20,
        }}
      >
        <Image
          source={require("../assets/images/tick.png")}
          style={{
            width: 30,
            height: 30,
            resizeMode: "contain",
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          color: "#9b2890",
        }}
      >
        Thank You
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "400",
          color: "#9b2890",
        }}
      >
        Your order has been received
      </Text>
      <View
        style={{
          overflow: "hidden",
          borderRadius: 20,
          borderColor: "#fff",
          borderWidth: 0.5,
          width: "90%",
          backgroundColor: "transparent",
          marginTop: 40,
        }}
      >
        <BlurView
          intensity={70}
          tint="light"
          style={styles.orderblurbox}
          backgroundColor="transparent"
        >
          <View style={{ width: "100%", paddingTop: 30 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                marginHorizontal: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#9b2890",
                  fontWeight: "500",
                }}
              >
                Order Number:
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#9b2890",
                  fontWeight: "400",
                  marginLeft: 75,
                }}
              >
                605
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                marginHorizontal: 30,
                paddingTop: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#9b2890",
                  fontWeight: "500",
                }}
              >
                Date:
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#9b2890",
                  fontWeight: "400",
                  marginLeft: 135,
                }}
              >
                19-08-2023
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                marginHorizontal: 30,
                paddingTop: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#9b2890",
                  fontWeight: "500",
                }}
              >
                Total:
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#9b2890",
                  fontWeight: "400",
                  marginLeft: 135,
                }}
              >
                RS 345
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                marginHorizontal: 30,
                paddingTop: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#9b2890",
                  fontWeight: "500",
                }}
              >
                Payment Method:
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#9b2890",
                  fontWeight: "400",
                  marginLeft: 60,
                }}
              >
                Cash on Delivery
              </Text>
            </View>
          </View>
        </BlurView>
      </View>
    </LinearGradient>
  );
};

export default OrderConformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 150,
    alignItems: "center",
  },
  orderblurbox: {
    height: 200,
  },
});
