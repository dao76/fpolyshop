import { StyleSheet, Text, View, TextInput, Pressable, ToastAndroid,Image } from 'react-native'
import React, { useState, useContext } from 'react'
import { UserConText } from '../UserContext';

const Login = (props) => {
  const { navigation } = props;
  const { onLogin } = useContext(UserConText);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
      
   
    const res = await onLogin(username, password);
    console.log([res]);
  }

  
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Image source={require('./../../../assets/images/Icon.png')} />
        </View>
        <View style={styles.text}>
            <Text style={styles.textWelcome}>Welcome to Fpolyshop</Text>
            <Text style={styles.textSignin}>Sign in to continue</Text>
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
            <Pressable
             onPress={login}
                style={styles.pressableSignin}>
                <Text 
                

                style={styles.textPressableSignin}>Sign In</Text>
            </Pressable>
        </View>
        <View style={styles.orContainer}>
            <Text style={styles.textOr}>OR</Text>
        </View>
        <View style={styles.pressableContainer}>
            <View style={styles.buttonGoogleContainer}>
                <Image style={styles.iconGoogle} source={require('./../../../assets/images/Google.png')} />
                <Pressable style={styles.buttonGoogle}>
                    <Text style={styles.textGoogle}>Login with Google</Text>
                </Pressable>
            </View>
            <View style={styles.buttonFacebookContainer}>
                <Image style={styles.iconFacebook} source={require('./../../../assets/images/Facebook.png')} />
                <Pressable style={styles.buttonFacebook}>
                    <Text style={styles.textFacebook}>Login with facebook</Text>
                </Pressable>
            </View>
        </View>
        <View style={styles.footerContainer}>
            <Text style={styles.textForgot}>Forgot Password?</Text>
            <Text style={styles.textAccount}>Don’t have a account? <Text style={styles.textRegister}
            onPress={()=>navigation.navigate('Register')}>Register</Text></Text>
        </View>
    </View>
)
}

export default Login

const styles = StyleSheet.create({
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
    top:260
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
    top:270
},
textSignin: {
    color: '#9098B1',
    fontSize: 12,
},
textWelcome: {
    fontWeight: 'bold',
    fontSize: 16,
},
headerContainer: {

    justifyContent: 'center',
    top: 200,
    alignItems: 'center'
},

})