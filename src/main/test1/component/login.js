import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export default class logi extends Component {
    render(){
        return(
            <View style={styles.container}><View style={styles.container}>
                <Image style={styles.img} resizeMode='contain' source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTun3WzOzX8FaZyerPCKRN2Kk9dEOb8s-npHQdlS5YRf7vd9Rx6"}}></Image>
                <Text style={styles.txt}>Thank You For Sign-In</Text>
                <Icon name='check' size={32} style={styles.ic}></Icon>
                <Text style={styles.txt}>Version 2.1</Text></View>
            </View>
        )
    
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        
        
    },
    ic:{
        flex:1,
    },
    img:{
        width: 50, height: 50,
        flex:1.5,
        
    },
    txt:{
        flex:1,
        color:'#0099ff',
        fontWeight:'400',
    },
})