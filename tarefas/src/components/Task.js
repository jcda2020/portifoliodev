import React from 'react'
import moment from 'moment'
 import {SafeAreaView, StyleSheet, Text, View} from 'react-native'
import 'moment/locale/pt-br'
import commonStyles from '../commonStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

export default   props  => {

let check = null

if (props.doneAt !== null)  {

check = (

<View style = {styles.done}>

<Icon    name='check-circle'  size={25}   color= {commonStyles.colors.mainText} />  

</View>

) 


 } else {

check = <View  style = {styles.pending}   />     
}


return (

<SafeAreaView style={styles.container}>

<View style={styles.checkContainer}>{check}</View>

<Text style= {styles.descripton}>   {props.desc} </Text>
<Text style={styles.date}> {moment(props.estimateAt).locale('pt-br').format('dddd, D [de] MMMM')}   </Text>

</SafeAreaView>


)




}

const styles = StyleSheet.create ({
    container: {
    paddingVertical: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#AAA'


},
    pending: {
    borderWidth: 1,
    marginTop: 10,
    height: 25,
    width: 25,
    borderRadius: 15,
    borderColor:'#555'


},

    done:   
     {
        height: 25,
        width: 25,
        borderRadius: 15,
        borderColor: '#555',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
},
    checkContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%'

}, 
        descripton: {

        color: commonStyles.colors.mainText,
        fontSize: 15
},
    date: {
    color: commonStyles.colors.subText

}



})