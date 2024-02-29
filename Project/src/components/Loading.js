import { StyleSheet, Text, View, ActivityIndicator, Pressable } from 'react-native'
import React from 'react'

const Loading = (props) => {
  return (
    <View style={styles.loadingContainer}>
        <Pressable 
            onPress={() => props.changeIsLoading()}
            style={styles.closeButton}>
            <Text style={styles.closeButtonText}>X</Text>
        </Pressable>
        <ActivityIndicator size={'large'} color={'khaki'}/>
        <Text style={styles.loadingText}>Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    loadingContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    closeButton: {
        backgroundColor: 'white',
        width: 30,
        height: 30,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 55,
        right: 30
    },
    closeButtonText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})