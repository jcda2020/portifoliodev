import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default function Home () {

return (

<View style={Style.container}>       

<Text style={Style.texto}> Olá mundo!    </Text>

</View>



)


}


const Style = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {	  
	  fontSize: 30,
	  color: 'blue'
	  
  }
});