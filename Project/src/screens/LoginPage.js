import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import Loading from '../components/Loading';

const LoginPage = ({navigation}) => {

  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <View style={styles.container}>

      <Image 
        source={require('../../assets/images/loginIcon.jpg')}
        style={styles.loginIconStyle}/>


      <Text style={{fontWeight:'bold'}}>Enter Your Email</Text>

      <TextInput 
        style={styles.textInputStyle}
        placeholder='Email'
        inputMode='email'
        onChangeText={setName}
        value={name}
      />

      <Text style={{fontWeight:'bold'}}>Enter Your Password</Text>

      <TextInput 
        style={styles.textInputStyle}
        placeholder='Password'
        secureTextEntry={true}
        onChangeText={setLastName}
        value={lastname}
      />

      <Pressable 
        onPress={() => setIsLoading(true)}
        style= {({pressed}) => [{
            backgroundColor: pressed ? '#8a2be2' : '#9932cc'
        },styles.buttonStyle]}>

        <Text style={styles.buttonTextStyle}>Login</Text>

      </Pressable>

      <Pressable 
        onPress={() => navigation.navigate('SignUp')}>
        <Text style= {{
          marginTop: 20, 
          textDecorationLine: 'underline', 
          color: 'darkblue',
          fontWeight: 'bold'
        }}>Don't have an account yet?</Text>
      </Pressable>

      { isLoading ? <Loading changeIsLoading={() => setIsLoading(false)}/> : null}

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
  welcomeText: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20
  },
  textInputStyle: {
    borderWidth: 1,
    width: '80%',
    height: 50,
    marginVertical: 10,
    borderRadius: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    width: '80%',
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  buttonTextStyle: {
    fontWeight: 'bold',
    color: 'white'
  },
  loginIconStyle: {
    resizeMode: 'contain',
    width: '100%',
    height: '50%',
  }
});
