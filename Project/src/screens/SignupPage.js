import { Pressable, StyleSheet, Text, TextInput, View, Image, Linking } from 'react-native'
import React, { useState } from 'react'
import Loading from '../components/Loading'
import { CustomTextInput } from '../components'

const SignupPage = ({navigation}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <View style={styles.container}>

      <View style={styles.textContainer}>

        <Text style={styles.firstText}>Hi!</Text>
        <Text style={styles.secondText}>Create a new account!</Text>

      </View>

      <CustomTextInput
        isSecureText = {false}
        handleOnChangeText = {setEmail}
        handleValue = {email}
        handlePlaceholder = "Email"
      />

      <CustomTextInput
        isSecureText = {true}
        handleOnChangeText = {setPassword}
        handleValue = {password}
        handlePlaceholder = "Password"
      />
      
      <CustomTextInput
        isSecureText = {true}
        handleOnChangeText = {setConfirmPassword}
        handleValue = {confirmPassword}
        handlePlaceholder = "Confirm Password"
      />

      <Pressable
        onPress={() => setIsLoading(true)}
        style={({ pressed }) => [{
          backgroundColor: pressed ? '#8a2be2' : '#9932cc'
        }, styles.signupButton]}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Sign Up</Text>
      </Pressable>

      <Text style={{ marginTop: 20 }}>- or you can also -</Text>

      <View style={styles.iconsStyle}>

        <Pressable onPress={() => { Linking.openURL('https://www.facebook.com/') }}>
          <Image
            source={require('../../assets/images/facebook.png')}
            style={styles.facebookIcon}
          />
        </Pressable>

        <Pressable onPress={() => { Linking.openURL('https://www.google.com/') }}>
          <Image
            source={require('../../assets/images/google.png')}
            style={styles.googleIcon}
          />
        </Pressable>

      </View>

      {isLoading ? <Loading changeIsLoading={() => setIsLoading(false)} /> : null}

      <Pressable
        onPress={() => navigation.navigate('Login')}>
        <Text style={{
          marginTop: 20,
          textDecorationLine: 'underline',
          color: 'darkblue',
          fontWeight: 'bold'
        }}>Do you already have an account?</Text>
      </Pressable>

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
  secondText: {
    fontSize: 30,
    fontWeight: '500'
  },
  signupButton: {
    borderRadius: 50,
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  facebookIcon: {
    width: 50,
    height: 50,
    marginRight: 30
  },
  googleIcon: {
    width: 50,
    height: 50
  },
  iconsStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  }
})