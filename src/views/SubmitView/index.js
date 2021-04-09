import React from 'react';
import { Container, Page, Input, SubmitButton, SubmitButtonText, HeaderText, BackButton, BackButtonText } from './style';
import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation();
    function handleBackButton () {
        navigation.goBack();
    }
    return(
        <Page>
            <HeaderText>Tela de Cadastro</HeaderText>
            <Container>
                <Input 
                    placeholder = "Digite seu nome"
                />
                <Input 
                    placeholder = "Digite seu cpf"
                />
                <Input 
                    placeholder = "Digite seu usuário"
                />
                <Input 
                    placeholder = "Digite sua senha"
                    secureTextEntry = {true}
                    ref={ref => ref && ref.setNativeProps({ style: { fontFamily: 'Arial' } })}
                />
                <SubmitButton activeOpacity = {0.8}>
                    <SubmitButtonText>Cadastrar</SubmitButtonText>
                </SubmitButton>
                <BackButton activeOpacity = {0.8} onPress = {handleBackButton}>
                    <BackButtonText>Voltar</BackButtonText>
                </BackButton>
            </Container>
        </Page>
    );
}