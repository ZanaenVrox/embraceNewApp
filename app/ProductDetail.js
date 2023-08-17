import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const ProductDetail = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#f6d9a9", "#f9d8b7", "#facdc8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.6, y: 0.6 }}
    >
      <Image
        source={require("../assets/images/ban.png")}
        style={{
          resizeMode: "contain",
          width: 250,
          height: 150,
          borderRadius: 10,
          alignSelf: "center",
          justifyContent: "center",
          marginBottom: 50,
        }}
      />
      <View style={{ width: "90%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#9b2890",
              fontWeight: "600",
            }}
          >
            Sensitives - Maxi Extra Long
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
        <Text
          style={{
            fontSize: 14,
            color: "#9b2890",
            fontWeight: "500",
            marginBottom: 20,
          }}
        >
          Pads in a pack:8
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#9b2890",
            fontWeight: "400",
            textAlign: "justify",
            lineHeight: 22,
          }}
        >
          The Sensitives maxi extra-long pads are a perfect fit for you if you
          have Sensitives skin and want a pad that won't cause rashes while
          managing to handle your heavy blood flow. Stop worrying about
          allergies and rashes while you stay leak-free utterly comfortable with
          the Sensitives maxi pads rang.
        </Text>
      </View>
      <TouchableOpacity>
        <View style={styles.cartbutton}>
          <Text
            style={{
              fontSize: 16,
              color: "#fff",
            }}
          >
            Add cart
          </Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 30,
    alignItems: "center",
  },
  cartbutton: {
    height: 38,
    width: 185,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#9b2890",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9b2890",
    alignSelf: "center",
    marginTop: 280,
  },
});
