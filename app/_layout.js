import { Stack, Tabs } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="calender" options={{}} />
      </Stack>
    </>
  );
}
