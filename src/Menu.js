import React from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Simples from './componentes/Simples';
import ParImpa from './componentes/ParImpa';
import { Inverter, MegaSena } from './componentes/Multi';

const drawerNavigator = createDrawerNavigator({
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