import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const LogoTitle: React.FC<any> = () => {
  return (
    <SafeAreaView>
      <View style={styles.logoContainer}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TextInput style={styles.search} placeholder="Search" />
        </View>
      </View>
    </SafeAreaView>
  );
};
const Tablayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShadowVisible: true,
          tabBarIcon: ({ size, color }) => {
            return <FontAwesome name="home" color={"blue"} size={25} />;
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          header: (props) => {
            return <LogoTitle {...props} />;
          },
          tabBarIcon: ({ size, color }) => {
            return <FontAwesome name="search" color={"blue"} size={25} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",

          tabBarIcon: ({ size, color }) => {
            return <FontAwesome name="user" color={"blue"} size={25} />;
          },
        }}
      />
    </Tabs>
  );
};

export default Tablayout;

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
  },
  search: {
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 10,
    width: 350,
    height: 50,
    fontSize: 16,
  },
});
