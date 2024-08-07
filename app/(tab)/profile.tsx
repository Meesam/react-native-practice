import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withSequence, withRepeat,withTiming } from 'react-native-reanimated'


const Profile = () => {
  const sharedWidth = useSharedValue(0)
  const offset = useSharedValue(0)
  const OFFSET = 20
  const TIME = 250
  const handlePress = ()=>{
    sharedWidth.value = withSpring(sharedWidth.value + 10)
  }

  const handlePressShake = ()=>{
     offset.value = withSequence(
       withTiming(-OFFSET, { duration: TIME }),
       withRepeat(withTiming(OFFSET, { duration: TIME/2 }), 5, true),
       withTiming(0,{duration:TIME})
     )
  }

  const animatedStyle = useAnimatedStyle(()=>({
     transform:[{
      translateX: withSpring(sharedWidth.value * 2)
    }]
  }))

  const shakeStyle = useAnimatedStyle(()=>({
    transform:[{
      translateX: offset.value
    }]
  }))
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
       <Animated.View style={[styles.box, animatedStyle]} />
       <Button title='Click me' onPress={handlePress} />
       <Animated.View style={[styles.box, shakeStyle]}>
         <Text>Shake</Text>
       </Animated.View>
       <Button title='Shake it' onPress={handlePressShake} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  box:{
    height: 50, 
    backgroundColor: 'violet', 
    marginBottom:20,
    width:50
  }
});