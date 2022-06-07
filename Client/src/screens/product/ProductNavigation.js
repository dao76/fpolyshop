import React from 'react'
import { View, Text, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStack from './screens/HomeStack'
import Cart from './screens/Cart'
import Profile from './screens/Profile'
import Search from './screens/Search'
import Voucher from './screens/Voucher'

const Tab = createBottomTabNavigator();

const ProductNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: () => {
                    if (route.name == 'HomeStack') {
                        return <Image source={require('../../assets/images/home.png')} />
                    } 
                    else if (route.name == 'Cart') {
                        return <Image source={require('../../assets/images/cart.png')} />
                    }
                    else if (route.name == 'Voucher') {
                        return <Image source={require('../../assets/images/vocherne.png')} />
                    }else if (route.name == 'Search') {
                        return <Image source={require('../../assets/images/seachdmm.png')} />
                    }else if (route.name == 'Profile') {
                        return <Image source={require('../../assets/images/user.png')} />
                    }
                },
               
                headerShown: false
            })}

        >
            <Tab.Screen name='HomeStack' component={HomeStack} />
            <Tab.Screen name='Cart' component={Cart} />
            <Tab.Screen name='Voucher' component={Voucher} />
            <Tab.Screen name='Search' component={Search} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}

export default ProductNavigation
