import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { useState, useMemo, useEffect } from 'react';
import common from 'common';


export default Feature2 = () => {
  const [number1, setNumber1] = useState('0');
  const [number2, setNumber2] = useState('0');
  const commonModule = common(); 

  const result = useMemo(() => commonModule.multiply(number1, number2));

  useEffect(() => {
  console.log(`6 / 2 = ${commonModule.divide(6, 2)}`);
  console.log(`6 + 2 = ${commonModule.add(6, 2)}`);
  console.log(`num = ${commonModule.num}`);
  console.log(`text = ${commonModule.text}`);
  console.log("the following two values should not be accessible:");
  console.log(`num = ${commonModule.num2}`);
  console.log(`text = ${commonModule.text2}`);
  }, []);


  return (
<View>
  <Text style={styles.title}>Imports a function from the 'common' package, which is another package in this project</Text>
  <Text style={styles.heading}>Multiply numbers</Text>

  <TextInput
        style={styles.input}
        onChangeText={(val) => setNumber1(val)}
        editable={true}
        value={number1}
        placeholder="First number"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={(val) => setNumber2(val)}
        editable={true}
        value={number2}
        placeholder="Second number"
        keyboardType="numeric"
      />
      <Text style={styles.heading}>Result</Text>
      <TextInput
        style={styles.input}
        value={result}
        placeholder="Result"
        keyboardType="numeric"
      />
</View>
  )
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
  },
  title: {
    marginVertical: 20,
    fontSize: 18,
    textAlign: 'center'
  },
  heading: {
    fontSize: 16,
    margin: 12,
    paddingTop:50
  }
});