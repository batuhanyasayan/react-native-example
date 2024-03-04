import React from 'react'
import AuthStack from './AuthStack'
import UserStack from './UserStack'
import { NavigationContainer } from '@react-navigation/native'

const RootNavigation = () => {

    const isAuth = false

    return (
        <NavigationContainer>
            {
                !isAuth
                    ? <AuthStack />
                    : <UserStack />
            }
        </NavigationContainer>
    )
}

export default RootNavigation