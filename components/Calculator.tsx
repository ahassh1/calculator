import { Colors } from '@/utils/Colors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Calculator() {
  return (
    <View style={styles.container}>
      <Text>Calculator</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.dark,
    }
})