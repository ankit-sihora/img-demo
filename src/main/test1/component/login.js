import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export default class logi extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.img} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTun3WzOzX8FaZyerPCKRN2Kk9dEOb8s-npHQdlS5YRf7vd9Rx6"}}></Image>
                <Text>Thank You For Sign-In</Text>
                <Icon name='check' size={32}></Icon>
                <Text>Version </Text>
            </View>
        )
    
    }
}

const styles=StyleSheet.create({
    container:{

    },
    img:{
        width: 50, height: 50,
    },
})