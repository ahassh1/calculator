import { Colors } from '@/utils/Colors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from './Button'

export default function Calculator() {
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={{fontSize:59, fontWeight:400}}>234354</Text>
      </View>
      <View style={styles.keypad}>
     <Button/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white,
    },
    display:{
        flex:1,
        backgroundColor: Colors.gray,
        paddingVertical:20,
        paddingHorizontal:40,
        justifyContent:'center',
        alignItems:'flex-end'
    },
    keypad:{
        flex:2,
        backgroundColor:'white',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        gap:30,
        padding:30
    }
})