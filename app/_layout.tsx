import { Stack } from "expo-router";
import { View, Text,StyleSheet } from "react-native";

const LogoTitle = () => {
  return (
    <View style={styles.logoTitle}>
      <Text>Logo</Text>
    </View>
  );
};

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="(tab)" options={{ headerShown: false }} />
      <Stack.Screen
        name="index"
        options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
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
  logoTitle:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
