import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, PagerView, Image, Pressable,ScrollView,Form,SafeAreaView,Button,TextInput,ToastAndroid} from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

import { ProductContext } from '../ProductConText';

const PartiaView = (props) => {
    const { item, navigation } = props
    const { price, _id } = item
    const { onCartadd } = useContext(ProductContext);

    const[quantity,setQuantity] = useState(item.quantity)

    const onNumberChange = (isAdd) => {
        if (isAdd == true) {
            setQuantity(quantity + 1)
        } else if (isAdd == false && quantity >= 1) {
            setQuantity(quantity - 1)
        }
    }
    const addProductToCart = async () => {
        if(quantity >= 1 ){
            let body = item
            body = {...body, quantity: quantity}
            console.log('item: ', + JSON.stringify(body));
           const status = await onCartadd(body);
           if (status){
            ToastAndroid.show('Đã thêm vào đơn hàng', ToastAndroid.BOTTOM)
           }else{
            ToastAndroid.show('Đã thêm vào đơn hàng', ToastAndroid.BOTTOM)
           }
        }
  
    }
    const [shouldShow, setShouldShow] = useState(false);


// cái đo là lúc mình vào chi tiết chọn số lượng mà nó vẫn ch bắt đc á
    return (
        <>
            <View style={styles.productInfoContainer}>             
                <View style={styles.productDetail}>
                    <Text style={styles.productDetailText}>Gía Tiền</Text>
                    <Text style={styles.productDetailText}>{item.price}</Text>
                </View>
                <View style={styles.productDetail}>
                    <Text style={styles.productDetailText}>Danh mục</Text>
                    <Text style={styles.productDetailText}>iphone</Text>
                </View>
                <View style={styles.productDetail}>
                    <Text style={styles.productDetailText}>Thông Tin sản phẩm</Text>
                
                </View>
                <Text style={styles.productDetailText}>{item.description}</Text>
            </View>
            <View style={styles.cartProcessContainer}>
                <View style={styles.processQuantity}>
                    <Text style={styles.quantityText}>Đã chọn {item.quantity} sản phẩm</Text>
                    <View style={styles.quantityAction}>
                        <Text onPress={() => onNumberChange(false)} style={styles.removeAction}>-</Text>
                        <Text style={styles.quantity}>{quantity}</Text>
                        <Text onPress={() => onNumberChange(true)} style={styles.addAction}>+</Text>
                    </View>
                </View>
                <View style={styles.processTotal}>
                    <Text style={styles.totalText}>Tạm tính</Text>
                    <Text style={styles.total} >{price * quantity } đ</Text>
                </View>
            </View>
            <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/*Here we will return the view when state is true 
        and will return false if state is false*/}
        {shouldShow ? (
          <View style={styles.productInfoContainer}>             
          <View style={styles.productDetail}>
              <Text style={styles.productDetailText}>Khi Đặt hàng thành công bạn sẽ nhận vocher có giá trị 5%</Text>
              
          </View>
          <View style={styles.productDetail}>
              <Text style={styles.productDetailText}>Nếu mua trên 2 sản phâm sẽ được free ship toàn quốc</Text>
              
          </View>
          <View style={styles.productDetail}>
              <Text style={styles.productDetailText}>giao hàng nhanh trong vòng 24h</Text>
          
          </View>
      </View>
        ) : null}
      
        
        <View style={styles.buttonContainer1}>
                <Pressable style={styles.button}
                onPress={() => setShouldShow(!shouldShow)}>
                    <Text style={styles.buttonText1}>Xem thêm</Text>
                </Pressable>
            </View>
      </View>
    </SafeAreaView>
    <View style={styles.inputContainer}>
    <Text style={styles.productTitle12}>Thông Tin Liên Hệ Giao Hàng</Text>
                <View style={styles.inputEmailContainer}>
                    <Image style={styles.iconEmail} source={require('./../../../assets/images/user.png')} />
                    <TextInput style={styles.inputEmail} placeholder='Họ Và tên anh chị (bắt buộc)'
                     />
                </View>
                <View style={styles.inputEmailContainer}>
                    <Image style={styles.iconEmail} source={require('./../../../assets/images/phone.png')} />
                    <TextInput style={styles.inputEmail} placeholder='Số Điện Thoại (bắt buộc)'
                     />
                </View>
                <View style={styles.inputEmailContainer}>
                    <Image style={styles.iconEmail} source={require('./../../../assets/images/Message.png')} />
                    <TextInput style={styles.inputEmail} placeholder='email liên hệ '
                     />
                </View>
                
               
               
            </View>
            <View style={styles.buttonContainer}>
                <Pressable onPress={addProductToCart} style={[styles.button, quantity > 0 ? styles.changeBackgroundColor : null]}>
                    <Text style={styles.buttonText}>Mua Ngay</Text>
                </Pressable>
            </View>
            
        </>
    )
}
const Detail = (props) => {
    const { navigation, route: { params: { item } } } = props

    return (
        <ScrollView>
        <View style={styles.container}>
            
        <Text style={styles.productTitle1}>Chi tiết sản phẩm</Text>
            <Image style={{ alignSelf: 'center', height: 200, width: 150, top:30, right: -15 }} resizeMode='cover' source={{uri: item.image}} />
            <View style={styles.productNameContainer}>
                <Text style={styles.productName}>{item.name}</Text>
            </View>
            <PartiaView item={item} navigation={navigation} />
        </View>
        </ScrollView>
    )
}

