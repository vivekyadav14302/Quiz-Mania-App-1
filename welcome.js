import React from 'react'
import { Text, View} from 'react-native'
import NewButton from './button';
function Welcome({navigation}) {
    function onLogin() {
        navigation.navigate("login")
    }

    function onRegister() {
        navigation.navigate("signup")
    }
    return (
        <View><Text>Welcome to QuizMania !!</Text>
        <NewButton onPress={onRegister} title="Register"></NewButton>
        <NewButton onPress={onLogin} title="Login"></NewButton>
        </View>
    )
}

export default Welcome
