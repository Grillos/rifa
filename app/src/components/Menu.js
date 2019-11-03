import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Sorteio from './Sorteio'
import Aposta from './Aposta'

export default createDrawerNavigator({
    Sorteio: {
        screen: () => <Sorteio texto='Sorteios'/>,
        navigationOptions: { title: 'Sorteios'}
    },
    Aposta: {
        screen: () => <Aposta texto='Apostas'/>,
        navigationOptions: { title: 'Apostas'}
    }
},
{drawerWidth: 300})