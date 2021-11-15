import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';    
import MaxMin from './MaxMin'



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Desenvolvimento de aplicativos mobile</Text>
         <MaxMin  min= "7" max="30"/>         
      <StatusBar style="auto" />
    <MaxMin  min= "2" max="50"/>    

        

    </SafeAreaView>



  );   

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    containerTwo:{
        flex: 3,    
        backgroundColor: 'green'

}
});
