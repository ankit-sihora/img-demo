/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View,Image,ScrollView} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
    
    <ScrollView style={{backgroundColor:'lightblue'}}>
    <View style={styles.container}>
    <View style={{}}>
      <View style={styles.first}>
        <Image
          resizeMode='stretch'
          style={{flex:1,width: '50%',height: 50}}
          source={{uri: 'https://printable360.com/wp-content/uploads/2018/03/single-alphabet-letters-to-print-alphabet-letters-to-print-baseball-letters-printable-baseball-for-single-alphabet-letters-to-print.jpg'}}
        />
        <Image
          resizeMode='stretch'
          style={{flex:1,width: '50%', height: 50}}
          source={{uri: 'https://static.memrise.com/img/400sqf/from/uploads/course_photos/4896609000140729093055.jpg'}}
        />
      </View><View style={styles.ali}>
      <View style={styles.second}>
      
        <Image 
          style={{flex:1,width: 50, height: 50}}
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Devanagari_Letter_%E0%A4%85.svg/2000px-Devanagari_Letter_%E0%A4%85.svg.png'}}
        />  
      </View></View>
      <View style={styles.third}>
      <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Devanagari_c.svg/1200px-Devanagari_c.svg.png'}}
        />
      </View>
      <View style={styles.fourth}>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Devanagari_ri.svg/1024px-Devanagari_ri.svg.png'}}
        /> 
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Devanagari_jh.svg/1200px-Devanagari_jh.svg.png'}}
        /> 
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Devanagari_kh.svg/1200px-Devanagari_kh.svg.png'}}
        /> 
      </View>
    </View>
    </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'yellow',
    //padding:8,
    margin:8,
    height:'100%',
  },
  first:{
    flex:1,
    backgroundColor:'red',
    flexDirection:'row',
    //alignItems:'center',
    justifyContent:'space-between',
  },
  second:{
    flex: 1,
    alignItems:'center',
    backgroundColor:'green',
    borderRadius:300,
    width:67,
    padding:8,
    margin:4,
    justifyContent:'center',
    
  },
  third:{
    flex: 1,
    backgroundColor:'red',
    alignItems:'center',
    
  },
  fourth:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    
  },
  fourth1:{
    flex:1
  },
  ali:{
    flex:1,
    alignItems:'center',
  },
});

















