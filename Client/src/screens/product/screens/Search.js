import { StyleSheet, Text, TextInput, View, Image, FlatList,Pressable } from 'react-native'
import React from 'react'

const Seach = (props) =>{
  const { navigation } = props;

    const renderItem = ({ item }) => {
        const { image, name, price, id } = item;
        return (
            <View style={styles.categoryContainer}>
                <View style={styles.productContainer}>
                    <Pressable style={styles.product} key={id}>
                        <View style={styles.productImageContainer}>
                            <Image style={styles.productImage}
                                resizeMode='cover'
                                source={image} />
                        </View>
                        <View style={styles.productNameContainer}>
                            <Text style={styles.productName}>{name}</Text>
                        </View>
                        <Image style={styles.icon}
                            resizeMode='cover'
                            source={require('./../../../assets/images/Sao.png')} />
                        <View style={styles.productPriceContainer}>
                            <Text style={styles.productGiaGiam}>${price}</Text>

                            <View style={styles.giaContainer}>
                                <Text style={styles.productGiaGoc}>${price}</Text>
                                <Text style={styles.productPhanTranGiam}>10% Off</Text>
                            </View>
                        </View>
                    </Pressable>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.timKiemContainer}>

                <View style={styles.textInputContainer}>
                    <View style={styles.searchIcon}>
                        <Image source={require('./../../../assets/images/TimKiem.png')} />
                    </View>
                    <TextInput style={styles.textInput} placeholder='Seach products' />
                </View>
                <Image style={styles.imgGroup} source={require('./../../../assets/images/Group.png')} />
                <Image style={styles.imgFilter} source={require('./../../../assets/images/Filter.png')} />

            </View>

            <FlatList data={data}
                renderItem={renderItem}
                numColumns={2}
                keyExtractor={item => item.id} />
        </View>
    )
}


export default Seach
const styles = StyleSheet.create({
  productPhanTranGiam: {
      fontSize: 10,
      color: '#FB7181',
      fontWeight: 'bold',
      marginLeft: 8
  },
  productGiaGoc: {
      fontSize: 10,
      color: '#9098B1',
      textDecorationLine: 'line-through',
  },
  giaContainer: {
      flexDirection: 'row',
  },
  productGiaGiam: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#40BFFF',
  },
  icon: {
      width: 68,
      height: 12
  },
  duLieu: {
      textAlign: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      marginTop: '50%',
  },
  headerText: {
      fontSize: 25,
      color: 'red',
      fontWeight: 'bold',
  },

  headerTextContainer: {
      position: 'absolute',
      top: 100,
      left: 50,
      zIndex: 1
  },

  headerContainer: {
      position: 'relative',
  },

  categoryName: {
      color: '#221F1F',
      fontSize: 24,
      fontWeight: '500',
      marginBottom: 16,
  },

  productPrice: {
      fontSize: 20,
      fontWeight: '600',
      color: '#007537',
  },

  productName: {
      fontSize: 12,
      color: '#223263',
      fontWeight: 'bold',
  },

  categoryContainer: {
      padding: 20,
  },

  product: {
      
      marginBottom: 15,
      padding: 16,

      borderColor: '#EBF0FF',
      borderRadius: 5,
      borderWidth: 1,
  },

  productContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
  },

  productImage: {
      width: 100,
      height: 100,
  },

  productImageContainer: {
      height: 134,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
  },
  title: {
      color: '#223263',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 52,
      marginTop: 70,
  },
  container: {
      backgroundColor: 'white',
      width: '100%',
      height: '100%',
      position: 'relative',
      flexGrow: 1,
  },
  // ===========================
  imgFilter: {
      width: 18,
      height: 18,
      marginTop: 6,
      marginLeft: 6
  },
  imgGroup: {
      width: 18,
      height: 18,
      marginTop: 6,
      marginLeft: 6
  },
  searchIcon: {
      width: 14,
      height: 14,
      paddingHorizontal: 8,
      paddingVertical: 8,

  },
  textInput: {
      marginLeft: 16,
      fontSize: 12,
      fontWeight: 'bold',
      color: '#223263',
  },
  textInputContainer: {
      flexDirection: 'row',
      borderColor: '#EBF0FF',
      borderRadius: 5,
      borderWidth: 1,
      width: '85%',
  },
  timKiemContainer: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 62,
      paddingHorizontal: 12
  },
  // container: {
  //     backgroundColor: 'white',
  //     width: '100%',
  //     height: '100%',
  //     position: 'relative',
  //     flexGrow: 1,
  // }
})

