import React, { useState } from 'react';
import { Container, Page, Input, SubmitButton, SubmitButtonText, HeaderText, BackButton, BackButtonText, LogoImage } from './style';
import { useNavigation } from '@react-navigation/native';
import { Alert, DevSettings } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default () => {
    const [userName, setUserName] = useState('');
    const [cpf, setCpf] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();
    function handleBackButton () {
        navigation.goBack();
    }

    const handleSubmitButton = async () => {
        if(userName == '' || cpf == '' || login == '' || password == ''){
            Alert.alert(
                "Atenção",
                "Por favor, preencha todos os campos para continuar!",
                [
                    {
                        text: "Tudo bem"
                    }
                ]
            )
        }else{
            alert('Usuário cadastrado com sucesso :)')
            await AsyncStorage.setItem('@name',userName);
            await AsyncStorage.setItem('@cpf',cpf);
            await AsyncStorage.setItem('@login',login);
            await AsyncStorage.setItem('@password',password);
            DevSettings.reload();
        }
    }
    return(
        <Page>
            <LogoImage />
            <Container>
                <Input 
                    placeholder = "Digite seu nome"
                    value = {userName}
                    onChangeText = {(n) => setUserName(n)}
                />
                <Input 
                    placeholder = "Digite seu cpf"
                    value = {cpf}
                    onChangeText = {(c) => setCpf(c)}
                />
                <Input 
                    placeholder = "Digite seu usuário"
                    value = {login}
                    onChangeText = {(l) => setLogin(l)}
                />
                <Input 
                    placeholder = "Digite sua senha"
                    value = {password}
                    onChangeText = {(p) => setPassword(p)}
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