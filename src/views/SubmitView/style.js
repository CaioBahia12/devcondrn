import styled from 'styled-components/native';

export const HeaderText = styled.Text`
    font-size: 25px;
    text-shadow: 1px 1px 1px #fff;
`


export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 90%;
`

export const Page = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #b1eaf7;
    align-items: center;
    justify-content: center;
`
export const Input = styled.TextInput`
    width: 90%;
    background-color: #fff;
    border-radius: 7px;
    margin-bottom: 15px;
    font-size: 17px;
    color: #222;
    padding: 10px;
`

export const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    height: 40px;
    border-radius: 10px;
    background-color: #35AAFF;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const SubmitButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
    font-family: "Comics-San";
`

export const BackButton = styled.TouchableOpacity`
    width: 90%;
    height: 40px;
    border-radius: 10px;
    background-color: #35AAFF;
    align-items: center;
    justify-content: center;
`

export const BackButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
`