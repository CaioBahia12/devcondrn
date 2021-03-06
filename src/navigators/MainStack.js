import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SubmitScreen from '../screens/SubmitScreen';
import MainScreen from '../screens/MainScreen';
import OcorrenciaScreen from '../screens/OcorrenciaScreen';
const MainStack = createStackNavigator();

export default () => {
    return( 
        <MainStack.Navigator
            screenOptions = {{headerShown: false}}
        >
            <MainStack.Screen name = "Login" component = {LoginScreen} />
            <MainStack.Screen name = "Submit" component = {SubmitScreen} />
            <MainStack.Screen name = "Main" component = {MainScreen} />
            <MainStack.Screen name = "Ocorrencia" component = {OcorrenciaScreen} />
        </MainStack.Navigator>    
    );
}