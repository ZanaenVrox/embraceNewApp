import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const BlogDetail = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#f6d9a9", "#f9d8b7", "#facdc8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.6, y: 0.6 }}
    >
      <View style={{ alignItems: "center" }}>
        <View>
          <Image
            source={require("../assets/images/blogdetail.png")}
            style={{
              width: 380,
              height: 300,
              resizeMode: "contain",
            }}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: "flex-start",
          marginTop: 20,
          marginLeft: 30,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            color: "#9b2890",
            fontWeight: "400",
            marginBottom: 10,
          }}
        >
          Health | 10 JUL, 2023
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#9b2890",
            fontWeight: "500",
          }}
        >
          Why Sanitary pads Are Essential for
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#9b2890",
            fontWeight: "500",
            marginBottom: 30,
          }}
        >
          Woman's Health:Benifits and Features
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "#9b2890",
            fontWeight: "400",
            marginBottom: 30,
            marginRight: 15,
          }}
        >
          Let's talk about a crucial but often-overlookwed health topic:
          Sanitary pads!
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "#9b2890",
            fontWeight: "400",
            marginRight: 15,
            marginBottom: 30,
          }}
        >
          From heavy flow days to light flow days and from long-lasting
          protection to breathbility,the right kind of pad can mean the
          different between managing your period in peace or dealing with
          irritating leaks or order.
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "#9b2890",
            fontWeight: "400",
            marginRight: 15,
            marginBottom: 30,
          }}
        >
          From heavy flow days to light flow days and from long-lasting
          protection to breathbility,the right kind of pad can mean the
          different between managing your period in peace or dealing with
          irritating leaks or order.
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "#9b2890",
            fontWeight: "400",
            marginRight: 15,
            marginBottom: 30,
          }}
        >
          From heavy flow days to light flow days and from long-lasting
          protection to breathbility,the right kind of pad can mean the
          different between managing your period in peace or dealing with
          irritating leaks or order.
        </Text>
      </View>
    </LinearGradient>
  );
};

export default BlogDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 10,
    // alignItems: "center",
  },
});
