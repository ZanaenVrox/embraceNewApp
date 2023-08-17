import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { EvilIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";

const Blogs = () => {
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState("All");
  const handleSearch = () => {
    console.log("Search", searchText);
  };
  return (
    <ScrollView>
      <LinearGradient
        style={styles.container}
        colors={["#f6d9a9", "#f9d8b7", "#facdc8"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.6, y: 0.6 }}
      >
        <View style={styles.searchBar}>
          <EvilIcons
            name="search"
            size={22}
            color="black"
            alignItems="center"
            justifyContent="center"
            paddingTop={5}
          />
          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              color: "#000000",
              paddingHorizontal: 5,
              alignItems: "center",
              fontSize: 16,
            }}
            placeholder="Search"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
          <TouchableOpacity onPress={handleSearch}></TouchableOpacity>
        </View>
        <View style={{ width: "100%", marginBottom: 25 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginHorizontal: 10,
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
                    : { color: "#9b2890", fontSize: 16 }
                }
              >
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selected === "Guides" ? styles.selectedbutton : styles.button
              }
              onPress={() => {
                setSelected("Guides");
              }}
            >
              <Text
                style={
                  selected === "Guides"
                    ? { color: "#fff", fontSize: 16 }
                    : { color: "#9b2890", fontSize: 16 }
                }
              >
                Guides
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selected === "Skin" ? styles.selectedbutton : styles.button
              }
              onPress={() => {
                setSelected("Skin");
              }}
            >
              <Text
                style={
                  selected === "Skin"
                    ? { color: "#fff", fontSize: 16 }
                    : { color: "#9b2890", fontSize: 16 }
                }
              >
                Skin
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: "90%",
            marginBottom: 25,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../assets/images/blog.png")}
                  style={{
                    resizeMode: "contain",
                    width: 240,
                    height: 240,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "rgba(0 0 0 / 0.4)",
                    width: 180,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    zIndex: 10,
                    marginTop: -50,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                >
                  <Text style={{ color: "#fff", fontSize: 12 }}>
                    Beat the Bloat:Top 4 Remedies for Premenstrual Constipation
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../assets/images/Blogs.png")}
                  style={{
                    resizeMode: "contain",
                    width: 240,
                    height: 240,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "rgba(0 0 0 / 0.4)",
                    width: 180,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    zIndex: 10,
                    marginTop: -50,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 12,
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "center",
                    }}
                  >
                    Why Sanitary Pads Are Essential for Women Health:Benifits &
                    Features{" "}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: "90%",
            marginBottom: 25,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../assets/images/Blogs.png")}
                  style={{
                    resizeMode: "contain",
                    width: 240,
                    height: 240,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "rgba(0 0 0 / 0.4)",
                    width: 180,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    zIndex: 10,
                    marginTop: -50,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                >
                  <Text style={{ color: "#fff", fontSize: 12 }}>
                    Beat the Bloat:Top 4 Remedies for Premenstrual Constipation
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../assets/images/Blogs.png")}
                  style={{
                    resizeMode: "contain",
                    width: 240,
                    height: 240,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "rgba(0 0 0 / 0.4)",
                    width: 180,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    zIndex: 10,
                    marginTop: -50,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 12,
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "center",
                    }}
                  >
                    Why Sanitary Pads Are Essential for Women Health:Benifits &
                    Features{" "}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: "90%",
            marginBottom: 25,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../assets/images/Blogs.png")}
                  style={{
                    resizeMode: "contain",
                    width: 240,
                    height: 240,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "rgba(0 0 0 / 0.4)",
                    width: 180,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    zIndex: 10,
                    marginTop: -50,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                >
                  <Text style={{ color: "#fff", fontSize: 12 }}>
                    Beat the Bloat:Top 4 Remedies for Premenstrual Constipation
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../assets/images/blog.png")}
                  style={{
                    resizeMode: "contain",
                    width: 240,
                    height: 240,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "rgba(0 0 0 / 0.4)",
                    width: 180,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    zIndex: 10,
                    marginTop: -50,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 12,
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "center",
                    }}
                  >
                    Why Sanitary Pads Are Essential for Women Health:Benifits &
                    Features{" "}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: "90%",
            marginBottom: 25,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../assets/images/blog.png")}
                  style={{
                    resizeMode: "contain",
                    width: 240,
                    height: 240,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "rgba(0 0 0 / 0.4)",
                    width: 180,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    zIndex: 10,
                    marginTop: -50,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                >
                  <Text style={{ color: "#fff", fontSize: 12 }}>
                    Beat the Bloat:Top 4 Remedies for Premenstrual Constipation
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../assets/images/Blogs.png")}
                  style={{
                    resizeMode: "contain",
                    width: 240,
                    height: 240,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "rgba(0 0 0 / 0.4)",
                    width: 180,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    zIndex: 10,
                    marginTop: -50,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 12,
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "center",
                    }}
                  >
                    Why Sanitary Pads Are Essential for Women Health:Benifits &
                    Features{" "}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Blogs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 30,
    alignItems: "center",
  },
  searchBar: {
    width: "90%",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "flex-start",
    borderWidth: 0.5,
    borderColor: "#9b2890",
    marginBottom: 25,
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
});
