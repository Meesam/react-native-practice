import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.light.background,
      }}
    >
      <Text style={{ color: Colors.light.text }}>Hello React Native</Text>
      <Link href={"/about"} style={{ color: Colors.light.text }}>About</Link>
      <Link href={"/explore"} style={{ color: Colors.light.text }}>Explore</Link>
      <Link href={"/(tab)"} style={{ color: Colors.light.text }}>Tab</Link>
      <Link href={"/(drawer)"} style={{ color: Colors.light.text }}>Drawer</Link>

    </View>
  );
}
