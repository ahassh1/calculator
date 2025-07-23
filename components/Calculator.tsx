import { Colors } from '@/utils/Colors';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';

export default function Calculator() {
  const [firstValue, setFirstValue]=useState('');
  const [displayValue, setDisplayValue]= useState('0');
  const [operator, setOperator]= useState('');
  const handleNumberInput = (num: string) => {
  if (displayValue == '0') {
    setDisplayValue(num);
  } else {
    setDisplayValue(displayValue + num);
  }
};

const handleOperatorInput = (operator:string) =>{
  setOperator(operator);
  setFirstValue(displayValue);
  setDisplayValue('0');
}

const handleCalcutation =()=>{
  const num1= parseFloat(firstValue);
  const num2= parseFloat(displayValue);

  if(operator === '+'){
    setDisplayValue( (num1 + num2).toString());
  }else if(operator === '-'){
    setDisplayValue( (num1 - num2).toString());
  }else if(operator === '*'){
    setDisplayValue((num1 * num2).toString());
  }else if(operator === '/'){
    setDisplayValue((num1 /num2).toString());
  }else if(operator === '%'){
    setDisplayValue((num1 % num2).toString());
  }
  setOperator('');
  setFirstValue('')
}

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={{fontSize:30, fontWeight:'300'}}>{firstValue + operator}</Text>
        <Text style={{fontSize:59, fontWeight:'400'}}>{displayValue}</Text>
      </View>
      <View style={styles.keypad}>
     <Button title='C' type='top' onPress={() => handleOperatorInput('C')}/>
     <Button title='⨂'type='top' oonPress={() => handleOperatorInput('⨂')}/>
     <Button title='%'type='top' oonPress={() => handleOperatorInput('%')}/>
     <Button title='÷'type='right' onPress={() => handleOperatorInput('÷')}/>
     <Button title='7' type='number'onPress={() => handleNumberInput('7')}/>
     <Button title='8' type='number' onPress={() => handleNumberInput('8')}/>
     <Button title='9' type='number' onPress={() => handleNumberInput('9')}/>
     <Button title='X' type='right' onPress={() => handleOperatorInput('X')}/>
     <Button title='6' type='number' onPress={() => handleNumberInput('6')}/>
     <Button title='5' type='number' onPress={() => handleNumberInput('5')}/>
     <Button title='4' type='number' onPress={() => handleNumberInput('4')}/>
     <Button title='-' type='number' onPress={() => handleOperatorInput('-')}/>
     <Button title='1' type='number' onPress={() => handleNumberInput('1')}/>
     <Button title='2' type='number' onPress={() => handleNumberInput('2')}/>
     <Button title='3' type='number' onPress={() => handleNumberInput('3')}/>
     <Button title='+' type='right' onPress={() => handleOperatorInput('+')}/>
     <Button title='0' type='number' onPress={() => handleNumberInput('0')}/>
     <Button title='00' type='number' onPress={() => handleNumberInput('00')}/>
     <Button title='.' type='number' onPress={() => handleNumberInput('.')}/>
     <Button title='=' type='right' onPress={() => handleOperatorInput('=')}/>
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