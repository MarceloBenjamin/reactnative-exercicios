import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Simples from './componentes/Simples';
import ParImpa from './componentes/ParImpa';
import { Inverter, MegaSena } from './componentes/Multi';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto='Flexivel!!!!' />
        <ParImpa numero={25} />
        <Inverter texto='Marcelo Benjamin' />
        <MegaSena numeros={7} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