export default Detail

const styles = StyleSheet.create({
   
    iconEmail: {
        position: 'absolute',
        top: 14,
        left: 10
    },
    inputEmail: {
        borderWidth: 1,
        padding: 15,
        paddingHorizontal: 40,
        borderColor: '#EBF0FF',
    },
    inputEmailContainer: {
        position: 'relative',
    },
    inputContainer: {
        paddingHorizontal: 16,
        height: 250,
        justifyContent: 'space-between',
        top:50,
    },

    button1:{
   color:'red'
    },
    changeBackgroundColor: {
        backgroundColor: '#40BFFF',
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        textTransform: 'uppercase',
        
    },
    buttonText1: {
        fontSize: 16,
        color: 'white',
        textTransform: 'uppercase',
        
    },
  
    button: {
        backgroundColor:'#ABABAB',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        paddingHorizontal: 24,
        height: 50,
        marginTop:60,
    },
    buttonContainer1: {
        paddingHorizontal:110,
        height: 30,
        marginTop: 16,
        right:100,
        
        
    },
    total: {
        marginTop: 4,
        textAlign: 'right',
        fontSize: 24,
        fontWeight: '500',
    },
    totalText: {
        color: 'black',
        opacity: 0.6,
    },
    processTotal: {

    },
    addAction: {
        borderRadius: 5,
        borderWidth: 0.5,
        width: 22.5,
        height: 22.5,
        textAlign: 'center',
        lineHeight: 20.5,
        color: 'black',
    },
    quantity: {

    },
    removeAction: {
        borderRadius: 5,
        borderWidth: 0.5,
        width: 22.5,
        height: 22.5,
        textAlign: 'center',
        lineHeight: 20.5,
        color: 'black',
    },
    quantityAction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    quantityText: {
        fontSize: 14,
        opacity: 0.6,
    },
    processQuantity: {

    },
    cartProcessContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    productDetailText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#3A3A3A',
        
    },
    productDetail: {
        borderBottomColor: '#221F1F',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        left:-15,
        width:300
    },
    productTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#3A3A3A',
        marginTop: 15,
        borderBottomColor: '#221F1F',
        borderBottomWidth: 0.5,
    },
    productTitle1: {
        fontSize: 16,
        fontWeight: '500',
        color: '#3A3A3A',
        marginTop: 15,
        borderBottomColor: '#221F1F',
        right:-120,
        top:15
    },
    productTitle12: {
        fontSize: 16,
        fontWeight: '500',
        color: '#3A3A3A',
        marginTop: 15,
        borderBottomColor: '#221F1F',
        right:-80,
        top:-20
    },
    productPrice: {
        fontSize: 24,
        fontWeight: '500',
        color: '#007537',
    },
    productInfoContainer: {
        paddingHorizontal: 48,
        paddingVertical: 32,
        width:500
    },
    productImage: {
        width: '100%',
        height: '100%',
    },
    productImagesPager: {
        flex: 1,
    },
    productImagesContainer: {
        width: '100%',
        height: 230,
    },
    productNameContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        top:40
    },
    productName: {
        fontSize: 20,
        fontWeight: '500',
        color:'#FF0000',
    },
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
    }
})