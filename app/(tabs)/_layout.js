import { Tabs } from "expo-router";
import { useColorScheme, TouchableOpacity, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "#E81F76"].tint,
        initialRouteName: "home",
        tabBarLabelStyle: {
          fontSize: 12,
          color: "black",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: true,
          tabBarLabelStyle: {
            fontSize: 12,
            color: "#E81F76",
          },
          headerShadowVisible: true,
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
                  marginRight: 20,
                }}
                source={require("../../assets/images/bell.png")}
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
                  marginLeft: 20,
                }}
                source={require("../../assets/images/profile.png")}
              />
            </TouchableOpacity>
          ),

          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color="#E81F76" />
          ),
        }}
      />
      <Tabs.Screen
        name="MyCalender"
        options={{
          title: "Calender",
          headerShown: true,
          tabBarLabelStyle: {
            fontSize: 12,
            color: "#E81F76",
          },
          headerShadowVisible: true,
          headerTitle: "Calender",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
          },
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
                  marginRight: 20,
                }}
                source={require("../../assets/images/bell.png")}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity>
              <Ionicons
                name="arrow-back"
                size={26}
                color="#9b2890"
                marginLeft={20}
              />
            </TouchableOpacity>
          ),

          tabBarIcon: ({ color }) => (
            <AntDesign name="calendar" size={24} color="#E81F76" />
          ),
        }}
      />
      <Tabs.Screen
        name="Cycle"
        options={{
          title: "My Cycle",
          headerShown: true,
          tabBarLabelStyle: {
            fontSize: 12,
            color: "#E81F76",
          },
          headerShadowVisible: true,
          headerTitle: "Cycle History",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
          },
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
                  marginRight: 20,
                }}
                source={require("../../assets/images/bell.png")}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity>
              <Ionicons
                name="arrow-back"
                size={26}
                color="#9b2890"
                marginLeft={20}
              />
            </TouchableOpacity>
          ),

          tabBarIcon: ({ color }) => (
            <Entypo name="cycle" size={24} color="#E81F76" />
          ),
        }}
      />
      <Tabs.Screen
        name="Blogs"
        options={{
          title: "Blogs",
          tabBarLabelStyle: {
            fontSize: 12,
            color: "#E81F76",
          },
          headerShown: true,
          headerShadowVisible: true,
          headerTitle: "Blogs",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
          },
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
                  marginRight: 20,
                }}
                source={require("../../assets/images/bell.png")}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity>
              <Ionicons
                name="arrow-back"
                size={26}
                color="#9b2890"
                marginLeft={20}
              />
            </TouchableOpacity>
          ),

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="newspaper"
              size={24}
              color="#E81F76"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Products"
        options={{
          title: "Products",
          headerShown: true,
          headerShadowVisible: true,
          tabBarLabelStyle: {
            fontSize: 12,
            color: "#E81F76",
          },
          headerTitle: "Blogs",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
          },
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
                  marginRight: 20,
                }}
                source={require("../../assets/images/bell.png")}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity>
              <Ionicons
                name="arrow-back"
                size={26}
                color="#9b2890"
                marginLeft={20}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cart-check"
              color="#E81F76"
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
