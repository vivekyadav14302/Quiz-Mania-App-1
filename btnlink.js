import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoginSignUpBtn({
    customStyle,
    text,
    btnText,
    onPress,
}) {
    return (
        <View style={[styles.container, customStyle]}>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        fontSize: 16,
        lineHeight: 20,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        padding: 10,
    },

    text: {
        fontSize: 16,
        lineHeight: 20,
        color: 'white'
    },

    btnText: {
        fontWeight: "500",
        fontSize: 17,
        lineHeight: 20,
        color: 'yellow',
        marginLeft: 10,
    },
});