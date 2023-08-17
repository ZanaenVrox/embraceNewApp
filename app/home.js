import { Link, Stack } from "expo-router";
import { Image, Text, View } from "react-native";

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      // source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
}

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          title: "My home",
          headerStyle: { backgroundColor: "#fff" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
      <Text>Home Screen</Text>
      <Link href={{ pathname: "welcome", params: { name: "Bacon" } }}>
        Go to Details
      </Link>
    </View>
  );
}
