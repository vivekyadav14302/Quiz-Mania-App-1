import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, ImageBackground, TouchableOpacity } from 'react-native';

export default function NewButton(props) {

    return(
        <TouchableOpacity onPress={props.onPress} style={main.button}><Text style={main.titleStyle}>{props.title}</Text></TouchableOpacity>
    )

}

const main = StyleSheet.create({
    button: {
        backgroundColor: 'yellow',
        height: 45,
        margin: 80,
        marginBottom: 30,
        marginTop: 30,
    },
    titleStyle: {
        textAlign: 'center',
        padding: 6,
        fontSize: 22,
    }
})