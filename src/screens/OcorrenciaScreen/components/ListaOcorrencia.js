import React from 'react';
import styled from 'styled-components/native';


const Item = styled.TouchableHighlight`
    padding: 10px;
    background-color: #fff;
    height: 50px;
    padding-left: 20px;
    padding-right: 20px;
`

const ItemText = styled.Text`
    font-size: 16px;
`

export default (props) => {
    return(
        <Item onPress = {() => {}} underlayColor = "#DDD" activeOpacity = {1}>
            <>
                <ItemText>{props.data.ocorrencia}</ItemText>
            </>
        </Item>
    );
}