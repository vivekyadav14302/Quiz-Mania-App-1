import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, ImageBackground } from 'react-native';
import NewButton from './button';
import LoginSignUpBtn from './btnlink';
import ORDivider from './OR';

export default function Login({navigation}) {
  function onLogin(){
    
  }

  function onSignup(){
    navigation.navigate("signup")
}

  return (
    <ScrollView style={styles.container}>
      <ImageBackground style={{flex: 1, justifyContent: 'center'}} source={ {uri: "http://backgroundcheckall.com/wp-content/uploads/2017/12/android-background-app-2.png" }}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.label}>Enter Email ID</Text>
      <TextInput style={styles.inputField} keyboardType="email-address" placeholder="Enter Email Id" placeholderTextColor='white'></TextInput>
      <Text style={styles.label}>Enter Password</Text>
      <TextInput style={styles.inputField} placeholderTextColor='white' secureTextEntry placeholder="Enter Password"></TextInput>
      <NewButton onPress={onLogin} title="Login"></NewButton>
      <ORDivider></ORDivider>
      <LoginSignUpBtn onPress={onSignup} text="Don't have an account ?" btnText="Sign Up"></LoginSignUpBtn>
      </ImageBackground>
    </ScrollView>
  );
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
      fontSize: 35,
      paddingTop: 60,
      paddingLeft: 50,
      letterSpacing: 0.1,
      color: 'yellow',
  },
  form: {
      marginVertical: 35,
  },
  label: {
      fontSize: 25,
      lineHeight: 18,
      color: 'white',
      marginBottom: 3,
      padding: 58,
  },

  inputField: {
      fontSize: 14,
      borderBottomWidth: 3,
      borderBottomColor: 'yellow',
      borderBottomWidth: 3,
      paddingVertical: 15,
      color: 'yellow',
      marginLeft: 80,
      marginRight: 80,
      padding: 15,
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
      fontWeight: 'bold',
      fontSize: 18,
      color: '#FFFFFF',
      textAlign: "center",
  },
});
