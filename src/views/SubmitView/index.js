import React, { useState } from 'react';
import { Container, Page, Input, SubmitButton, SubmitButtonText, HeaderText, BackButton, BackButtonText } from './style';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

export default () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();
    function handleBackButton () {
        navigation.goBack();
    }

    const handleSubmitButton = () => {
        if(nome == '' || cpf == '' || usuario == '' || senha == ''){
            Alert.alert(
                "Atenção",
                "Por favor, preencha todos os campos para continuar!",
                [
                    {
                        text: "Tudo bem"
                    }
                ]
            )
        }
    }
    return(
        <Page>
            <Container>
                <Input 
                    placeholder = "Digite seu nome"
                    value = {nome}
                    onChangeText = {(n) => setNome(n)}
                />
                <Input 
                    placeholder = "Digite seu cpf"
                    value = {cpf}
                    onChangeText = {(c) => setNome(c)}
                />
                <Input 
                    placeholder = "Digite seu usuário"
                    value = {usuario}
                    onChangeText = {(u) => setNome(u)}
                />
                <Input 
                    placeholder = "Digite sua senha"
                    value = {senha}
                    onChangeText = {(s) => setNome(s)}
                    secureTextEntry = {true}
                    ref={ref => ref && ref.setNativeProps({ style: { fontFamily: 'Arial' } })}
                />
                <SubmitButton activeOpacity = {0.8} onPress = {handleSubmitButton}>
                    <SubmitButtonText>Cadastrar</SubmitButtonText>
                </SubmitButton>
                <BackButton activeOpacity = {0.8} onPress = {handleBackButton}>
                    <BackButtonText>Voltar</BackButtonText>
                </BackButton>
            </Container>
        </Page>
    );
}