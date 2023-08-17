import { Stack } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  const navigation = useNavigation();
  return (
    <Stack
      // https://reactnavigation.org/docs/headers#sharing-common-options-across-screens
      screenOptions={{
        headerStyle: {
          // backgroundColor: "#fff",
        },
        // headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {/* Optionally configure static options outside the route. */}
      <Stack.Screen name="home" options={{}} />
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="Calender" options={{ headerShown: false }} />
      <Stack.Screen name="QuestionOne" options={{ headerShown: false }} />
      <Stack.Screen name="QuestionTwo" options={{ headerShown: false }} />
      <Stack.Screen name="QuestionThree" options={{ headerShown: false }} />
      <Stack.Screen name="SlideBar" options={{ headerShown: false }} />
      <Stack.Screen
        name="HomeDashboard"
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
      />
      <Stack.Screen
        name="MyCalender"
        options={{
          headerShown: true,
          // headerShadowVisible: false,
          headerTitle: "Calender",
          headerStyle: {
            backgroundColor: "#f6d9a9",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
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
              <Ionicons name="arrow-back" size={26} color="#9b2890" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="MarkSymptoms"
        options={{
          headerShown: true,
          // headerShadowVisible: false,
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#f6d9a9",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
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
              <Ionicons name="arrow-back" size={26} color="#9b2890" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="CycleHistory"
        options={{
          headerShown: true,
          // headerShadowVisible: false,
          headerTitle: "Cycle History",
          headerStyle: {
            backgroundColor: "#f6d9a9",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
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
              <Ionicons name="arrow-back" size={26} color="#9b2890" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="CycleDetail"
        options={{
          headerShown: true,
          // headerShadowVisible: false,
          headerTitle: "Cycle Detail",
          headerStyle: {
            backgroundColor: "#f6d9a9",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
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
              <Ionicons name="arrow-back" size={26} color="#9b2890" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="BlogDetail"
        options={{
          headerShown: true,
          // headerShadowVisible: false,
          headerTitle: "Blog Artical",
          headerStyle: {
            backgroundColor: "#f6d9a9",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
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
              <Ionicons name="arrow-back" size={26} color="#9b2890" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Blogs"
        options={{
          headerShown: true,
          // headerShadowVisible: false,
          headerTitle: "All Blogs",
          headerStyle: {
            backgroundColor: "#f6d9a9",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
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
              <Ionicons name="arrow-back" size={26} color="#9b2890" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        options={{
          headerShown: true,
          // headerShadowVisible: false,
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#f6d9a9",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
          },
          headerRight: () => (
            <TouchableOpacity>
              <Image
                style={{
                  width: 28,
                  height: 28,
                  resizeMode: "contain",
                }}
                source={require("../assets/images/Cart.png")}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={26} color="#9b2890" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Products"
        options={{
          headerShown: true,
          // headerShadowVisible: false,
          headerTitle: "Products",
          headerStyle: {
            backgroundColor: "#f6d9a9",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
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
              <Ionicons name="arrow-back" size={26} color="#9b2890" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Cart"
        options={{
          headerShown: true,
          // headerShadowVisible: false,
          headerTitle: "My Cart",
          headerStyle: {
            backgroundColor: "#f6d9a9",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
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
              <Ionicons name="arrow-back" size={26} color="#9b2890" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="DeliveryAddress"
        options={{
          headerShown: true,
          // headerShadowVisible: false,
          headerTitle: " Delivery Address",
          headerStyle: {
            backgroundColor: "#f6d9a9",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
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
              <Ionicons name="arrow-back" size={26} color="#9b2890" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="OrderSummary"
        options={{
          headerShown: true,
          // headerShadowVisible: false,
          headerTitle: " Order Summary",
          headerStyle: {
            backgroundColor: "#f6d9a9",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
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
              <Ionicons name="arrow-back" size={26} color="#9b2890" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Payment"
        options={{
          headerShown: true,
          // headerShadowVisible: false,
          headerTitle: " Payment ",
          headerStyle: {
            backgroundColor: "#f6d9a9",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
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
              <Ionicons name="arrow-back" size={26} color="#9b2890" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="OrderConformation"
        options={{
          headerShown: true,
          // headerShadowVisible: false,
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#f6d9a9",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
            color: "#9b2890",
          },
          // headerRight: () => (
          //   <TouchableOpacity>
          //     <Image
          //       style={{
          //         width: 28,
          //         height: 28,
          //         resizeMode: "contain",
          //       }}
          //       source={require("../assets/images/bell.png")}
          //     />
          //   </TouchableOpacity>
          // ),
          headerLeft: () => (
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={26} color="#9b2890" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
