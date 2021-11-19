import React from 'react'
import { Text, View} from 'react-native'
import NewButton from './button'
import { createStackNavigator } from '@react-navigation/stack'
import  Login  from "./login"
import  Signup  from "./signup"
import  Welcome  from "./welcome"
const stack = createStackNavigator()
function StackNavigation() {
    return (
        <stack.Navigator initialRouteName = "welcome">        
            <stack.Screen name="welcome" component = { Welcome }></stack.Screen>
            <stack.Screen name="login" component = { Login }></stack.Screen>
            <stack.Screen name="signup" component = { Signup }></stack.Screen>
        </stack.Navigator>
    )
}

export default StackNavigation
