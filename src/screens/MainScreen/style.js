import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';

export const Page = styled.SafeAreaView`
    flex: 1;
    background-color: #b1eaf7;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    padding: 20px;
`
export const Text = styled.Text`
    font-size: 28px;
`

export const Square = styled.TouchableOpacity`
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 10px;
    margin: 10px;
    align-items: center;
    justify-content: center;
`

export const SquareIcon = () => {
    return(
        <View>
            <Image 
                source = {require('./images/icon_Home.png')}
            />
        </View>
    );
}