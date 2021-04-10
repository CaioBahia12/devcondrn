import React, { useState, useEffect } from 'react';
import { Container, Page, Logo, InputLogin, LoginButton, LoginButtonText, RegistrationButton, RegistrationButtonText } from './style';
import { Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export default () => {
   
    const navigation = useNavigation();

    const [password,setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [valueLogin, setValueLogin] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const efetuarLogin = () => {
        if(login == '' || password == ''){
            Alert.alert(
                "Atenção",
                "Por favor, preencha todos os campos para continuar!",
                [{
                    text: "Tudo bem"
                }]
            )
        }else{
           if(login == valueLogin && password == valuePassword){
               navigation.navigate('Main');
           }else{
               Alert.alert(
                   "Atenção",
                   "Poxa, parece que você errou seu usuário ou senha! Verifica eles e tenta novamente, tá ? :)",
                   [
                        {
                            text: "Tudo bem"
                        }
                   ]
               )
           }
        }
    }
    const handleRegistrationClick = () => {
        navigation.navigate('Submit');
    }
   const _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('@login');
          const value2 = await AsyncStorage.getItem('@password');
          setValueLogin(value)
          setValuePassword(value2)
        } catch (error) {
          
        }
      };
    useEffect(() => {
        _retrieveData();
    },[])
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
                        <RegistrationButtonText>Usuário novo? Clique aqui para se cadastrar :)</RegistrationButtonText>
                    </RegistrationButton>
                </Container>
            </Page>
    );
}
