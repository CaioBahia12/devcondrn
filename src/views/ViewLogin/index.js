import React, { useState } from 'react';
import { Container, Page, Logo, InputLogin, LoginButton, LoginButtonText, RegistrationButton, RegistrationButtonText } from './style';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation();

    const [password,setPassword] = useState('');
    const [login, setLogin] = useState('');
    const efetuarLogin = () => {
        if(login == '' || password == ''){
            Alert.alert(
                "Atenção",
                "Por favor, preencha todos os campos para continuar!",
                [{
                    text: "Tudo bem"
                }]
            )
        }else if(login == 'admin' && password == 'admin'){
            alert('Usuário logado com sucesso!');
        }else{
            Alert.alert(
                "Atenção",
                "Não conseguimos localizar nenhum usuário com as credenciais informadas no sistema :( ",
                [{
                    text: "Tudo bem"
                }]
            )
        }
    }
    const handleRegistrationClick = () => {
        navigation.navigate('Submit');
    }
    return(
            <Page>
                <Logo />
                <Container>
                    <InputLogin 
                        placeholder = "Digite seu usuário"
                        value = {login}
                        onChangeText = {(l) => setLogin(l)}
                        autoCorrect = {false}
                    />
                    <InputLogin
                        placeholder = "Digite sua senha"
                        secureTextEntry = {true}
                        ref={ref => ref && ref.setNativeProps({ style: { fontFamily: 'Arial' } })}
                        value = {password}
                        onChangeText = {(p) => setPassword(p)}
                        autoCorrect = {false}
                     />
                    <LoginButton activeOpacity = {0.8} onPress = {efetuarLogin} done = {login}>
                        <LoginButtonText>Entrar</LoginButtonText>
                    </LoginButton>
                    <RegistrationButton activeOpacity = {0.8} onPress = {handleRegistrationClick}>
                        <RegistrationButtonText>Usuário novo? Clique aqui para se cadastrar</RegistrationButtonText>
                    </RegistrationButton>
                </Container>
            </Page>
    );
}
