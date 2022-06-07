import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import UserNavigation from '../user/UserNavigation'
import ProductNavigation from '../product/ProductNavigation'
import { UserConText } from '../user/UserContext';

export default function Navigation (props) {
    const {isLoggedIn} =  useContext(UserConText);
    return (
        <NavigationContainer>
            {
                isLoggedIn == true ? 
                <ProductNavigation/> : 
                <UserNavigation/>
            }
        </NavigationContainer>
    )
}


