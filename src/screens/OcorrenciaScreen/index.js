import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { Container, HeaderText, Page } from './style';
import lista from './lista';
import ListaOcorrencia from './components/ListaOcorrencia';
import AddItemArea from './components/AddItemArea';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import ListaOcorrencias from '@react-native-community/async-storage';
import { SwipeListView } from 'react-native-swipe-list-view';
import ListaOcorrenciaSwipe from './components/ListaOcorrenciaSwipe';

export default () => {
    const [ocorrencias, setOcorrencias] = useState([]);

    const addNewOcorrencia = async (ocorrencia) => {
        let newOcorrencias = [...ocorrencias,{id: uuidv4(), ocorrencia: ocorrencia}];
        setOcorrencias(newOcorrencias);
        try {
            await ListaOcorrencias.setItem('@Ocorrencias',JSON.stringify(newOcorrencias));
            alert('Ocorrência adicionada com sucesso!');
            const listaOcorrencias = await ListaOcorrencias.getItem('@Ocorrencias');
            console.log(listaOcorrencias);
        } catch (error) {
            Alert.alert(
                "Aviso",
                "Poxa, algo deu errado :( Verifica as informações e tenta novamente, tá?",
                [
                    {text: 'Tudo bem'}
                ]
            );
        }
    }

    const getItems = async () => {
        try {
         const ocorrencias = await ListaOcorrencias.getItem('@Ocorrencias');
         console.log('--------------');
         console.log(ocorrencias);
         setOcorrencias(JSON.parse(ocorrencias));
         console.log('--------------');

        } catch (error) {
          alert('Deu algum erro');
        }
      };

      useEffect(() => {
          getItems();
      },[])

      const deleteItem = async (index,item) => {
        let newItems = [...ocorrencias];
        newItems = newItems.filter((it,i) => {
            if(i != index){
                return true;
            }else{
                return false;
            }
        })
        setOcorrencias(newItems);
        try {
            await ListaOcorrencias.setItem('@Ocorrencias',JSON.stringify(newItems));
        } catch (error) {
            alert('Algo deu errado')
        }
      }

    return(
        <Page>
            <AddItemArea onAdd = {addNewOcorrencia} />
            <SwipeListView
                data = {ocorrencias}
                renderItem = {({item}) => <ListaOcorrencia data = {item}/> }
                keyExtractor = {(item) => item.id}
                renderHiddenItem = {({item, index}) => <ListaOcorrenciaSwipe onDelete = {() => deleteItem(index,item)} /> }
                leftOpenValue = {50}
                disableLeftSwipe = {true}
            />
        </Page>
       
    );
}