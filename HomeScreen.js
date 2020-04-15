import React from 'react';
import { StyleSheet,View, FlatList, TouchableOpacity,Image } from 'react-native';
import HomeDetail from "./HomeDetail";
import postData from "./json/list.json";
import headerData from "./json/header.json";


const HomeScreen = ({navigation}) => {
    return(
        <View style={{flex:1,backgroundColor:"#fff"}}>
            <View style={styles.headerContentStyle}>
                <Image source={{uri: headerData[0].HeaderImage}} style={styles.headerImage}/>
                <TouchableOpacity
                    onPress={() => navigation.push('MessageScreen')}>
                    <Image source={{uri: headerData[0].Send}}
                            style={styles.send}/>
                </TouchableOpacity>
            </View>
            <FlatList
            data={postData.postList}
            renderItem={({item}) => 
            <HomeDetail
                post={item}
                navigation={navigation}
                />}
            />
            <View>
                <Image  source={{uri: headerData[0].Bottom}} style={styles.bottom}/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    headerImage:{
        width:300,
        height:40,
        marginTop:8,
        marginLeft:10,
    },
    send:{
        width: 36,
        height: 36,
        marginTop:8,
        marginLeft:5,
    },
    headerContentStyle:{
        flexDirection:"row",
        width:400,
        height:55,
        backgroundColor:'#fafafa',
        marginTop:25,
        elevation:5,
    },
    bottom:{
        width: 360,
        height: 48,
    },
});
export default HomeScreen;