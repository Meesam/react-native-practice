import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const DrawerHeader = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.circle} source={require('@/assets/images/user.png')}  />
      </View>
    </View>
  )
}

export default DrawerHeader

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red',
    justifyContent:"center",
    alignItems:"center",
    height:100,
    marginBottom:50
  },
  circle:{
    height:100,
    width:100,
    backgroundColor:'#FFF',
    borderRadius:50,
    marginTop:100
  }

})