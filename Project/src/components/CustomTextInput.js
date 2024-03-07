import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({isSecureText, handleOnChangeText, handleValue, handlePlaceholder}) => {
  return (
    <TextInput 
        style={styles.textInputStyle}
        placeholder={handlePlaceholder}
        onChangeText={handleOnChangeText}
        value={handleValue}
        secureTextEntry={isSecureText}
      />
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
  textInputStyle: {
    borderBottomWidth: 0.5,
    width: '80%',
    height: 50,
    marginVertical: 5,
    borderRadius: 50,
    paddingLeft: 25,
    fontWeight: 'bold',
  }
})