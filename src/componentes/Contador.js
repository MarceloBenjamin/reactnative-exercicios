import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export default class Contador extends Component {
    
    state = {
        numero: 10
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
    }

    limpar = () => {
        this.setState({ numero: 0 })
    }
    
    render() {
        return (
            <View>
                <Text style={{fontSize: 40}}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPess={this.maisUm}
                    onLongPress={this.limpar}>
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}