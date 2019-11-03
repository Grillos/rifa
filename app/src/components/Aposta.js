import React from 'react'
import { View, Text } from 'react-native'

export default props => 
    <View style={{flex: 1, flexDirection: 'row'}}>
        <Text style={{fontSize: 40, textAlign: "center", paddingTop: 200}}>{props.texto}</Text>
    </View>
