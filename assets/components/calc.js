import * as React from 'react';
import {Text, View, StyleSheet, Image, TextInput} from 'react-native';

export default function calc(prop) {
  return (
    <View style={styles.header}>
      <Text style={styles.h1}>DIGITE O "RP" DA SKIN</Text>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}>
        <TextInput
          value={prop.value}
          onChangeText={prop.onChangeText}
          style={styles.h1input}
          placeholder={'Digite algo'}
        />
        <Image
          style={{height: 30, width: 30}}
          source={require('../img/brand.png')}
        />
      </View>

      <Text style={styles.h2}>Ex: Leona Reinos Mecha : 1350 RP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    margin: 'auto',
    backgroundColor: 'blueviolet',
    height: 150,

    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'column',
  },

  h1: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  h2: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,

    color: 'white',
    marginBottom: 10,
  },

  h1input: {
    width: '96%',
    borderRadius: 3,
    padding: 3,
    justifySelf: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    color: 'black',
    backgroundColor: 'white',
  },
});
