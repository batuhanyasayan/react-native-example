import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Name</Text>

      <TextInput 
        style={styles.textInputStyle}
        placeholder='Enter Your Name'
      />

      <Text>Last Name</Text>

      <TextInput 
        style={styles.textInputStyle}
        placeholder='Enter Your Last Name'
      />

      <Pressable style= {styles.buttonStyle}>
        <Text>Save</Text>
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
    height: 30,
    marginVertical: 10,
    borderRadius: 50,
    textAlign: 'center'
  },
  buttonStyle: {
    borderWidth: 1,
    width: '60%',
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue'
  }
});
