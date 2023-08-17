import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { CalendarList } from "react-native-calendars";
const pastrang = 1;
const futurerang = 1;

const CycleDetail = () => {
  const [selected, setSelected] = useState("");
  return (
    <ScrollView>
    <LinearGradient
      style={styles.container}
      colors={["#f6d9a9", "#f9d8b7", "#facdc8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.6, y: 0.6 }}
    >
      <View
        style={{
          overflow: "hidden",
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderColor: "#fff",
          borderWidth: 1,
          width: "93%",
          backgroundColor: "transparent",
          marginBottom: 50,
        }}
      >
        <BlurView intensity={50} tint="light" style={styles.blurbox}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#9b2890",
              marginLeft: 15,
              marginTop: 10,
            }}
          >
            Aug 17 - Aug 21
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginHorizontal: 10,
            }}
          >
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
          </View>
        </BlurView>
      </View>
      <View
        style={{
          overflow: "hidden",
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderColor: "#fff",
          borderWidth: 1,
          width: "93%",
          backgroundColor: "transparent",
          marginBottom: 50,
        }}
      >
        <BlurView intensity={50} tint="light" style={styles.cyclelength}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#9b2890",
              marginLeft: 15,
              marginTop: 10,
              backgroundColor: "transparent",
            }}
          >
            Cycle length
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "#9b2890",
                marginLeft: 15,
                marginTop: 10,
                backgroundColor: "transparent",
                marginBottom: 20,
              }}
            >
              28 days
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: "#9b2890",
                paddingRight: 20,
                marginTop: 10,
                backgroundColor: "transparent",
              }}
            >
              Normal
            </Text>
          </View>
          <View style={styles.divider} />
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: "#9b2890",
              marginLeft: 15,
              marginTop: 15,
              backgroundColor: "transparent",
            }}
          >
            Your cycle was within the normal medical range (21-35) days
          </Text>
        </BlurView>
      </View>
      <View
        style={{
          overflow: "hidden",
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderColor: "#fff",
          borderWidth: 1,
          width: "93%",
          backgroundColor: "transparent",
        }}
      >
        <BlurView intensity={50} tint="light" style={styles.cyclelength}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#9b2890",
              marginLeft: 15,
              marginTop: 10,
              backgroundColor: "transparent",
            }}
          >
            Period length
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "#9b2890",
                marginLeft: 15,
                marginTop: 10,
                backgroundColor: "transparent",
                marginBottom: 20,
              }}
            >
              5 days
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: "#9b2890",
                paddingRight: 20,
                marginTop: 10,
                backgroundColor: "transparent",
              }}
            >
              Normal
            </Text>
          </View>
          <View style={styles.dividerr} />
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: "#9b2890",
              marginLeft: 15,
              marginTop: 15,
              backgroundColor: "transparent",
            }}
          >
            Your Period length is within the normal medical range ( 2-7 )days
          </Text>
        </BlurView>
      </View>
      <View style={{ marginTop: 50, width: "90%", marginLeft: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginHorizontal: 20,
          }}
        >
          <Image
            source={require("../assets/images/CycleIcon.png")}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginRight: 30,
            }}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: "#9b2890",
            }}
          >
            Your period lasted from Aug 17,2023 to Aug 21, 2023
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 20, width: "90%", marginLeft: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginHorizontal: 20,
          }}
        >
          <Image
            source={require("../assets/images/CycleIcon.png")}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginRight: 30,
            }}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: "#9b2890",
            }}
          >
            Its likely for your fertile Window to have lasted frome Aug
            26,2023 to Aug 30,2023
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 20, width: "90%", marginLeft: 15,marginBottom:35 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginHorizontal: 20,
          }}
        >
          <Image
            source={require("../assets/images/CycleIcon.png")}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginRight: 30,
            }}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: "#9b2890",
            }}
          >
            Your mostly likely Ovulation from to August 28, 2023
          </Text>
        </View>
      </View>
      <View
        style={{
          overflow: "hidden",
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderColor: "#fff",
          borderWidth: 1,
          width: "100%",
          backgroundColor: "transparent",
        }}
      >
        <BlurView intensity={50} tint="light" style={styles.calenderbox}>
          <View style={{width:'100%'}}>
            <CalendarList
              pastScrollRange={pastrang}
              futureScrollRange={futurerang}
              markingType="dot"
              onDayPress={(day) => {
                setSelected(day.dateString);
              }}
              theme={{
                monthTextColor: "#9b2890",
                textMonthFontSize: 20,
                textDayFontSize: 16,
                textDayHeaderFontSize: 14,
                selectedColor: "transparent",
                selectedDayBackgroundColor: "transparent",
                textSectionTitleColor: "#9b2890",
                dayTextColor: "#9b2890",
                todayTextColor: "#9b2890",
                textDisabledColor: "#9b2890",
                calendarBackground: "transparent",
              }}
              markedDates={{
                [selected]: {
                  selected: true,
                  disableTouchEvent: true,
                  selectedColor: "transparent",
                  selectedTextColor: "#9b2890",
                },
              }}
            />
          </View>
        </BlurView>
      </View>
    </LinearGradient>
    </ScrollView>
  );
};

export default CycleDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 30,
    alignItems: "center",
  },
  blurbox: {
    height: 70,
  },
  circle: {
    height: 13,
    width: 13,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#EAA99C",
  },
  cyclelength: {
    height: 160,
  },
  divider: {
    height: 0.3,
    backgroundColor: "#000",
    width: "100%",
  },
  dividerr: {
    height: 0.3,
    backgroundColor: "#000",
    width: "100%",
  },
  calenderbox: {
    height: 300,
  },
});
