import React ,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux';
import dem from './component/signup';
import logi from './component/login'
const RouterDemo = () => (
    <Router>
        <Stack headerLayoutPreset="center" key='root'>
        <Scene key="login" hideNavBar component={dem} back/>
        <Scene key='last' hideNavBar component={logi} />
        </Stack>
    </Router>
);
export default RouterDemo;
const styles = StyleSheet.create({
    container: {
        backgroundColor:'red'
    }

})