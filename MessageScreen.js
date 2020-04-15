import React from 'react';
import { StyleSheet,View, TouchableOpacity,Image,ScrollView } from 'react-native';
import headerData from "./json/header.json";


const MessageScreen = ({navigation}) => {
    return(
        
 <View style={{flex:1,backgroundColor:"#fff"}}>
            <View style={styles.headerContentStyle}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={{uri: headerData[1].Back}}
                            style={styles.back}/>
                </TouchableOpacity>
                <Image source={{uri: headerData[1].HeaderImage}} style={styles.headerimage}/>               
            </View>
            <View  style={{marginTop:5}}>
                <Image
                    source={{uri: headerData[1].BottomImage}} 
                    style={styles.bottomimage}
                />
            </View>
        </View>
       
    );
};
const styles = StyleSheet.create({
    headerContentStyle:{
        flexDirection:"row",
        width:400,
        height:55,
        backgroundColor:'#fafafa',
        marginTop:25,
        elevation:5,
    },
    back:{
        width: 36,
        height: 36,
        marginTop:8,
        marginLeft:5,
    },
    headerimage:{
        width:300,
        height:40,
        marginTop:7,
        marginLeft:10,
    },
    bottomimage:{
        width:356,
        height:555,
    },
});
export default MessageScreen;