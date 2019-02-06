import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Switch, Modal, Platform, TouchableHighlight, AsyncStorage, Alert, DatePickerIOS } from 'react-native';
import { ButtonGroup, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-datepicker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import ToggleSwitch from 'toggle-switch-react-native';
import { Actions } from 'react-native-router-flux';

export default class dem extends Component {

    constructor() {
        super()
        this.state = {
            selectedIndex: 0,
            modalVisible: false,
            mal: 0,
            //name: 'ankit',
            date: "",
            Email: '',
            password: '',
            validate_user: '',
            validate_pass: '',
            pass_flag: true,
            userFname: '',
            chosenDate: new Date(),
            lname:'',
        }
        this.updateIndex = this.updateIndex.bind(this)
        this.updateIndexM = this.updateIndexM.bind(this)
        this.setDate = this.setDate.bind(this);
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }
    visibility() { (this.state.pass_flag == false) ? (this.setState({ pass_flag: true })) : (this.setState({ pass_flag: false })) }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }
    updateIndexM(selectedIndex) {
        this.setState({ mal: selectedIndex })
    }
    render() {
        //var pass_flag = true
        const component1 = () => <Text>SIGN IN</Text>
        const component2 = () => <Text>SIGN UP</Text>
        const male = () => <Text>Male</Text>
        const female = () => <Text>Female</Text>
        const buttons = [{ element: component1 }, { element: component2 }]
        const buttonm = [{ element: male }, { element: female }]
        const { selectedIndex } = this.state
        const { mal } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ marginBottom: 16, marginTop: Platform.OS === 'ios' ? 64 : 0, }}>
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
                    containerStyle={{ height: 40, marginTop: 0, marginLeft: 32, marginRight: 32, borderRadius: 8, borderColor: '#0099ff' }} >
                </ButtonGroup>

                <Modal
          animationType='slide'
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

                {(this.state.selectedIndex == 1)
                    ? (
                        <View style={{ flex: 1, marginBottom: 16 }}>
                            <ScrollView style={{ flex: 1 }}>
                                <View style={{ flex: 1, flexDirection: 'row', margin: 24 }}>
                                    <Icon name="user" size={32} color='black'></Icon>
                                    <TextInput
                                        value={this.state.userFname}
                                        style={styles.input}
                                        placeholder="First Name"
                                        onChangeText={(text) => { this.setState({ userFname: text }) }}
                                        underlineColorAndroid="transparent"
                                    />
                                    <View><TouchableOpacity onPress={() => this.setState({ userFname: '' })}>
                                        <Icon name='circle-with-cross' size={32}></Icon></TouchableOpacity>
                                    </View>
                                </View>
                                <Divider style={{ backgroundColor: 'blue', height: 2, backgroundColor: 'gray', marginHorizontal: 32 }} />
                                <View style={{ flex: 1, flexDirection: 'row', margin: 24 }}>
                                    <Icon name="user" size={32} color='black'></Icon>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Last Name"
                                        onChangeText={(searchStrig) => { this.setState({ lname:searchStrig}) }}
                                        underlineColorAndroid="transparent"
                                    />
                                    <View>
                                        <Icon name='circle-with-cross' size={32}></Icon>
                                    </View>
                                </View>
                                <Divider style={{ backgroundColor: 'blue', height: 2, backgroundColor: 'gray', marginHorizontal: 32 }} />
                                <View style={{ flex: 1, flexDirection: 'row', margin: 24 }}>
                                    <Icon name="home" size={32} color='black'></Icon>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Address"
                                        onChangeText={(searchString) => { this.setState({ searchString }) }}
                                        underlineColorAndroid="transparent"
                                    />
                                </View>
                                <Divider style={{ backgroundColor: 'blue', height: 2, backgroundColor: 'gray', marginHorizontal: 32 }} />
                                <View style={{ marginTop: 16, marginLeft: 32, flexDirection: 'row', flex: 1, alignItems: 'center' }}><Text>Gender:</Text>
                                    <ButtonGroup
                                        onPress={this.updateIndexM}
                                        selectedIndex={mal}
                                        buttons={buttonm}
                                        selectedButtonStyle={{ backgroundColor: '#0099ff' }}
                                        containerStyle={{ height: 40, marginTop: 0, marginLeft: 32, marginRight: 32, borderRadius: 8, borderColor: '#0099ff', flex: 1 }}
                                    >
                                    </ButtonGroup>
                                </View>
                                <Divider style={{ backgroundColor: 'blue', height: 2, backgroundColor: 'gray', marginHorizontal: 32, marginVertical: 16 }} />
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 32 }}>
                                    <Text>Email Address:</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Email Address"
                                        onChangeText={(searchString) => { this.setState({ Email: searchString }) }}
                                        underlineColorAndroid="transparent"
                                    />
                                    <Feather name="info" size={32}></Feather>
                                </View>
                                <Divider style={{ backgroundColor: 'blue', height: 2, backgroundColor: 'gray', marginHorizontal: 32, marginVertical: 16 }} />

                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 32 }}>
                                    <Text>Password:</Text>
                                    <TextInput
                                        style={{ flex: 1 }}
                                        secureTextEntry={this.state.pass_flag}
                                        onChangeText={(searchStrin) => { this.setState({ password: searchStrin }) }}
                                        placeholder='***'></TextInput>
                                    <View><TouchableOpacity activeOpacity={0.1} onPress={() => this.visibility()}>
                                        {(this.state.pass_flag == true) ? (<MaterialIcons name='visibility-off' size={32}></MaterialIcons>) : (<MaterialIcons name='visibility' size={32}></MaterialIcons>)}

                                    </TouchableOpacity></View>

                                </View>
                                <Divider style={{ backgroundColor: 'blue', height: 2, backgroundColor: 'gray', marginHorizontal: 32, marginVertical: 16 }} />
                                <View><View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', marginHorizontal: 32, alignItems: 'center' }}>
                                    <Text>Date Of Birth:</Text>
                                    <View style={{ flex: 1 }}>{(Platform.OS === "android" ? (
                                        <DatePicker
                                            style={{ width: 200, }}
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
                                        />) : (<View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}><DatePickerIOS
                                            date={this.state.chosenDate}
                                            onDateChange={this.setDate}
                                            style={{ alignContent: 'flex-end', width: "100%" }}
                                        /></View>))}</View></View><View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 32 }}><TouchableOpacity style={{ flex: 1, height: 40, backgroundColor: 'blue', borderRadius: 20, marginLeft: 40, marginRight: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray' }}><Text>Edit</Text></TouchableOpacity><TouchableOpacity onPress={async () => { await AsyncStorage.multiSet([[this.state.Email, this.state.Email], [this.state.password, this.state.password]]); }} style={{ flex: 1, height: 40, borderRadius: 20, marginRight: 40, color: 'white', marginLeft: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightblue' }}><Text>Save</Text></TouchableOpacity></View></View>
                            </ScrollView>
                        </View>
                    )
                    :
                    (
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={[styles.searchSection]}>
                                    <EvilIcons name="user" size={32} color='black'></EvilIcons>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="User "
                                        onChangeText={(searchString) => { this.setState({ validate_user: searchString }) }}
                                        underlineColorAndroid="transparent"

                                    />
                                    <View>
                                        <Icon name='circle-with-cross' size={32}></Icon>
                                    </View>
                                </View>
                                <Divider style={{ backgroundColor: 'blue', height: 2, backgroundColor: 'gray', marginHorizontal: 32 }} />
                                <View style={[styles.searchSection]}>
                                    <EvilIcons name="lock" size={32} color='black'></EvilIcons>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="password "
                                        secureTextEntry={this.state.pass_flag}
                                        onChangeText={(searchString) => { this.setState({ validate_pass: searchString }) }}
                                        underlineColorAndroid="transparent"
                                    />
                                    <View><TouchableOpacity activeOpacity={0.1} onPress={() => this.visibility()}>
                                        {(this.state.pass_flag == true) ? (<MaterialIcons name='visibility-off' size={32}></MaterialIcons>) : (<MaterialIcons name='visibility' size={32}></MaterialIcons>)}

                                    </TouchableOpacity></View>
                                </View><Divider style={{ backgroundColor: 'blue', height: 2, backgroundColor: 'gray', marginHorizontal: 32 }} />
                                <View style={{ marginTop: 16 }}><View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginEnd: 32, alignItems: 'center' }}>
                                    <Text>Save Password</Text>
                                    <Switch value={true} onValueChange={() => { this.value = !this.value }}></Switch></View>
                                    {/* <ToggleSwitch
                                    isOn={true}
                                    onColor='#88ef44'
                                    offColor='red'
                                    label='save password'
                                    labelStyle={{ color: 'black', fontWeight: '400', }}
                                    size='medium'
                                    icon={<EvilIcons name='check' size={20}></EvilIcons>}
                                    onToggle={() => this.props.isOn = !this.props.isOn}
                                /> */}
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 32 }}>
                                    <TouchableOpacity style={{ flex: 1, height: 40, backgroundColor: 'blue', borderRadius: 20, marginLeft: 60, marginRight: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray' }}>
                                        <Text>Cancel</Text></TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={async () => {
                                            try {
                                                await AsyncStorage.multiGet([this.state.validate_user, this.state.validate_pass], (err, value) => {
                                                    /* value.map((result) => {
                                                        result.toString();
                                                        let value = result[0];
                                                        Alert.alert('hello',value)
                                                    }); 
                                                   Alert.alert('hello',value[0][1].toString()); */
                                                    /* try {
                                                        if (value[0][1].toString()){
                                                            ((value[0][1].toString() == this.state.validate_user && value[1][1].toString() == this.state.validate_pass) ? (Alert.alert('good')) : (Alert.alert('donot try to hack')));
                                                            }else{Alert.alert('alt')}
                                                    } catch (error) {
                                                        Alert.alert('user id should not be nulll')
                                                    } */
                                                    ((value[0][1].toString() == this.state.validate_user && value[1][1].toString() == this.state.validate_pass) ? (Alert.alert('good')) : (Alert.alert('donot try to hack')));
                                                })  ;
                                            } catch (e) {
                                                console.error(e.message);
                                            }
                                        }}
                                        style={{ flex: 1, height: 40, borderRadius: 20, marginRight: 60, marginLeft: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightblue' }}><Text>Login</Text></TouchableOpacity></View>
                            </ScrollView></View>
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
        marginLeft: 8,
    },
})