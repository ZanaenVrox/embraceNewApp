import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const Products = () => {
  const [selected, setSelected] = useState("All");
  return (
    <ScrollView>
      <LinearGradient
        style={styles.container}
        colors={["#f6d9a9", "#f9d8b7", "#facdc8"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.6, y: 0.6 }}
      >
        <View style={{ width: "100%", marginBottom: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              style={selected === "All" ? styles.selectedbutton : styles.button}
              onPress={() => {
                setSelected("All");
              }}
            >
              <Text
                style={
                  selected === "All"
                    ? { color: "#fff", fontSize: 16 }
                    : { color: "#000", fontSize: 16 }
                }
              >
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selected === "Essentials"
                  ? styles.selectedbutton
                  : styles.button
              }
              onPress={() => {
                setSelected("Essentials");
              }}
            >
              <Text
                style={
                  selected === "Essentials"
                    ? { color: "#fff", fontSize: 16 }
                    : { color: "#000", fontSize: 16 }
                }
              >
                Essentials
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selected === "Sensitives"
                  ? styles.selectedbutton
                  : styles.button
              }
              onPress={() => {
                setSelected("Sensitives ");
              }}
            >
              <Text
                style={
                  selected === " Sensitives"
                    ? { color: "#fff", fontSize: 16 }
                    : { color: "#000", fontSize: 16 }
                }
              >
                Sensitives
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              overflow: "hidden",
              width: "40%",
              backgroundColor: "transparent",
              marginHorizontal: 20,
            }}
          >
            <View
              style={{
                borderRadius: 15,
                overflow: "hidden",
                borderColor: "#fff",
                backgroundColor: "transparent",
                borderWidth: 1,
                marginBottom: 10,
              }}
            >
              <BlurView
                intensity={60}
                tint="light"
                style={styles.blurbox}
                backgroundColor="transparent"
              >
                <Image
                  source={require("../assets/images/ban.png")}
                  style={{
                    resizeMode: "contain",
                    width: 120,
                    height: 100,
                    borderRadius: 10,
                    marginTop: 25,
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                />
              </BlurView>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "#9b2890",
                fontWeight: "500",
              }}
            >
              Sensitives - Maxi Long
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#9b2890",
                fontWeight: "500",
              }}
            >
              RS 345
            </Text>
          </View>
          <View
            style={{
              overflow: "hidden",
              width: "40%",
              backgroundColor: "transparent",
              marginHorizontal: 20,
            }}
          >
            <View
              style={{
                borderRadius: 15,
                overflow: "hidden",
                borderColor: "#fff",
                backgroundColor: "transparent",
                borderWidth: 1,
                marginBottom: 10,
              }}
            >
              <BlurView
                intensity={60}
                tint="light"
                style={styles.blurbox}
                backgroundColor="transparent"
              >
                <Image
                  source={require("../assets/images/ban.png")}
                  style={{
                    resizeMode: "contain",
                    width: 120,
                    height: 100,
                    borderRadius: 10,
                    marginTop: 25,
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                />
              </BlurView>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "#9b2890",
                fontWeight: "500",
              }}
            >
              Sensitives - Maxi Extra Long
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#9b2890",
                fontWeight: "500",
              }}
            >
              RS 345
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              overflow: "hidden",
              width: "40%",
              backgroundColor: "transparent",
              marginHorizontal: 20,
            }}
          >
            <View
              style={{
                borderRadius: 15,
                overflow: "hidden",
                borderColor: "#fff",
                backgroundColor: "transparent",
                borderWidth: 1,
                marginBottom: 10,
              }}
            >
              <BlurView
                intensity={60}
                tint="light"
                style={styles.blurbox}
                backgroundColor="transparent"
              >
                <Image
                  source={require("../assets/images/ban.png")}
                  style={{
                    resizeMode: "contain",
                    width: 120,
                    height: 100,
                    borderRadius: 10,
                    marginTop: 25,
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                />
              </BlurView>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "#9b2890",
                fontWeight: "500",
              }}
            >
              Sensitives - Ultra Thin Long
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#9b2890",
                fontWeight: "500",
              }}
            >
              RS 345
            </Text>
          </View>
          <View
            style={{
              overflow: "hidden",
              width: "40%",
              backgroundColor: "transparent",
              marginHorizontal: 20,
            }}
          >
            <View
              style={{
                borderRadius: 15,
                overflow: "hidden",
                borderColor: "#fff",
                backgroundColor: "transparent",
                borderWidth: 1,
                marginBottom: 10,
              }}
            >
              <BlurView
                intensity={60}
                tint="light"
                style={styles.blurbox}
                backgroundColor="transparent"
              >
                <Image
                  source={require("../assets/images/ban.png")}
                  style={{
                    resizeMode: "contain",
                    width: 120,
                    height: 100,
                    borderRadius: 10,
                    marginTop: 25,
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                />
              </BlurView>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "#9b2890",
                fontWeight: "500",
              }}
            >
              Sensitives - Ultra Thin Long Extra
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#9b2890",
                fontWeight: "500",
              }}
            >
              RS 345
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              overflow: "hidden",
              width: "40%",
              backgroundColor: "transparent",
              marginHorizontal: 20,
            }}
          >
            <View
              style={{
                borderRadius: 15,
                overflow: "hidden",
                borderColor: "#fff",
                backgroundColor: "transparent",
                borderWidth: 1,
                marginBottom: 10,
              }}
            >
              <BlurView
                intensity={60}
                tint="light"
                style={styles.blurbox}
                backgroundColor="transparent"
              >
                <Image
                  source={require("../assets/images/ban.png")}
                  style={{
                    resizeMode: "contain",
                    width: 120,
                    height: 100,
                    borderRadius: 10,
                    marginTop: 25,
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                />
              </BlurView>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "#9b2890",
                fontWeight: "500",
              }}
            >
              Essential - Maxi Extra Long
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#9b2890",
                fontWeight: "500",
              }}
            >
              RS 345
            </Text>
          </View>
          <View
            style={{
              overflow: "hidden",
              width: "40%",
              backgroundColor: "transparent",
              marginHorizontal: 20,
            }}
          >
            <View
              style={{
                borderRadius: 15,
                overflow: "hidden",
                borderColor: "#fff",
                backgroundColor: "transparent",
                borderWidth: 1,
                marginBottom: 10,
              }}
            >
              <BlurView
                intensity={60}
                tint="light"
                style={styles.blurbox}
                backgroundColor="transparent"
              >
                <Image
                  source={require("../assets/images/ban.png")}
                  style={{
                    resizeMode: "contain",
                    width: 120,
                    height: 100,
                    borderRadius: 10,
                    marginTop: 25,
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                />
              </BlurView>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "#9b2890",
                fontWeight: "500",
              }}
            >
              Essential - Maxi Long
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#9b2890",
                fontWeight: "500",
              }}
            >
              RS 345
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              overflow: "hidden",
              width: "40%",
              backgroundColor: "transparent",
              marginHorizontal: 20,
            }}
          >
            <View
              style={{
                borderRadius: 15,
                overflow: "hidden",
                borderColor: "#fff",
                backgroundColor: "transparent",
                borderWidth: 1,
                marginBottom: 10,
              }}
            >
              <BlurView
                intensity={60}
                tint="light"
                style={styles.blurbox}
                backgroundColor="transparent"
              >
                <Image
                  source={require("../assets/images/ban.png")}
                  style={{
                    resizeMode: "contain",
                    width: 120,
                    height: 100,
                    borderRadius: 10,
                    marginTop: 25,
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                />
              </BlurView>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "#9b2890",
                fontWeight: "500",
              }}
            >
              Essential - Ultra Thin Long
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#9b2890",
                fontWeight: "500",
              }}
            >
              RS 320
            </Text>
          </View>
          <View
            style={{
              overflow: "hidden",
              width: "40%",
              backgroundColor: "transparent",
              marginHorizontal: 20,
            }}
          >
            <View
              style={{
                borderRadius: 15,
                overflow: "hidden",
                borderColor: "#fff",
                backgroundColor: "transparent",
                borderWidth: 1,
                marginBottom: 10,
              }}
            >
              <BlurView
                intensity={60}
                tint="light"
                style={styles.blurbox}
                backgroundColor="transparent"
              >
                <Image
                  source={require("../assets/images/ban.png")}
                  style={{
                    resizeMode: "contain",
                    width: 120,
                    height: 100,
                    borderRadius: 10,
                    marginTop: 25,
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                />
              </BlurView>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "#9b2890",
                fontWeight: "500",
              }}
            >
              Essential - Ultra thin Extra Long
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#9b2890",
                fontWeight: "500",
              }}
            >
              RS 320
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              overflow: "hidden",
              width: "40%",
              backgroundColor: "transparent",
              marginHorizontal: 20,
            }}
          >
            <View
              style={{
                borderRadius: 15,
                overflow: "hidden",
                borderColor: "#fff",
                backgroundColor: "transparent",
                borderWidth: 1,
                marginBottom: 10,
              }}
            >
              <BlurView
                intensity={60}
                tint="light"
                style={styles.blurbox}
                backgroundColor="transparent"
              >
                <Image
                  source={require("../assets/images/ban.png")}
                  style={{
                    resizeMode: "contain",
                    width: 120,
                    height: 100,
                    borderRadius: 10,
                    marginTop: 25,
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                />
              </BlurView>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "#9b2890",
                fontWeight: "500",
              }}
            >
              Essential - Maxi Extra Long - vp
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#9b2890",
                fontWeight: "500",
              }}
            >
              RS 600
            </Text>
          </View>
          <View
            style={{
              overflow: "hidden",
              width: "40%",
              backgroundColor: "transparent",
              marginHorizontal: 20,
            }}
          >
            <View
              style={{
                borderRadius: 15,
                overflow: "hidden",
                borderColor: "#fff",
                backgroundColor: "transparent",
                borderWidth: 1,
                marginBottom: 10,
              }}
            >
              <BlurView
                intensity={60}
                tint="light"
                style={styles.blurbox}
                backgroundColor="transparent"
              >
                <Image
                  source={require("../assets/images/ban.png")}
                  style={{
                    resizeMode: "contain",
                    width: 120,
                    height: 100,
                    borderRadius: 10,
                    marginTop: 25,
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                />
              </BlurView>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "#9b2890",
                fontWeight: "500",
              }}
            >
              Sensitives - Maxi Extra Long - VP
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#9b2890",
                fontWeight: "500",
              }}
            >
              RS 650
            </Text>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 30,
    alignItems: "center",
  },
  button: {
    height: 38,
    width: "30%",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#9b2890",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  selectedbutton: {
    height: 38,
    width: "30%",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#9b2890",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9b2890",
  },
  blurbox: {
    height: 150,
  },
});
