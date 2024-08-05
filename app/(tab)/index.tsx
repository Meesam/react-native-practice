import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import { FontAwesome } from "@expo/vector-icons";

const data = [
  {
    id: 1,
    title: "Call of Duty",
    downloads: "10k",
    views: 30,
    rating: 5.0,
    imageName: require("@/assets/images/back-ops-cover.webp"),
  },
  {
    id: 2,
    title: "Rise of Empires",
    downloads: "10k",
    views: 30,
    rating: 5.0,
    imageName: require("@/assets/images/riseofempire.png"),
  },
  {
    id: 3,
    title: "Clash of Clans",
    downloads: "10k",
    views: 30,
    rating: 5.0,
    imageName: require("@/assets/images/CoCloading-1.jpg"),
  },
  {
    id: 4,
    title: "Modern Warfare",
    downloads: "10k",
    views: 30,
    rating: 5.0,
    imageName: require("@/assets/images/modern-warfare.webp"),
  },
  {
    id: 5,
    title: "Pubg",
    downloads: "10k",
    views: 30,
    rating: 5.0,
    imageName: require("@/assets/images/pubg.jpg"),
  },
  {
    id: 6,
    title: "Tennis",
    downloads: "10k",
    views: 30,
    rating: 5.0,
    imageName: require("@/assets/images/tennis.webp"),
  },
];

interface ListItemProps {
  title: string;
  downloads: string;
  views: number;
  rating: number;
  imageName: any;
}
const ListItem: React.FC<ListItemProps> = ({
  title,
  downloads,
  views,
  rating,
  imageName,
}) => {
  return (
    <View style={styles.gameListStyle}>
      <Image source={imageName} style={styles.gameImage} resizeMode="cover" />
      <View style={styles.imageContentBox}>
        <Text style={styles.imageContentText}>{title}</Text>
        <View style={{ flexDirection: "row", gap:50 }}>
        <Text style={styles.imageContentText}>
          {downloads} <FontAwesome name="download" size={15} color="white" />
        </Text>
        <Text style={styles.imageContentText}>
          {views} <FontAwesome name="eye" size={15} color="white" />
        </Text>
        </View>
      </View>
      <View style={styles.ratingContentBox}>
        <Text style={styles.imageContentText}>{rating} <FontAwesome name="star" size={15} color="orange" /></Text>
      </View>
    </View>
  );
};

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.imageContentText}>Populer Games</Text>
      <View style={{ flexDirection: "row" }}>
        <FlashList
          data={data}
          renderItem={({ item }) => <ListItem {...item} />}
          estimatedItemSize={10}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    padding: 10,
  },
  gameListStyle: {
    height: 150,
    width: 150,
    backgroundColor: "red",
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
  },
  gameImage: {
    width: 150,
    height: 150,
    position: "absolute",
    borderRadius: 10,
  },
  imageContentBox: {
    top: 110,
    position: "relative",
    left: 10,
  },
  imageContentText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  ratingContentBox:{
    bottom: 30,
    position: "relative",
    left: 120,
  }
});
