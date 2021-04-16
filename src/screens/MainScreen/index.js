import React from 'react';
import { Container, Text, Square, SquareIconLostFound, SquareIconOcorrencia, SquareIconMural, Logo, Page, SquareIconReservation } from './style';
import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation();
    function handleClickOcorrencia () {
        navigation.navigate('Ocorrencia');
    }
    return(
        <Page>
            <Logo />
            <Container>
                <Square onPress = {handleClickOcorrencia}>
                    <SquareIconOcorrencia />
                </Square>
                <Square>
                    <SquareIconMural />
                </Square>
                <Square>
                    <SquareIconLostFound />
                </Square>
                <Square>
                    <SquareIconReservation />
                </Square>
            </Container>
        </Page>
    );
}