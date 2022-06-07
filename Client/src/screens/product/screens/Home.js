import React, { useContext, useEffect, useState } from 'react'
import {
    StyleSheet, Text, View, FlatList,
    Image, Dimensions, Pressable
} from 'react-native'
import { any } from 'react-native/Libraries/Text/TextNativeComponent';
import { ProductContext } from '../ProductConText';

const Home = (props) => {
    const { navigation } = props
    const { getproducts } = useContext(ProductContext);
  const [db, setDb] = useState([])

    useEffect(async () => {
        const res = await getproducts();
        console.log('res', JSON.stringify(res));
        setDb(res)
        return () => {}
    }, [])

    const renderHeader = () => {
      return (
          <View>
              <Image style={{resizeMode:'cover',width:350}} source={require('../../../assets/images/chao.png')} />
          </View>
      )
  }
    const renderItem = ({ item }) => {
        const { image, name, price, _id } = item;

        return (
            <Pressable 
              onPress={() => navigation.navigate('Detail', {item: item})}
              style={{width: '44%', marginHorizontal: 10, marginVertical: 10, borderWidth: 1, padding: 16, borderColor: '#DED8FF'}}>
                <Image style={{alignSelf: 'center' ,height:80,width:80,top:4,right:-35}} resizeMode='cover' source={{uri: item.image}} />
                <Text style={{marginTop: 8}}>{item.name}</Text>
                {/* <Image style={{marginTop: 4}} source={require('./../../../assets/images/sao.png')} /> */}
                <Text style={{fontWeight: 'bold', fontSize: 12, color: '#40BFFF', marginTop: 16}}>${price}</Text>
                <View style={{flexDirection: 'row', marginTop: 4, alignItems: 'center', justifyContent: 'space-around'}}>
                    <Text style={{fontSize: 10, color: '#9098B1'}}>${item.price}</Text>
                    <Text style={{fontSize: 10, color: '#FB7181', fontWeight: 'bold'}}>24% Off</Text>
                    {/* <Image source={require('./../../../assets/images/Trash.png')} /> */}
                </View>
            </Pressable>
        )
    }

    return (
        <View style={styles.container}>
            
            <View style={{backgroundColor: '#DED8FF', width: '100%', height: 1, marginTop: 28}}>

            </View>
            <View>
                <FlatList
                   data={db}
                    renderItem={renderItem}
                    ListHeaderComponent={renderHeader}
                    keyExtractor={item => item._id}
                    numColumns={2}
                />
            </View>
        </View>
    )
}


export default Home

const styles = StyleSheet.create({
 
})

