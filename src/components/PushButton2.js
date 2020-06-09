import React, {Component} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

export default class PushButton2 extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity style={styles.button} onPress={this.props.onBetButton}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    text:{
        alignSelf:"center", 
        fontSize:15
    },
    button:{
        backgroundColor: 'white',
        width: 90,
        height: 30,
        marginTop: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: 3,
    },
})