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
        backgroundColor: Colors.dark.background,
      }}
    >
      <Text style={{ color: Colors.dark.text }}>Hello React Native</Text>
      <Link href={"/about"} style={{ color: Colors.dark.text }}>About</Link>
      <Link href={"/explore"} style={{ color: Colors.dark.text }}>Explore</Link>
      <Link href={"/(tab)"} style={{ color: Colors.dark.text }}>Tab</Link>
      <Link href={"/(drawer)"} style={{ color: Colors.dark.text }}>Drawer</Link>

    </View>
  );
}
