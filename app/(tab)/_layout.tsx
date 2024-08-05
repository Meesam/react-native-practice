import { View, Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Feather, FontAwesome } from '@expo/vector-icons'


const LogoTitle: React.FC<any> = () => {
  return (
    <View style={styles.logoTitle}>
      <FontAwesome name="search" color={"gray"} size={20} />
      <TextInput style={styles.search} placeholder="Search" />
      <Feather name="more-vertical" size={20} color="gray" />
    </View>
  );
};
const Tablayout = () => {
  return (
    <Tabs>
       <Tabs.Screen name="index" options={{ title: 'Home', headerShadowVisible: true ,tabBarIcon:({size,color})=>{
         return <FontAwesome name="home" color={'blue'} size={25}/>
       } }} />
       <Tabs.Screen name="search" options={{ title: 'Search', tabBarIcon:({size,color})=>{
         return <FontAwesome name="search" color={'blue'} size={25}/>
       } }} />
       <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon:({size,color})=>{
         return <FontAwesome name="user" color={'blue'} size={25}/>
       } }} />
    </Tabs>
  )
}

export default Tablayout

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