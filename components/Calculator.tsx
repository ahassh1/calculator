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
     <Button title='C' type='top'/>
     <Button title='⨂'type='top'/>
     <Button title='%'type='top'/>
     <Button title='÷'type='right'/>
     <Button title='7' type='number'/>
     <Button title='8' type='number'/>
     <Button title='9' type='number'/>
     <Button title='X' type='right'/>
     <Button title='6' type='number'/>
     <Button title='5' type='number'/>
     <Button title='4' type='number'/>
     <Button title='-' type='number'/>
     <Button title='1' type='number'/>
     <Button title='2' type='number'/>
     <Button title='3' type='number'/>
     <Button title='+' type='right'/>
     <Button title='0' type='number'/>
     <Button title='00' type='number'/>
     <Button title='.' type='number'/>
     <Button title='=' type='right'/>
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