import { Colors } from '@/utils/Colors';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';

export default function Calculator() {
  const [firstValue, setFirstValue] = useState('');
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState('');

  const handleNumberInput = (num: string) => {
    if (num === '.' && displayValue.includes('.')) return;

    if (displayValue === '0' && num !== '.') {
      setDisplayValue(num);
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = (op: string) => {
    setOperator(op);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  const handleCalculation = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    let result = 0;

    if (operator === '+') result = num1 + num2;
    else if (operator === '-') result = num1 - num2;
    else if (operator === '*') result = num1 * num2;
    else if (operator === '/') result = num2 !== 0 ? num1 / num2 : NaN;
    else if (operator === '%') result = num1 % num2;

    setDisplayValue(result.toString());
    setOperator('');
    setFirstValue('');
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator('');
    setFirstValue('');
  };

  const handleDelete = () => {
    if (displayValue.length === 1) {
      setDisplayValue('0');
    } else {
      setDisplayValue(displayValue.slice(0, -1));
    }
  };

  const renderRow = (buttons: { title: string; type: any; onPress: () => void }[]) => (
    <View style={styles.row}>
      {buttons.map((btn, i) => (
        <Button key={i} title={btn.title} type={btn.type} onPress={btn.onPress} />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.topText}>{firstValue + (operator ? ' ' + operator : '')}</Text>
        <Text style={styles.mainText}>{displayValue}</Text>
      </View>

      <View style={styles.keypad}>
        {renderRow([
          { title: 'C', type: 'top', onPress: handleClear },
          { title: '⨂', type: 'top', onPress: handleDelete },
          { title: '%', type: 'top', onPress: () => handleOperatorInput('%') },
          { title: '÷', type: 'right', onPress: () => handleOperatorInput('/') },
        ])}
        {renderRow([
          { title: '7', type: 'number', onPress: () => handleNumberInput('7') },
          { title: '8', type: 'number', onPress: () => handleNumberInput('8') },
          { title: '9', type: 'number', onPress: () => handleNumberInput('9') },
          { title: 'X', type: 'right', onPress: () => handleOperatorInput('*') },
        ])}
        {renderRow([
          { title: '4', type: 'number', onPress: () => handleNumberInput('4') },
          { title: '5', type: 'number', onPress: () => handleNumberInput('5') },
          { title: '6', type: 'number', onPress: () => handleNumberInput('6') },
          { title: '-', type: 'right', onPress: () => handleOperatorInput('-') },
        ])}
        {renderRow([
          { title: '1', type: 'number', onPress: () => handleNumberInput('1') },
          { title: '2', type: 'number', onPress: () => handleNumberInput('2') },
          { title: '3', type: 'number', onPress: () => handleNumberInput('3') },
          { title: '+', type: 'right', onPress: () => handleOperatorInput('+') },
        ])}
        {renderRow([
          { title: '0', type: 'number', onPress: () => handleNumberInput('0') },
          { title: '00', type: 'number', onPress: () => handleNumberInput('00') },
          { title: '.', type: 'number', onPress: () => handleNumberInput('.') },
          { title: '=', type: 'right', onPress: handleCalculation },
        ])}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  display: {
    flex: 1,
    backgroundColor: Colors.gray,
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  topText: {
    fontSize: 24,
    color: '#888',
  },
  mainText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  keypad: {
    flex: 2,
    padding: 10,
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
});
