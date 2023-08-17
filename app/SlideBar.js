import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const SlideBar = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#f6d9a9", "#f9d8b7", "#facdc8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.6, y: 0.6 }}
    >
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginLeft: 30,
        }}
      >
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../assets/images/profile.png")}
            style={{
              width: 63,
              resizeMode: "contain",
              marginRight: 10,
              width: 80,
              height: 80,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#9b2890",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            Hamza
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: 35, marginTop: 80 }}>
        <TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/images/CycleIcon.png")}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                marginRight: 20,
                marginBottom: 20,
              }}
            />
            <Text
              style={{
                fontSize: 16,
                color: "#9b2890",
              }}
            >
              Cycle History
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/images/Cart.png")}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                marginRight: 20,
                marginBottom: 20,
              }}
            />
            <Text
              allowFontScaling={false}
              style={{
                fontSize: 16,
                color: "#9b2890",
              }}
            >
              My Orders
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/images/SubscriptionManager.png")}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                marginRight: 20,
                marginBottom: 20,
              }}
            />
            <Text
              allowFontScaling={false}
              style={{
                fontSize: 16,
                color: "#9b2890",
              }}
            >
              Subscription Manager
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/images/ManageShippingAddress.png")}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                marginRight: 20,
                marginBottom: 20,
              }}
            />
            <Text
              allowFontScaling={false}
              style={{
                fontSize: 16,
                color: "#9b2890",
              }}
            >
              Manage Shipping Address
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/images/CallSupport.png")}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                marginRight: 20,
                marginBottom: 20,
              }}
            />
            <Text
              allowFontScaling={false}
              style={{
                fontSize: 16,
                color: "#9b2890",
              }}
            >
              Call Support
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/images/TermsAndConditions.png")}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                marginRight: 20,
                marginBottom: 20,
              }}
            />
            <Text
              allowFontScaling={false}
              style={{
                fontSize: 16,
                color: "#9b2890",
              }}
            >
              Terms & Conditions
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/images/Trash.png")}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                marginRight: 20,
                marginBottom: 20,
              }}
            />
            <Text
              style={{
                fontSize: 16,
                color: "#9b2890",
              }}
            >
              Delete My Account
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 300,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "white",
              width: "45%",
              height: 38,
              borderRadius: 20,
              marginBottom: 15,
            }}
          >
            <Image
              logout
              source={require("../assets/images/logout.png")}
              style={{ width: 20, height: 20, marginRight: 5 }}
            />
            <Text
              style={{
                fontSize: 16,
                color: "#9b2890",
              }}
            >
              Logout
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 11,
              color: "#9b2890",
            }}
          >
            Privacy Policy
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default SlideBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    height: 50,
    backgroundColor: "transparent",
    // width:'85%'
  },
});
