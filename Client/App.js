import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ProductNavigation from './src/screens/product/ProductNavigation'
import UserNavigation from './src/screens/user/UserNavigation'
import { UserConTextProvider } from './src/screens/user/UserContext'
import { ProductContextProvider } from './src/screens/product/ProductConText'
import AppNavigation from './src/screens/navigation/Navigation'

export default function App() {
  return (


    <UserConTextProvider>
      <ProductContextProvider>
        <AppNavigation/>

        
      </ProductContextProvider>
    </UserConTextProvider>

  );
}


