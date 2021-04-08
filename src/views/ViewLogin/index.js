import React, { useState } from 'react';
import { Container, Page, Logo, InputLogin, LoginButton, LoginButtonText } from './style';

export default () => {
    const [password,setPassword] = useState('');
    return(
            <Page>
                <Logo />
                <Container>
                    <InputLogin 
                        placeholder = "Digite seu usuário"
                    />
                    <InputLogin 
                        placeholder = "Digite sua senha"
                        secureTextEntry = {true}
                        ref={ref => ref && ref.setNativeProps({ style: { fontFamily: 'Arial' } })}
                        value = {password}
                        onChangeText = {(p) => setPassword(p)}
                    />
                    <LoginButton>
                        <LoginButtonText>Entrar</LoginButtonText>
                    </LoginButton>
                </Container>

            </Page>
    );
}