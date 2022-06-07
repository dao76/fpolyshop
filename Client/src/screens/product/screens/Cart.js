import { StyleSheet, Text, View, FlatList, Image, Dimensions, Pressable, TextInput,SafeAreaView,Button } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../ProductConText';
const Cart = (props) => {
    const [shouldShow, setShouldShow] = useState(false);
    const { navigation } = props;
    const { getcartlist } = useContext(ProductContext);
    const [db, setDb] = useState([])
    const [refeshing, setRefeshing] = useState(false)
    
    useEffect(async () => {
        const res = await getcartlist();
        console.log('res', JSON.stringify(res));
        setDb(res)
        return () => {}
    }, [])
    const onRefresh = () => {
        setRefeshing(true)

        setRefeshing(false)
    }
    const renderItem = ({ item }) => {
        const { image, name, price, _id ,quantity } = item;
        return (
            <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} resizeMode='cover' source={{uri: item.image}} />
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.textNameContainer}>
                        <Text style={styles.textName}>{item.name}</Text>
                        
                    </View>
                    <View style={styles.giaContainer}>
                        <View>
                            <Text style={styles.giaGoc}>{item.price}đ</Text>
                        </View>
                        <View style={styles.quantityAction}>
                           
                            <Text
                                style={styles.quantity}>{quantity}</Text>
                            

                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        
        <View style={styles.container}>
            <Text style={styles.title}>You Cart</Text>
            <Text style={styles.title2}></Text>
            <FlatList
                data={db}
                renderItem={renderItem}
                style={styles.flatListContainer}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => Math.random()}
                refreshing={refeshing}
            onRefresh={onRefresh}
            />
            <View style={styles.container2}>
               
              
              
           
                <Pressable style={styles.buttonCheckout}>
                    <Text style={styles.textCheckout}>Thanh Toán</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    iconDelete: {
        width: 24,
        height: 24,
        marginLeft: 6
    },
    iconVector: {
        width: 24,
        height: 24,
    },
    textCheckout: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
    buttonCheckout: {
        backgroundColor: '#40BFFF',
        width: 330,
        height: 57,
        margin: 16,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 5

    },
    tongTien: {
        color: '#40BFFF',
        marginLeft: 150,
        fontSize: 12,
        fontWeight: 'bold',
        paddingVertical: 12,
    },
    giaTong: {
        width: 100,
        color: '#223263',
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 12,
        paddingVertical: 12,
    },
    tien: {
        marginLeft: 150,
        fontSize: 12,
        color: '#223263',
        paddingVertical: 12,
    },
    gia: {
        width: 100,
        color: '#9098B1',
        fontSize: 12,
        marginLeft: 12,
        paddingVertical: 12,
    },
    giaContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    giaSPContainer: {
        marginHorizontal: 16,
        marginTop: 16,

        borderColor: '#EBF0FF',
        borderRadius: 5,
        borderWidth: 1,
    },
    textCorrect: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FB7181',
        marginLeft: 16,
        marginTop: 8
    },
    textApply: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
    },
    buttonApply: {
        width: 87,
        backgroundColor: '#40BFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#9098B1',
        marginLeft: 16
    },
    textInputContainer: {
        width: '90%',
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,

        borderColor: '#EBF0FF',
        borderRadius: 5,
        borderWidth: 1,
    },
    container2: {
        backgroundColor: 'white',
        width: '100%',
        
        position: 'relative',
        flexGrow: 1
     
    },
    // ====================
    giaContainer: {
        width: '100%',
        flexDirection: 'row',
    },
    giaGoc: {
        color: '#40BFFF',
        fontWeight: 'bold',
        fontSize: 12
    },
    textName: {
        width: 158,
        color: '#223263',
        fontSize: 12,
        fontWeight: 'bold'
    },
    textNameContainer: {
        width: '100%',
        flexDirection: 'row',
    },
    cancel: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginTop: 8,
    },
    checkoutText: {
        color: 'white',
    },
    checkoutButton: {
        backgroundColor: '#007537',
        height: 50,
        width: '100%',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    checkout: {
        color: '#252A31',
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '90%',
        height: 200,
    },
   
    buttonIcon: {
        color: 'white',
    },
    buttonText: {
        color: 'white',
    },
    totalText: {
        opacity: 0.6,
    },
    buttonContainer: {
        height: 50,
        backgroundColor: '#007537',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        alignItems: 'center',
        marginTop: 16,
        width: '100%',
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    checkoutContainer: {
        paddingHorizontal: 28,
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    trash: {
        position: 'absolute',
        right: 24,
    },
    deleteAction: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    addAction: {
        width: 32,
        height: 24,
        textAlign: 'center',
        lineHeight: 20.5,
        color: 'black',
    },
    quantity: {
        width: 40,
        height: 24,
        backgroundColor: '#EBF0FF',
        textAlign: 'center',
        paddingTop: 3,
        right:-100
    },
    removeAction: {
        // borderRadius: 5,
        // borderWidth: 0.5,
        width: 32,
        height: 24,
        textAlign: 'center',
        lineHeight: 20.5,
        color: 'black',
        marginLeft: 60
    },
    quantityAction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        color: '#007537',
        fontSize: 16,
    },
    name: {

    },
    infoContainer: {
        marginLeft: 15,

    },
    image: {
        width: '80%',
        height: '80%',
    },
    imageContainer: {
        width: 72,
        height: 72,
        borderRadius: 8,
        marginLeft: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        marginVertical: 24,
        paddingHorizontal: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#EBF0FF',
        marginHorizontal: 16,
        padding: 8
    },
    title2: {
        borderBottomColor: '#EBF0FF',
        borderBottomWidth: 1,
    },
    title: {
        width: '100%',
        color: '#223263',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 70,
        marginLeft: 16,
    },
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        position: 'relative',
        flex:1,
    },
})

