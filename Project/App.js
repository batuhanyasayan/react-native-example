import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import Loading from './src/components/Loading';

export default function App() {

  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <View style={styles.container}>

      <Image 
        source={require('./assets/images/loginIcon.png')}
        style={styles.loginIconStyle}/>

      <Text style={styles.welcomeText}>WELCOME</Text>

      <Text style={{fontWeight:'bold', color: 'white'}}>Enter Your Email</Text>

      <TextInput 
        style={styles.textInputStyle}
        placeholder='Email'
        inputMode='email'
        onChangeText={setName}
        value={name}
      />

      <Text style={{fontWeight:'bold', color: 'white'}}>Enter Your Password</Text>

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
        backgroundColor: pressed ? 'lightblue' : 'khaki'
      },styles.buttonStyle]}>
        <Text style={styles.buttonTextStyle}>Login</Text>
      </Pressable>

      { isLoading ? <Loading changeIsLoading={() => setIsLoading(false)}/> : null}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: 'white',
    width: '80%',
    height: 50,
    marginVertical: 10,
    borderRadius: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  buttonStyle: {
    borderWidth:2,
    borderColor: 'white',
    width: '80%',
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  buttonTextStyle: {
    fontWeight: 'bold',
  },
  loginIconStyle: {
    width: 200,
    height: 100,
  }
});
