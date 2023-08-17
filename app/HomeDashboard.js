import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import CalendarStrip from "react-native-calendar-strip";
import { BlurView } from "expo-blur";

const HomeDashboard = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#f6d9a9", "#f9d8b7", "#facdc8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.6, y: 0.6 }}
    >
      <View style={styles.divider} />
      <View style={styles.calendar}>
        <CalendarStrip
          // scrollable
          calendarAnimation={{ type: "sequence", duration: 30 }}
          daySelectionAnimation={{
            type: "background",
            duration: 1,
            borderHighlightColor: "#6F1D78",
          }}
          style={{ height: 150, marginTop: -90, paddingTop: 20 }}
          calendarHeaderStyle={{ color: "#6F1D78", fontSize: 18 }}
          calendarColor={"transparent"}
          dateNameStyle={{ color: "#6F1D78" }}
          dateNumberStyle={{ color: "#6F1D78", fontSize: 18 }}
          highlightDateNumberStyle={{ color: "#E81F76" }}
          highlightDateNameStyle={{ color: "#E81F76" }}
          disabledDateNameStyle={{ color: "#6F1D78" }}
          disabledDateNumberStyle={{ color: "#6F1D78" }}
          showArrows={false}
          useIsoWeekday={false}
          iconLeft={""}
          iconRight={""}
        />
      </View>
      <View style={styles.dividerr} />
      <ImageBackground
        source={require("../assets/images/homeHeart.png")}
        resizeMode="contain"
        style={{
          width: "100%",
          height: "100%",
          marginTop: -210,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 80,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#E81F76",
              fontSize: 16,
              fontWeight: "700",
              marginTop: 210,
            }}
          >
            {" "}
            Undefined day of period
          </Text>
          <Text
            style={{
              color: "#6F1D78",
              fontSize: 16,
              fontWeight: "400",
              marginVertical: 7,
            }}
          >
            Mark symptoms
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#6F1D78",
              borderRadius: 12,
              height: 35,
              width: "30%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 14, color: "#fff", fontWeight: "400" }}>
              Edit period date{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View
        style={{
          overflow: "hidden",
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderColor: "#fff",
          borderWidth:1,
          width: "90%",
          backgroundColor: "transparent",
          marginTop: -250,
          marginBottom: 40,
        }}
      >
        <BlurView intensity={55} tint="light" style={styles.blurContainer}>
          <Text
            style={{
              color: "#6F1D78",
              fontSize: 16,
              fontWeight: "500",
              marginLeft: 20,
            }}
          >
            Free Shipping
          </Text>
          <Text
            style={{
              color: "#6F1D78",
              fontSize: 12,
              fontWeight: "400",
              marginLeft: 20,
            }}
          >
            Load up your cart with your favourite products
          </Text>
          <Text
            style={{
              color: "#6F1D78",
              fontSize: 12,
              fontWeight: "400",
              marginLeft: 20,
            }}
          >
            and enjoy FREE shipping now!
          </Text>
        </BlurView>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <LinearGradient
          colors={["#f9ddc7", "#f9d1c1"]}
          start={{ x: 0, y: 0.3 }}
          end={{ x: 0.6, y: 0.6 }}
          style={{
            width: "25%",
            height: "55%",
            borderRadius: 15,
            marginHorizontal: 10,
            marginVertical: 2,
            padding: 3,
            borderWidth: 0.4,
            borderRadius: 8,
            borderColor: "#FFF",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../assets/images/tab-bell.png")}
              style={{
                resizeMode: "contain",
                width: 60,
                height: 60,
                marginBottom: 10,
              }}
            />
            <Text
              style={{
                color: "#6F1D78",
                fontSize: 14,
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              Subcribe{" "}
            </Text>
            <Text
              style={{
                color: "#6F1D78",
                fontSize: 14,
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              Product{" "}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={["#f9ddc7", "#f9d1c1"]}
          start={{ x: 0, y: 0.3 }}
          end={{ x: 0.6, y: 0.6 }}
          style={{
            width: "25%",
            height: "55%",
            borderRadius: 15,
            marginHorizontal: 10,
            marginVertical: 2,
            padding: 3,
            borderWidth: 0.4,
            borderRadius: 8,
            borderColor: "#FFF",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../assets/images/tab-cart.png")}
              style={{
                resizeMode: "contain",
                width: 60,
                height: 60,
                marginBottom: 10,
              }}
            />
            <Text
              style={{
                color: "#6F1D78",
                fontSize: 14,
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              Shop{" "}
            </Text>
            <Text
              style={{
                color: "#6F1D78",
                fontSize: 14,
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              Now
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={["#f9ddc7", "#f9d1c1"]}
          start={{ x: 0, y: 0.3 }}
          end={{ x: 0.6, y: 0.6 }}
          style={{
            width: "25%",
            height: "55%",
            borderRadius: 15,
            marginHorizontal: 10,
            marginVertical: 2,
            padding: 3,
            borderWidth: 0.4,
            borderRadius: 8,
            borderColor: "#FFF",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../assets/images/tab-blogs.png")}
              style={{
                resizeMode: "contain",
                width: 60,
                height: 60,
                marginBottom: 10,
              }}
            />
            <Text
              style={{
                color: "#6F1D78",
                fontSize: 14,

                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              News &{" "}
            </Text>
            <Text
              style={{
                color: "#6F1D78",
                fontSize: 14,
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              {" "}
              updates
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
};

export default HomeDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 60,
    alignItems: "center",
  },
  calendar: {
    container: { flex: 1 },
    width: "100%",
  },
  divider: {
    height: 0.9,
    backgroundColor: "#6F1D78",
    width: "100%",
    marginBottom: 30,
  },
  dividerr: {
    height: 0.8,
    backgroundColor: "#6F1D78",
    width: "100%",
    marginTop: -17,
  },
  blurContainer: {
    height: 65,
    justifyContent: "center",
  },
  product: {
    alignItems: "center",
  },
});
