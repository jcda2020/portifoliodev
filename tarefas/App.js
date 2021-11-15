import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import *as Font from 'expo-font'
import commonStyles from './src/commonStyles'

export default class App extends Component {
state = {
            fontLoaded: false
       
    }

    componentDidMount() {
        Font.loadAsync({
            'Lato': require('./assets/fonts/Lato.ttf')
        })
        this.setState({ fontLoaded: true })
    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.texto}>Tarefas</Text>
               
            </SafeAreaView>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 50,
        textAlign: 'center',
        margin: 15
}
});
