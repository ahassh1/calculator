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
     <Button title='C'/>
     <Button title='⨂'/>
     <Button title='%'/>
     <Button title='÷'/>
     <Button title='7'/>
     <Button title='8'/>
     <Button title='9'/>
     <Button title='X'/>
     <Button title='6'/>
     <Button title='5'/>
     <Button title='4'/>
     <Button title='-'/>
     <Button title='1'/>
     <Button title='2'/>
     <Button title='3'/>
     <Button title='+'/>
     <Button title='0'/>
     <Button title='00'/>
     <Button title='.'/>
     <Button title='='/>
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
        justifyContent:'flex-end',
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