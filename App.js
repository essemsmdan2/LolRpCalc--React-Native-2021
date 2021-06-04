import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ImageBackground,
  SafeAreaView,
  Image,
} from 'react-native';
import criaResultadosArray from './assets/components/RegraDoJogo';

function app() {
  //rooks para verificação de digitação no input
  const [inputValue, setInput] = useState('');
  //recebe todas as opções de pagamento disponiveis de acordo com o input
  const [cardsCriadosArray, setCardsCriados] = useState([]);
  //recebe arrays com com até 3 indexs, onde são os tipos de pagamentos do flushed
  const [lista, setLista] = useState([]);

  //use effect para teste, commitar no release
  useEffect(() => {
    setTimeout(() => {
      setInput('1350');
    }, 2000);
  }, []);

  useEffect(() => {
    if (inputValue <= 145 && inputValue) {
      setLista(['CelularSms, RP: 145, R$: 4.99']);
    } else {
      enviaInput(inputValue);
    }
  }, [inputValue]);

  useEffect(() => {
    criaCards(cardsCriadosArray);
  }, [cardsCriadosArray]);

  function enviaInput(i) {
    if (cardsCriadosArray) {
      setCardsCriados(null);
    }
    let f = criaResultadosArray(i);
    console.debug(f);
    setCardsCriados(f);
  }

  function criaCards(f) {
    //modifica o array flushed para que sejam criados ...
    //vários arrays dividos em 3 indexs, onde estes representam a opção de pagamneto
    let ArrayTipoPagamento = [];
    var n = 0;
    while (n <= f.length - 1) {
      let arraygroup = [`${f[n]} - RP: ${f[n + 1]} - R$: ${f[n + 2]}`];
      ArrayTipoPagamento = [...ArrayTipoPagamento, arraygroup];
      n += 3;
    }
    setLista(ArrayTipoPagamento);
  }

  function checkNumber(i) {
    //verifica se o input é númerico, e adiciona no rooks INPUT
    if (!i) {
      setLista([]);
      setInput(i);
    } else {
      if (i > 0) {
        setInput(i);
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imgBk}
        source={require('./assets/img/imgbg2.jpg')}
        imageStyle={{opacity: 0.8}}>
        <View style={styles.navbar}>
          <Image
            style={styles.NBimage}
            source={require('./assets/img/logo.png')}
          />
          <Text style={styles.NBtexto}>League of legends</Text>
        </View>

        <View style={styles.Cresult}>
          <View style={styles.tipoPag}>
            <Text style={styles.textoBody}>DIGITE O RP DA SKIN</Text>

            <View style={styles.inputRow}>
              <Text style={styles.inputT}>RP</Text>
              <View style={{flex: 1}}>
                <TextInput
                  style={styles.input}
                  autoFocus
                  onChangeText={i => checkNumber(i)}
                  keyboardType={'phone-pad'}
                  placeholder="VALOR DE RP"
                  value={inputValue}
                />
              </View>

              <Image
                style={{width: 35, height: 35}}
                source={require('./assets/img/RP.png')}
              />
            </View>

            <Text style={styles.textoBody}>
              Ex: Leona Reinos mecha: 1350RP{' '}
            </Text>
          </View>

          {lista.map((i, index) => (
            <View style={styles.tipoPag} key={index}>
              <Text style={styles.textoTp}>{i}</Text>
            </View>
          ))}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default app;

const styles = StyleSheet.create({
  textoBody: {
    marginTop: 5,
    textShadowColor: '#000',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 1,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  navbar: {
    flexDirection: 'row',
    backgroundColor: 'purple',
    opacity: 0.9,
    width: '100%',
    alignSelf: 'flex-start',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  NBtexto: {
    textShadowColor: '#000',
    textShadowOffset: {width: 0.8, height: 0.8},
    textShadowRadius: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  NBimage: {left: -20, width: 35, height: 35},
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ecf0f1',
  },
  containerInside: {flex: 1, justifyContent: 'center'},
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,
    padding: 10,
    width: '100%',
    borderRadius: 5,
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    fontSize: 18,
    color: 'black',
    margin: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputT: {
    borderRightWidth: 3,
    borderRightColor: 'black',
    paddingRight: 5,
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tipoPag: {
    backgroundColor: 'purple',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    opacity: 0.9,
    marginTop: 10,
  },
  textoTp: {
    textShadowColor: '#000',
    textShadowOffset: {width: 2, height: 2},
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  Cresult: {
    flex: 1,
    textAlign: 'left',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  imgBk: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
