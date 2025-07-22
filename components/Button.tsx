
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = () => {
  return (
        <TouchableOpacity  style={styles.button} onclick={()=>{}}>
              <Text style={{fontSize:35}}>0</Text>
           </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
 button:{
    height:70,
    width:70,
    borderRadius:10,
    padding:10,
    alignItems:'center',
    justifyContent:'center'
 }    

})