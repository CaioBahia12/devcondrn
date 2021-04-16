import React, { useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';

const AddItemArea = styled.View`
    background-color: #eee;
    padding: 10px;
`
const AddItemInput = styled.TextInput`
    padding: 10px;
    background-color: #FFF;
    font-size: 15px;
    height: 50px;
    border-radius: 5px;
`
const HeaderText = styled.Text`
    font-size: 25px;
    align-self: center;
    margin-bottom: 10px;
`
export default (props) => {
    const [ocorrencia, setOcorrencia] = useState('');
    const handleSubmit = () => {
        if(ocorrencia.trim() != ''){
            props.onAdd(ocorrencia.trim());
            setOcorrencia('');
        }else{
            Alert.alert(
                "Aviso",
                "Por favor, digite a ocorrência que você deseja inserir!",
                [
                    {text: 'Tudo bem'}
                ]
            );
        }
    }
    return(
        <AddItemArea>
            <HeaderText>Livro de Ocorrências</HeaderText>
            <AddItemInput 
                placeholder = "Digite uma nova ocorrência"
                value = {ocorrencia}
                onChangeText = {(o) => setOcorrencia(o)}
                returnKeyType = "send"
                onSubmitEditing = {handleSubmit}
            />
        </AddItemArea>
    );
}