import React, { Component } from 'react'
import { StyleSheet, Text, SafeAreaView, View, ImageBackground } from 'react-native';
import commonStyles from '../commonStyles'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/today.jpg'
import *as Font from 'expo-font'

import Task from '../components/Task'



export default class Agenda extends Component {
state = {
            fontLoaded: false
       
    }

    componentDidMount() {
        Font.loadAsync({
            'Lato': require('../../assets/fonts/Lato.ttf')
        })
        this.setState({ fontLoaded: true })
    }


render () {

return (

<SafeAreaView style={styles.container}>
<ImageBackground  source={todayImage}  style={styles.backgroud}>

<View style={styles.titleBar}>

<Text style={styles.title}>  Hoje </Text>

<Text style= {styles.subtitle}>    {moment().locale('pt-br').format('dddd, D [de] MMMM')} </Text>




</View>



</ImageBackground>


<View style= {styles.taskContainer}>
<Task  desc = 'Tarefa pedente'   estimateAt = {new Date()}  doneAt = {null}  /> 

<Task  desc = 'Tarefa concluída'  estimateAt = {new Date()}  doneAt= {new Date()}   /> 

</View>
</SafeAreaView>


)

}


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
       
    },
    backgroud:{

        flex:3,
        width: '100%',
        height:'100%'

}, 

titleBar: {
        fontFamily: commonStyles.fontFamily,
        justifyContent: 'flex-end',      

},
title: {  
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,  
    fontSize: 50,
    marginLeft: 20, 
    marginBottom: 10,
    marginTop: 20
                 },


subtitle: {
   fontFamily: commonStyles.fontFamily,
    color:  commonStyles.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 30



}, 
taskContainer: {flex: 7}


    
});