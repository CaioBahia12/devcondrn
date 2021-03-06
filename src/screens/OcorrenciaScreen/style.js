import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';



export const Page = styled.SafeAreaView`
    flex: 1;
    background-color: #b1eaf7;
`

export const Container = styled.FlatList`
    flex: 1;
`

export const HeaderText = styled.Text`
    font-size: 25px;
    text-shadow: 1px 1px 1px white; 
    margin-top: 10px;
`
