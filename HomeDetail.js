import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const HomeDetail =({post}) => {
    return(
        <View>
            <View style={[styles.profileTopStyle]}>
                <Image style={styles.profileStyle}
                    source={{uri:post.profile }}/>
                <Text style={{fontWeight:"bold",fontSize:16,marginTop:16}}>{post.id}</Text>
                <Image style={styles.moreStyle}
                    source={{ uri:"https://raw.githubusercontent.com/ntue110719041/icon/master/SmartSelectImage_2020-04-16-00-43-29.png"}}
                />
            </View>
            <Image style={styles.imageStyle}
                    source={{
                        uri:post.main_img
                    }}
            />
           <Image style={styles.likeStyle}
                    source={{
                        uri:"https://raw.githubusercontent.com/ntue110719041/icon/master/SmartSelectImage_2020-04-15-16-03-54.png"
                    }}
            />
           
            <Text style={{fontWeight:"bold",fontSize:16,marginLeft:15,marginTop:5}}>{post.like}</Text>
            
            <Text style={{fontSize:16,marginLeft:15,marginBottom:2}}>
               <Text style={{fontWeight:"bold",fontSize:16,marginLeft:15}}>{post.id}</Text>
               {post.content}
            </Text>
            <Text style={{fontSize:16,color:"#999999",marginLeft:12}}>查看全部{post.comment}則留言</Text>
            <Text style={{margin:15,fontSize:10,marginTop:5,marginBottom:6}}>
                <Text style={{color:"#999999",fontSize:12}}>{post.time}</Text>
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    profileTopStyle:{
        flexDirection:"row",
    },
    profileStyle:{
        height:40,
        width:40,
        margin:8,
    },
    imageStyle:{
        height:400,
        width:400,
    },
    moreStyle:{
        height:30,
        width:30,
        marginTop:14,
        marginLeft:200,
    },
    likeStyle:{
        margin:5,
        width: 345,
        height: 29,
    },
});

export default HomeDetail;