import { StyleSheet, Text, View, TextInput, Pressable, ToastAndroid,Image } from 'react-native'
import React, { useState, useContext } from 'react'
import { UserConText } from '../UserContext';
const Register = (props) => {
    const { navigation } = props
    const [username, setUsername] = useState('fpoly@gmail.com')
    const [password, setPassword] = useState('123')
    const [confirm_password, setConfirm_password] = useState('123');
    const { onRegister } = useContext(UserConText);


    const register = async () => {
        if(password != confirm_password){
          ToastAndroid.show('Xac nhan mat khau khong dung', ToastAndroid.CENTER);
          return;
        }
        const res = await onRegister(username, password, confirm_password);
        if (res == true) {
            ToastAndroid.show('Đăng ký thành công', ToastAndroid.CENTER);

          navigation.navigate('Login');
        } else {
          ToastAndroid.show('Dang ky khong thanh cong', ToastAndroid.CENTER);
        }
      }
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image style={styles.logologin} source={require('./../../../assets/images/logone.png')} />
            </View>
            <View style={styles.text}>
                <Text style={styles.textWelcome}>Welcome to the shoope shop</Text>
                <Text style={styles.textSignin}>register in to continue</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputEmailContainer}>
                    <Image style={styles.iconEmail} source={require('./../../../assets/images/Message.png')} />
                    <TextInput style={styles.inputEmail} placeholder='Your Email'
                    value={username}
                     onChangeText={setUsername} />
                </View>
                <View style={styles.inputPasswordContainer}>
                    <Image style={styles.iconPassword} source={require('./../../../assets/images/Password.png')} />
                    <TextInput style={styles.inputPassword} placeholder='Password'
                    value={password}
                    onChangeText={setPassword} />
                </View>
                <View style={styles.inputPasswordContainer}>
                    <Image style={styles.iconPassword} source={require('./../../../assets/images/Password.png')} />
                    <TextInput style={styles.inputPassword} placeholder='Password'
                    value={confirm_password}
                    onChangeText={setConfirm_password} />
                </View>
                <Pressable
                    onPress={register}
                    style={styles.pressableSignin}>
                    <Text 
                    
                    style={styles.textPressableSignin}>Register</Text>
                </Pressable>
            </View>
            
           
            
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    Container :{
        backgroundColor:'#FFFFF0',
    },
    text: {
        justifyContent: 'center',
        top: 210,
alignItems: 'center'
    },
    textRegister: {
        fontSize: 12,
        color: '#40BFFF',
        fontWeight: 'bold',
    },
    textAccount: {
        fontSize: 12,
        color: '#9098B1',
    },
    textForgot: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#40BFFF',
        marginTop: 32,
    },
    footerContainer: {
        alignItems: 'center',
        top:235,
    },
    textFacebook: {
        fontSize: 14,
        color: '#9098B1',
    },
    buttonFacebook: {
        borderWidth: 1,
        padding: 20,
        paddingHorizontal: 40,
        borderColor: '#EBF0FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconFacebook: {
        position: 'absolute',
        top: 20,
        left: 10
    },
    buttonFacebookContainer: {
        position: 'relative',
        top:270
    },
    textGoogle: {
        fontSize: 14,
        color: '#9098B1',
    },
    buttonGoogle: {
        borderWidth: 1,
        padding: 20,
        paddingHorizontal: 40,
        borderColor: '#EBF0FF',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    iconGoogle: {
        position: 'absolute',
        top: 20,
        left: 10
    },
    buttonGoogleContainer: {
        position: 'relative',
        marginBottom: 10,
        top:280
    },
    pressableContainer: {
        paddingHorizontal: 16,
        top:-40,
    },
    textOr: {
        color: '#9098B1',
        fontSize: 14,
        fontWeight: 'bold',
        top:299
    },
    orContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 21,
        top:-40,
    },
    textPressableSignin: {
        fontWeight: 'bold',
        fontSize:15,
        color: '#FFFFFF',
        
    },
    pressableSignin: {
        backgroundColor: '#40BFFF',
        top: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height:50
    },
    iconPassword: {
        position: 'absolute',
        top: 14,
        left: 10
    },
    inputPassword: {
        borderWidth: 1,
        padding: 10,
        paddingHorizontal: 40,
        borderColor: '#EBF0FF',
    },
    inputPasswordContainer: {
        position: 'relative'
    },
    iconEmail: {
        position: 'absolute',
        top: 14,
        left: 10
    },
    inputEmail: {
        borderWidth: 1,
        padding: 10,
        paddingHorizontal: 40,
        borderColor: '#EBF0FF',
    },
    inputEmailContainer: {
        position: 'relative',
    },
    inputContainer: {
        paddingHorizontal: 16,
        height: '25%',
        justifyContent: 'space-between',
        top:240,
    },
    textSignin: {
        color: '#9098B1',
        fontSize: 12,
        top:-20,
    },
    textWelcome: {
        fontWeight: 'bold',
        fontSize: 16,
        top:-30,
    },
    headerContainer: {

        justifyContent: 'center',
        top: 200,
        alignItems: 'center'
    },
    logologin:{
        top:-50,
        resizeMode:'cover',
        width: 160,
        height: 50,
        position:'relative',
        marginTop: -10,
        marginHorizontal: 80
    },

})