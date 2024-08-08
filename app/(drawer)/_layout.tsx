import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import drawer, { Drawer } from "expo-router/drawer";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import DrawerHeader from "@/components/drawer/DrawerHeader";

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        position: "relative",
        bottom: 55,
      }}
      style={styles.drawerContainer}
    >
      <DrawerHeader />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={CustomDrawerContent}>
        <Drawer.Screen
          name="index"
          options={{
            headerLeftLabelVisible: false,
            drawerLabel: "Home",
            drawerIcon: () => (
              <FontAwesome name="home" size={20} color={"red"} />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            headerLeftLabelVisible: false,
            drawerLabel: "Setting",
            drawerIcon: () => (
              <FontAwesome name="gear" size={20} color={"red"} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: "pink",
  },
});
