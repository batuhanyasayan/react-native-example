import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Loading from '../components/Loading'

const SignupPage = () => {

  const [isLoading, setIsLoading] = useState(false)

  return (
    <View style={styles.container}>

      <View style= {styles.textContainer}>
      
        <Text style={styles.firstText}>Hi!</Text>
        <Text style={styles.secondText}>Create a new account!</Text>

      </View>

      <TextInput style={styles.inputStyle} placeholder='Username'/>
      <TextInput style={styles.inputStyle} placeholder='Email' inputMode='email'/>
      <TextInput style={styles.inputStyle} placeholder='Password' secureTextEntry={true}/>
      
      <Pressable 
        onPress={() => setIsLoading(true)}
        style= {({pressed}) => [{
            backgroundColor: pressed ? '#8a2be2' : '#9932cc'
        },styles.signupButton]}>
        <Text>Sign Up</Text>
      </Pressable>

      { isLoading ? <Loading changeIsLoading={() => setIsLoading(false)}/> : null}


    </View>
  )
}

export default SignupPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '80%',
    marginBottom: 30
  },
  firstText: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  secondText:{
    fontSize: 30,
    fontWeight: '500'
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 50,
    width: '80%',
    height: 50,
    marginVertical: 10,
    textAlign: 'center'
  },
  signupButton: {
    borderWidth: 1,
    borderRadius: 50,
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
})