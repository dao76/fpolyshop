
import { StyleSheet, Text, View, Image ,ActivityIndicator} from 'react-native'
import React from 'react'

export default function Splash({navigation}) {
    setTimeout(() => {
        navigation.navigate('Login');
    }, 10000);

   
        return (
            <View style={styles.cotainer}>
                <Image style={styles.img_Logo} source={require('./../../../assets/images/logone.png')}/>
                <View style={styles.Loading_cotainer}>
                  <Text style={styles.txt_Loading}>Loading ...</Text>
                  <ActivityIndicator color='#2ed573' size='large'/>
                </View>
            </View>
        );
    
    
}

const styles = StyleSheet.create({
    txt_Loading: {
        textAlign: 'center',
    },
    Loading_cotainer: {
        width: '100%',
        marginTop: 300
    },
    img_Logo: {
        width: 320,
        height: 100,
        marginTop: 300,
        marginHorizontal: 80,
        right: 50,
    },
    cotainer: {
        backgroundColor: '#FFFFFF', 
        width: '100%', 
        height: '100%'
    }
})