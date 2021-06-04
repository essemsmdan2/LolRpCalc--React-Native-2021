import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import flushAllOb from './assets/components/RegraDoJogo';

function app() {
  //rooks para verificação de digitação no input
  const [inputValue, setInput] = useState('');
  //recebe todas as opções de pagamento disponiveis de acordo com o input
  const [flushed, setFlushed] = useState([]);
  //recebe arrays com com até 3 indexs, onde são os tipos de pagamentos do flushed
  const [lista, setLista] = useState([]);
  //brincadeira para testar condicionais de exibição
  const [mostrar, setMostrar] = useState(true);

  useEffect(() => {
    if (inputValue <= 145 && inputValue) {
      setLista(['Método: CelularSms, RP: 145, R$: 4.99']);
    } else {
      flushbaby(inputValue);
    }
  }, [inputValue]);

  useEffect(() => {
    cataItens(flushed);
  }, [flushed]);
  useEffect(() => {
    console.log(lista);
  }, [lista]);

  function flushbaby(i) {
    if (flushed) {
      setFlushed(null);
    }
    let f = flushAllOb(i);
    setFlushed(f);
  }

  function cataItens(f) {
    //modifica o array flushed para que sejam criados ...
    //vários arrays dividos em 3 indexs, onde estes representam a opção de pagamneto
    let grupopag = [];
    var n = 0;
    while (n <= f.length - 1) {
      let arraygroup = [`Método: ${f[n]}, RP: ${f[n + 1]}, R$: ${f[n + 2]}`];
      grupopag = [...grupopag, arraygroup];
      n += 3;
    }
    console.log(grupopag);
    setLista(grupopag);
  }

  function checkNumber(i) {
    //verifica se o input é númerico, e adiciona no rooks INPUT
    if (!i) {
      setLista([]);
      setInput(i);
    } else {
      if (i >= 0) {
        setInput(i);
      }
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={i => checkNumber(i)}
        autoFocus
        keyboardAppearance={Number}
        placeholder="digite um valor de RP"
        value={inputValue}
      />

      {lista &&
        lista.map((i, index) => (
          <View key={index}>
            <Text>{i}</Text>
          </View>
        ))}

      {mostrar && (
        <View>
          <Text>Olokinho mew, conseguiu fazer o basico ein?</Text>
        </View>
      )}

      <Button
        onPress={setMostrar(!mostrar)}
        title={
          mostrar ? 'já to te mostrando meu patrão' : 'clica aqui meu patrão'
        }
      />
    </View>
  );
}

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