var data = [
   
    {
        id: 1,
        "image": require('./../../../assets/images/ip.jpg'),
  
        "name": "iphone 11",
        "price": "16.290.00",
        "quantity": 1,
        "description":
          "Màn hình 6.1,   RAM 4 GB, ROM 64 GB",
    
      
        "released": "2022-02-24",
      },
      {
          id: 2,
          "image": require('./../../../assets/images/ip13rm.jpg'),
    
          "name": "iphone 13 pro max",
          "price": "16.290.00",
          "quantity": 1,
          "description":
            "Màn hình 6.1,   RAM 4 GB, ROM 64 GB",
      
        
          "released": "2022-02-24",
        },
        {
          id: 3,
          "image": require('./../../../assets/images/ip13mauxanh.jpg'),
    
          "name": "iphone 13 promax xanh lá",
          "price": "16.290.00",
          "quantity": 1,
          "description":
            "Màn hình 6.1,   RAM 4 GB, ROM 64 GB",
      
        
          "released": "2022-02-24",
        },
        {
          id: 4,
          "image": require('./../../../assets/images/ip13pro.jpg'),
    
          "name": "iphone 13 Pro",
          "price": "16.290.00",
          "quantity": 1,
          "description":
            "Màn hình 6.1,   RAM 4 GB, ROM 64 GB",
      
        
          "released": "2022-02-24",
        },
        {
          id: 5,
          "image": require('./../../../assets/images/ip12prm.jpg'),
    
          "name": "iphone 12 pro max",
          "price": "16.290.00",
          "quantity": 1,
          "description":
            "Màn hình 6.1,   RAM 4 GB, ROM 64 GB",
      
        
          "released": "2022-02-24",
        },
        {
          id: 6,
          "image": require('./../../../assets/images/ip12pro.jpg'),
    
          "name": "iphone 12 Pro",
          "price": "16.290.00",
          "quantity": 1,
          "description":
            "Màn hình 6.1,   RAM 4 GB, ROM 64 GB",
      
        
          "released": "2022-02-24",
        },
        {
          id: 7,
          "image": require('./../../../assets/images/ip12.jpg'),
    
          "name": "iphone 12",
          "price": "16.290.00",
          "quantity": 1,
          "description":
            "Màn hình 6.1,   RAM 4 GB, ROM 64 GB",
      
        
          "released": "2022-02-24",
        },
        
        {
          id: 8,
          "image": require('./../../../assets/images/ip13mini.jpg'),
    
          "name": "iphone 13 mini",
          "price": "16.290.00",
          "quantity": 1,
          "description":
            "Màn hình 6.1,   RAM 4 GB, ROM 64 GB",
      
        
          "released": "2022-02-24",
        },
        
        {
          id: 9,
          "image": require('./../../../assets/images/ipxr.jpg'),
    
          "name": "iphone XR 128GB",
          "price": "16.290.00",
          "quantity": 1,
          "description":
            "Màn hình 6.1,   RAM 4 GB, ROM 64 GB",
      
        
          "released": "2022-02-24",
        },
        
        {
          id: 10,
          "image": require('./../../../assets/images/ips3.jpg'),
    
          "name": "iphone SE(2022)",
          "price": "16.290.00",
          "quantity": 1,
          "description":
            "Màn hình 6.1,   RAM 4 GB, ROM 64 GB",
      
        
          "released": "2022-02-24",
        },
        
        {
          id: 11,
          "image": require('./../../../assets/images/ip12mini.jpg'),
    
          "name": "iphone 12 Mini",
          "price": "16.290.00",
          "quantity": 1,
          "description":
            "Màn hình 6.1,   RAM 4 GB, ROM 64 GB",
      
        
          "released": "2022-02-24",
        },
        
        {
          id: 12,
          "image": require('./../../../assets/images/ipse.jpg'),
    
          "name": "iphone SE(2022) Hộp mới",
          "price": "16.290.00",
          "quantity": 1,
          "description":
            "Màn hình 6.1,   RAM 4 GB, ROM 64 GB",
      
          "released": "2022-02-24",
        },
      
   
  ];
  
  