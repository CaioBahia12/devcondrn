import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const ListaOcorrenciaSwipe = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: #FFF;
    justify-content: center;
    padding-left: 10px;
`
    

export default (props) => {
    return(
        <ListaOcorrenciaSwipe onPress = {props.onDelete}>
            <Image 
                source = {require('../images/icon_Delete.png')}
                style = {{width: 30, height: 30}}
                resizeMode = "cover"
            />
        </ListaOcorrenciaSwipe>
    );
}