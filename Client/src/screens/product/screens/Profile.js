import React, {useContext} from 'react'
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
const Profile = (props) => {
    const { navigation } = props
    const { _id, name, address, phone, avatar, dob, email } = data
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.infoContainer}>
                <View style={styles.avatarContainer}>
                    
                    
                        <Image  source={avatar} resizeMode='cover' 
                            style={styles.avatar}/>
                    
                </View>
                
            </View>
            <View style={styles.actionContainer}>
                <Text style={styles.actionTitle}>Chung</Text>
                <Text onPress={() => navigation.navigate('EditProfile')} style={styles.action}>Chỉnh sửa thông tin</Text>
                <Text onPress={() => navigation.navigate('CartHistory')} style={styles.action}>Lịch sử giao dịch</Text>
                <Text style={styles.actionTitle}>Ứng dụng</Text>
                <Text
                onPress={()=>setIsLoggedIn(false)}
                 style={[styles.action, styles.logout]}>Đăng xuất</Text>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    logout: {
        color: '#FF0000'
    },
    action: {
        marginTop: 15,
    },
    actionTitle: {
        fontSize: 16,
        color: '#7F7F7F',
        borderBottomColor: '#ABABAB',
        borderBottomWidth: 1,
        marginTop: 16,
    },
    actionContainer: {
        marginTop: 32,
    },
    email: {
        fontSize: 14,
        color: '#7F7F7F',
    },
    name: {
        fontSize: 16,
    },
    nameContainer: {
        marginLeft: 26,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        right:-110,
        top:22
    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 32,
        paddingHorizontal: 48,
    }
})

var data = {
    _id: "620f86bc05b45000169097bb",
    name: "Trần Quang Đạo",
    address: "Quận 12",
    phone: "0898079833",
    avatar: require('./../../../assets/images/avt.jpg'),
    dob: "2022-02-01T08:27:55.586Z",
    email: "tranquangdao.info@gmail.com",
    createdAt: "2022-02-01T08:27:55.591Z",
    updatedAt: "2022-02-01T08:27:55.591Z",
}