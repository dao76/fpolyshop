import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './screens/Login'
import Welcome from './screens/wecome'
import Register from './screens/Register'



import product from '../product/ProductNavigation'
const Stack = createStackNavigator()

const UserNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='product' component={product} />
        </Stack.Navigator>
    )
}

export default UserNavigation
