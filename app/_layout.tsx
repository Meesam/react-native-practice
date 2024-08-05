import { FontAwesome } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { Stack } from "expo-router";
import { View, Text, StyleSheet, TextInput } from "react-native";

const LogoTitle: React.FC<any> = () => {
  return (
    <View style={styles.logoTitle}>
      <FontAwesome name="search" color={"gray"} size={20} />
      <TextInput style={styles.search} placeholder="Search" />
      <Feather name="more-vertical" size={20} color="gray" />
    </View>
  );
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tab)" options={{ headerShown: false }} />
      <Stack.Screen
        name="index"
        options={{
          headerStyle: { backgroundColor: "white" },
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
        
      />
      <Stack.Screen
        name="about/index"
        options={{ title: "About Us", headerBackTitle: "About us" }}
      />
      <Stack.Screen
        name="explore/index"
        options={{ title: "Explore", headerBackTitle: "Explore" }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  logoTitle: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  search: {
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 15,
    width: 350,
    height: 40,
  },
});
