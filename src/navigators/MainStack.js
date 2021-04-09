import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ViewLogin from '../views/ViewLogin';
import SubmitView from '../views/SubmitView';

const MainStack = createStackNavigator();

export default () => {
    return( 
        <MainStack.Navigator
            screenOptions = {{headerShown: false}}
        >
            <MainStack.Screen name = "Login" component = {ViewLogin} />
            <MainStack.Screen name = "Submit" component = {SubmitView} />
        </MainStack.Navigator>    
    );
}