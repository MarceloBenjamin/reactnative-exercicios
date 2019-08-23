import React from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Simples from './componentes/Simples';
import ParImpa from './componentes/ParImpa';
import { Inverter, MegaSena } from './componentes/Multi';
import Contador from './componentes/Contador';
import Plataformas from './componentes/Plataformas';
import ValidarProps from './componentes/ValidarProps';
import Evento from './componentes/Evento';
import { Avo } from './componentes/ComunicacaoDireta';
import TextoSincronizado from './componentes/ComunicacaoIndireta';

const drawerNavigator = createDrawerNavigator({
    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOptions: { title: 'Texto Sincronizado' }
    },
    Avo: {
        screen: () => <Avo nome='Joao' sobrenome='Silva' />
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: ValidarProps
    },
    Plataformas: {
        screen: Plataformas
    },
    Contador: {
        screen: () => <Contador />
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='Marcelo Benjamin' />
    },
    ParImpa: {
        screen: () => <ParImpa numero={25} />,
        navigationOptions: { title: 'Par & Impar' }
    },
    Simples: {
        screen: () => <Simples texto='Flexível!!!' />
    }
}, { drawerWidth: 300, edgeWidth: 100 } )

export default createAppContainer(drawerNavigator);