import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
//essa merda aqui n deu certo pq por algum motivo isso ficava mantendo o resultado na mesma linha / juntando o resultado, quase concatenando






export default function ResultadoBusca(prop) {
    let array = [prop.array]

    return (

        <View >


            {array.map((i, index) => (
                <View key={index}>
                    <Text >{i}{"\n"}</Text>
                </View>))}


        </View>
    )
}
const styles = StyleSheet.create({

    Rcontainer: {
        flex: 1,
        flexDirection: 'column',
        width: '2%',
        flexWrap: 'wrap'
    }

});










