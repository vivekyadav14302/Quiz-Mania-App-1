import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Dimensions, TextInput, ImageBackground, YellowBox } from 'react-native';
import NewButton from './button';
import LoginSignUpBtn from './btnlink';
import {Picker} from '@react-native-picker/picker';
import ValidationComponent from 'react-native-form-validator'
import ORDivider from './OR'
import SnackBar from './snackbar'
import { Audio } from 'expo-av'

export default class Signup extends ValidationComponent {
    constructor(props){
        super(props)

        this.state={ isLoding: false, Uname: '', email: '', password: '', conpassword: '', age: '', phone: '', snackbox: '', snackboxcontent: '', snackvisible: false}
       
    }
    showLoader=()=>{
        this.setState({isLoding: true})
    }
    hideLoader=()=>{
        this.setState({isLoding: false})
    }
    onLogin=()=>{
        this.props.navigation.navigate("login")
    }

  playSound=async()=>{
      try {
          const move = new Audio.Sound()
          await move. loadAsync(require("./assets/assets_ding2.mp3"))
          await move.playAsync()    
      } catch (error) {
          
      }
  }
  onSignup=()=>{
    // alert('user registered successfully !')
    this.showLoader()
    this.validate({

        Uname: {minlength: 4, maxlength: 20, required: true},
        email: {email: true, required: true},
        age: {required: true},
        password: {required: true},
        conpassword: {equalPassword: this.state.password, required: true},

    })
    if(this.getErrorMessages()){
        this.drawSnack('error',this.getErrorMessages())
    }else{
        this.drawSnack('success', 'Registration Successful')
        this.playSound()
    }
    setTimeout(this.hideLoader,2000)
}

drawSnack =(error, text)=>{
    this.setState({snackbox: error, snackboxcontent: text, snackvisible: true})
}

hideSnackbar = ()=>{
    this.setState({snackvisible: false})
}
  render(){
    // var errors = this.getErrorMessages().split("\n").map((item)=>
    //     {return(
    //         <View style={{backgroundColor: 'pink', margin: 10}}><Text style={{color: 'white',  textAlign: 'center'}}>{item}</Text></View>
    //     )}
    // )
   
  return (
    <ScrollView style={styles.container}>
      <ImageBackground style={{flex: 1, justifyContent: 'center'}} source={ {uri: "http://backgroundcheckall.com/wp-content/uploads/2017/12/android-background-app-2.png" }}>

      <Text style={styles.title}>Register Here</Text>
      <Text style={styles.label}>Enter Name</Text>
      <TextInput style={styles.inputField} onChangeText={(data)=> this.setState({Uname: data})} placeholder="Enter your name" placeholderTextColor='white'></TextInput>
      <Text style={styles.label}>Enter Email ID</Text>
      <TextInput style={styles.inputField} onChangeText={(data)=> this.setState({email: data})} keyboardType="email-address" placeholder="Enter Email Id" placeholderTextColor='white'></TextInput>
      <Text style={styles.label}>Select age group</Text>
      <Picker onValueChange={(data, e)=> this.setState({age: data})} style={styles.pick}><Picker.Item value=" below 10 year" label=" below 10 year"></Picker.Item>
      <Picker.Item value="10-20 year" label="10-20 year"></Picker.Item>
      <Picker.Item value="20-40 year" label="20-40 year"></Picker.Item>
      <Picker.Item value="40-60 year" label="40-60 year"></Picker.Item>
      <Picker.Item value="60 above" label="60 above"></Picker.Item>
      </Picker>
      <Text style={styles.label}>Enter Password</Text>
      <TextInput style={styles.inputField} onChangeText={(data)=> this.setState({password: data})} placeholderTextColor='white' secureTextEntry placeholder="Enter Password"></TextInput>
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput style={styles.inputField} onChangeText={(data)=> this.setState({conpassword: data})} placeholderTextColor='white' secureTextEntry placeholder="Re-enter your password"></TextInput>
      <NewButton onPress={this.onSignup} title="Register"></NewButton>
      
      <ORDivider></ORDivider>
      <LoginSignUpBtn onPress={this.onLogin} text="Already have an account ?" btnText="Login"></LoginSignUpBtn>
      </ImageBackground>
      {this.state.isLoding ? <ActivityIndicator size = 'large' color = 'yellow' style={{backgroundColor: '#55555599', position: 'absolute', top: 0, bottom: 0, padding: 200, alignSelf: 'stretch', width: Dimensions.get('window').width}}></ActivityIndicator>: null}
      {this.state.snackvisible ? <SnackBar isVisible = {this.state.snackvisible} type = {this.state.snackbox} text = {this.state.snackboxcontent} onClose = {this.hideSnackbar}></SnackBar> :null}

      
    </ScrollView>
  );

}
} 


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      margin: 0,
      alignSelf: 'stretch',
      paddingHorizontal: 0,
  },
  title: {
      fontSize: 30,
      paddingTop: 40,
      paddingLeft: 20,
      letterSpacing: 0.1,
      color: 'yellow',
  },
  form: {
      marginVertical: 35,
  },
  label: {
      fontSize: 21,
      lineHeight: 18,
      color: 'white',
      marginBottom: 1,
      padding: 30,
      paddingLeft: 80,
  },

  inputField: {
      fontSize: 14,
      borderBottomWidth: 3,
      borderBottomColor: 'yellow',
      borderBottomWidth: 3,
      color: 'yellow',
      marginLeft: 80,
      marginRight: 80,
      padding: 15,
      paddingVertical: 10,
      backgroundColor: 'transparent',
  },

  divider: {
      paddingVertical: 12,
  },

  log: {
      textAlign: "center",
      marginVertical: 2,
  },

  signup: {
      marginTop: 40,
  }
  ,
  buttoncontainer: {
      backgroundColor: '#2B35E0',
      borderRadius: 8,
      padding: 10,
  },

  buttontext: {
      fontSize: 18,
      color: '#FFFFFF',
      textAlign: "center",
  },
  pick: {
      marginLeft: 80,
      marginRight: 80,
      height: 35,
      fontSize: 14,
      backgroundColor: 'transparent',
      paddingLeft: 12,
      color: 'pink',
      borderColor: 'yellow',
      borderWidth: 2,
      borderRadius: 10,
  }
});
