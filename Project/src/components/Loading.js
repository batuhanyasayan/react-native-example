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
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    loadingContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeButton: {
        backgroundColor: 'black',
        width: 20,
        height: 20,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 55,
        right: 10
    },
    closeButtonText: {
        fontSize: 15,
        color: 'khaki'
    }
})