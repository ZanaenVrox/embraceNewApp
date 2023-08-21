import { Stack, Tabs } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Calender" options={{headerShown: false}} />
        <Stack.Screen name="QuestionOne" options={{ headerShown: false }} />
        <Stack.Screen name="QuestionTwo" options={{ headerShown: false }} />
        <Stack.Screen name="QuestionThree" options={{ headerShown: false }} />
        <Stack.Screen name="SlideBar" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" />
        {/* <Stack.Screen
          name="home"
          options={{
            headerShown: true,
            headerTitle: "",
            headerStyle: {
              backgroundColor: "#f6d9a9",
            },
            headerRight: () => (
              <TouchableOpacity>
                <Image
                  style={{
                    width: 28,
                    height: 28,
                    resizeMode: "contain",
                  }}
                  source={require("../assets/images/bell.png")}
                />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    resizeMode: "contain",
                  }}
                  source={require("../assets/images/profile.png")}
                />
              </TouchableOpacity>
            ),
          }}
        /> */}
      </Stack>
    </>
  );
}
