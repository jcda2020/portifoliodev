import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Estilo from './estilo'

export default (valor) => {

return (
    <Text style={Estilo.textBig}>O valor {valor.max} 
            é maior que o Valor {valor.min} </Text>        
)
}
