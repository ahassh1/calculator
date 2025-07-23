
import { Colors } from '@/utils/Colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({title,type, onpress}:{title: string, type:'top' | 'right' | 'number';
   onpress: Function
}) => {
  return (
        <TouchableOpacity  style={[styles.button, {
         backgroundColor:type=='top' ? Colors.btnDark : type=='right' ? Colors.btnRight : Colors.btnLight,
        }]} onclick={onpress}>
              <Text style={{fontSize:35,color: type == 'number' ? Colors.black :Colors.white}}>{title}</Text>
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
    justifyContent:'center',
    backgroundColor:Colors.dark
 }    

})