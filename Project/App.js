import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function App() {

  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [result, setResult] = useState('')

  return (
    <View style={styles.container}>

      <Text style={{marginBottom: 20}}>Welcome {result}</Text>

      <Text style={{fontWeight:'bold'}}>Name</Text>

      <TextInput 
        style={styles.textInputStyle}
        placeholder='Enter Your Name'
        onChangeText={setName}
        value={name}
      />

      <Text style={{fontWeight:'bold'}}>Last Name</Text>

      <TextInput 
        style={styles.textInputStyle}
        placeholder='Enter Your Last Name'
        onChangeText={setLastName}
        value={lastname}
      />

      <Pressable 
      onPress={() => setResult(name + ' ' + lastname)}
      style= {({pressed}) => [{
        backgroundColor: pressed ? 'lightblue' : 'transparent'
      },styles.buttonStyle]}>
        <Text style={styles.buttonTextStyle}>Save</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    borderWidth: 1,
    width: '80%',
    height: 50,
    marginVertical: 10,
    borderRadius: 50,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  buttonStyle: {
    borderWidth:2,
    width: '80%',
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  buttonTextStyle: {
    fontWeight: 'bold'
  }
});
