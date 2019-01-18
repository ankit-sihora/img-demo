import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { ButtonGroup,Divider, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-datepicker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ToggleSwitch from 'toggle-switch-react-native';
import {Actions} from 'react-native-router-flux';
export default class dem extends Component {

    constructor() {
        super()
        this.state = {
            selectedIndex: 0,
            mal:0,
            name: 'ankit',
            date: "",
        }
        this.updateIndex = this.updateIndex.bind(this)
        this.updateIndexM = this.updateIndexM.bind(this)
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }
    updateIndexM(selectedIndex) {
        this.setState({mal:selectedIndex})
    }
    render() {
        const component1 = () => <Text>SIGN IN</Text>
        const component2 = () => <Text>SIGN UP</Text>
        const male = () => <Text>Male</Text>
        const female = () => <Text>Female</Text>
        const buttons = [{ element: component1 }, { element: component2 }]
        const buttonm = [{element:male},{element:female}]
        const { selectedIndex } = this.state
        const { mal }=this.state
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{marginBottom:16}}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Icon style={styles.searchIcon} name="chevron-thin-left" size={40} color='#0099ff' />
                        <Text style={{ paddingTop: 16, marginLeft: -16, fontSize: 20, color: '#0099ff' }}>
                            Back
                        </Text>
                    </TouchableOpacity>
                </View>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    selectedButtonStyle={{ backgroundColor: '#0099ff' }}
                    containerStyle={{ height: 40, marginTop: 0,marginLeft:32,marginRight:32, borderRadius: 8 ,borderColor:'#0099ff'}} >
                </ButtonGroup> 
                {(this.state.selectedIndex == 1)
                    ?(
                        <View style={{flex:1,marginBottom:16}}>
                        <ScrollView>
                            <View style={{ flex: 1, flexDirection: 'row',margin:24 }}>
                                <Icon name="user" size={32} color='black'></Icon>
                                <TextInput
                                    style={styles.input}
                                    placeholder="First Name"
                                    onChangeText={(searchString) => { this.setState({ searchString }) }}
                                    underlineColorAndroid="transparent"
                                />
                                <View>
                                    <Icon name='circle-with-cross' size={32}></Icon>
                                </View>
                            </View>
                            <Divider style={{ backgroundColor: 'blue',height: 2, backgroundColor: 'gray', marginHorizontal:32}} />
                            <View style={{ flex: 1, flexDirection: 'row',margin:24 }}>
                                <Icon name="user" size={32} color='black'></Icon>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Last Name"
                                    onChangeText={(searchString) => { this.setState({ searchString }) }}
                                    underlineColorAndroid="transparent"
                                />
                                <View>
                                    <Icon name='circle-with-cross' size={32}></Icon>
                                </View>
                            </View>
                            <Divider style={{ backgroundColor: 'blue',height: 2, backgroundColor: 'gray', marginHorizontal:32}} />
                            <View style={{ flex: 1, flexDirection: 'row',margin:24 }}>
                                <Icon name="home" size={32} color='black'></Icon>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Address"
                                    onChangeText={(searchString) => { this.setState({ searchString }) }}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <Divider style={{ backgroundColor: 'blue',height: 2, backgroundColor: 'gray', marginHorizontal:32}} />
                            <View style={{marginTop:32,marginLeft:32,flexDirection:'row',flex:1}}><Text>Gender:</Text>
                                <ButtonGroup 
                                    onPress={this.updateIndexM}
                                    selectedIndex={ mal }
                                    buttons={buttonm}
                                    selectedButtonStyle={{ backgroundColor: '#0099ff' }}
                                    containerStyle={{ height: 40, marginTop: 0,marginLeft:32,marginRight:32, borderRadius: 8 ,borderColor:'#0099ff',flex:1}}
                                >
                                </ButtonGroup>
                                </View>
                                <Divider style={{ backgroundColor: 'blue',height: 2, backgroundColor: 'gray', marginHorizontal:32,marginVertical:16}} />
                            <View style={{flex:1,flexDirection:'row',alignItems:'center',marginHorizontal:32}}>
                                <Text>Email Address</Text>
                                <TextInput></TextInput>
                                <Feather name="info" size={32}></Feather> 
                            </View>
                            <Divider style={{ backgroundColor: 'blue',height: 2, backgroundColor: 'gray', marginHorizontal:32,marginVertical:16}} />
                            <Divider style={{ backgroundColor: 'blue',height: 2, backgroundColor: 'gray', marginHorizontal:32,marginVertical:16}} />
                            <View style={{flex:1,flexDirection:'row',alignItems:'center',marginHorizontal:32}}>
                                <Text>Password:</Text>
                                <TextInput placeholder='***'></TextInput>
                                
                            </View>
                            <Divider style={{ backgroundColor: 'blue',height: 2, backgroundColor: 'gray', marginHorizontal:32,marginVertical:16}} />
                            <View><View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginHorizontal:32,alignItems:'center'}}>
                                <Text>Date Of Birth:</Text>
                                <View>
                            <DatePicker
                                style={{ width: 200,}}
                                date={this.state.date}
                                mode="date"
                                androidMode='spinner'
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                //minDate="1899-05-01"
                                maxDate="2001-01-18"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36
                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => { this.setState({ date: date }) }}
                            /></View></View><View style={{flex:1,flexDirection:'row',justifyContent:'center',marginTop:32}}><TouchableOpacity style={{flex:1,height:40,backgroundColor:'blue',borderRadius:20,marginLeft:60,marginRight:15,alignItems:'center',justifyContent:'center',backgroundColor:'gray'}}><Text>Edit</Text></TouchableOpacity><TouchableOpacity style={{flex:1,height:40,borderRadius:20,marginRight:60,marginLeft:15,alignItems:'center',justifyContent:'center',backgroundColor:'gray'}}><Text>Save</Text></TouchableOpacity></View></View>
                            </ScrollView>
                        </View>
                        )
                    :
                    (
                        <View style={{ flex: 1, flexDirection: 'column',height:3 }}>
                            <View style={[styles.searchSection]}>
                                <EvilIcons name="user" size={32} color='black'></EvilIcons>
                                <TextInput
                                    style={styles.input}
                                    placeholder="User "
                                    onChangeText={(searchString) => { this.setState({ searchString }) }}
                                    underlineColorAndroid="transparent"
                                />
                                <View>
                                    <Icon name='circle-with-cross'></Icon>
                                </View>
                            </View>
                            <Divider style={{ backgroundColor: 'blue',height: 2, backgroundColor: 'gray', marginHorizontal:32}} />
                            <View style={[styles.searchSection]}>
                                <EvilIcons name="lock" size={32} color='black'></EvilIcons>
                                <TextInput
                                    style={styles.input}
                                    placeholder="password "
                                    onChangeText={(searchString) => { this.setState({ searchString }) }}
                                    underlineColorAndroid="transparent"
                                />
                                <View>
                                    <MaterialIcons name='visibility-off'></MaterialIcons>
                                </View>
                            </View><Divider style={{ backgroundColor: 'blue',height: 2, backgroundColor: 'gray', marginHorizontal:32}} />
                            <View style={{marginTop:16}}><ToggleSwitch
                                        isOn={true}
                                        onColor='green'
                                        offColor='red'
                                        label='save password'
                                        labelStyle={{color: 'black', fontWeight: '400',}}
                                        size='medium'
                                        onToggle={ (isOn) => console.log('changed to : ', isOn) }
                                    />
                                </View>
                                <View style={{flex:1,flexDirection:'row',justifyContent:'center',marginTop:32}}><TouchableOpacity style={{flex:1,height:40,backgroundColor:'blue',borderRadius:20,marginLeft:60,marginRight:15,alignItems:'center',justifyContent:'center',backgroundColor:'gray'}}><Text>Cancel</Text></TouchableOpacity><TouchableOpacity style={{flex:1,height:40,borderRadius:20,marginRight:60,marginLeft:15,alignItems:'center',justifyContent:'center',backgroundColor:'gray'}}><Text>Login</Text></TouchableOpacity></View>
                        </View>
                    )
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
        alignItems: 'center',
        backgroundColor: 'white',

    },
    searchIcon: {
        padding: 10,
        backgroundColor: 'white',
    },
    input: {
        flex: 1,
        padding: 0,
        color: '#424242',
        marginLeft:8,
    },
})