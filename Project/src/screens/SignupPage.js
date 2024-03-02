import { Pressable, StyleSheet, Text, TextInput, View, Image, Linking } from 'react-native'
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
        <Text style={{color: 'white', fontWeight: 'bold'}}>Sign Up</Text>
      </Pressable>

      <Text style={{marginTop: 20}}>- or you can also -</Text>

      <View style={styles.iconsStyle}>

        <Pressable onPress = {() => {Linking.openURL('https://www.facebook.com/')}}>
          <Image 
            source={require('../../assets/images/facebook.png')} 
            style={styles.facebookIcon}
          />
        </Pressable>

        <Pressable onPress = {() => {Linking.openURL('https://www.google.com/')}}>
          <Image 
            source={require('../../assets/images/google.png')} 
            style={styles.googleIcon}
          />
        </Pressable>

      </View>
      
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
    marginVertical: 5,
    textAlign: 'center'
  },
  signupButton: {
    borderWidth: 1,
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