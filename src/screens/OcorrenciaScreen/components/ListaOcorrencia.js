import React from 'react';
import styled from 'styled-components/native';

const Item = styled.TouchableOpacity`
    padding: 10px;
    background-color: #fff;
`

const ItemText = styled.Text`
    font-size: 16px;
`

export default (props) => {
    return(
        <Item onPress = {() => {}} activeOpacity = {0.7}>
            <>
                <ItemText>{props.data.ocorrencia}</ItemText>
            </>
        </Item>
    );
}