import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

const Cart = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#f6d9a9", "#f9d8b7", "#facdc8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.6, y: 0.6 }}
    >
      <Text
        style={{
          fontSize: 16,
          color: "#9b2890",
          fontWeight: "600",
          alignSelf: "flex-start",
          marginLeft: 23,
          marginBottom: 30,
        }}
      >
        1 Item(s)
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
                marginTop: 10,
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
                paddingTop: 20,
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
                paddingTop: 40,
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
                paddingTop: 60,
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
          marginTop: 190,
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
            <View style={styles.checkbutton}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#9b2890",
                  fontWeight: "500",
                }}
              >
                Check Out
              </Text>
            </View>
          </TouchableOpacity>
        </BlurView>
      </View>
    </LinearGradient>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 50,
    alignItems: "center",
  },
  blurbox: {
    height: 100,
  },
  orderblurbox: {
    height: 350,
  },
  divider: {
    height: 1.3,
    backgroundColor: "#9b2890",
    width: "90%",
    marginHorizontal: 22,
  },
  checkbutton: {
    height: 38,
    width: 190,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: 50,
  },
});
