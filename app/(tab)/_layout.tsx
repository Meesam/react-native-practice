import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

const Tablayout = () => {
  return (
    <Tabs>
       <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon:({size,color})=>{
         return <FontAwesome name="home" color={'red'} size={25}/>
       } }} />
       <Tabs.Screen name="search" options={{ title: 'Search', tabBarIcon:({size,color})=>{
         return <FontAwesome name="search" color={'red'} size={25}/>
       } }} />
       <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon:({size,color})=>{
         return <FontAwesome name="user" color={'red'} size={25}/>
       } }} />
    </Tabs>
  )
}

export default Tablayout