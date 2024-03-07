import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import { Loading, CustomButton, CustomTextInput } from '../components';

const LoginPage = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <View style={styles.container}>

      <View style={styles.textContainer}>

        <Text style={styles.firstText}>Welcome to back!</Text>
        <Text style={styles.secondText}>Login to your account!</Text>

      </View>

      {/* <Image 
        source={require('../../assets/images/loginIcon.jpg')}
        style={styles.loginIconStyle}/> */}

      <CustomTextInput
        isSecureText={false}
        handleOnChangeText={setEmail}
        handleValue={email}
        handlePlaceholder="Email"
      />

      <CustomTextInput
        isSecureText={true}
        handleOnChangeText={setPassword}
        handleValue={password}
        handlePlaceholder="Password"
      />

      <Pressable
        onPress={() => setIsLoading(true)}
        style={({ pressed }) => [{
          backgroundColor: pressed ? '#8a2be2' : '#9932cc'
        }, styles.buttonStyle]}>

        <Text style={styles.buttonTextStyle}>Login</Text>

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

      <Pressable
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={{
          marginTop: 20,
          textDecorationLine: 'underline',
          color: 'darkblue',
          fontWeight: 'bold'
        }}>Don't have an account yet?</Text>
      </Pressable>

      {isLoading ? <Loading changeIsLoading={() => setIsLoading(false)} /> : null}

    </View>
  );
}
export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: '80%',
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonTextStyle: {
    fontWeight: 'bold',
    color: 'white',
  },
  loginIconStyle: {
    resizeMode: 'contain',
    width: '100%',
    height: '40%'
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
});
