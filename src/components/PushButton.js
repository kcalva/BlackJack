import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

export default class PushButton extends Component{
    render(){
        return(
            <View style={{marginBottom:40,marginLeft:4,marginRight:4}}>
                <TouchableOpacity style={styles.button} onPress={this.props.onButton}>
                    <Text style={styles.text}>
                        {this.props.text}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'white',
        width: 120,
        height: 40, 
        justifyContent: 'center',
        borderWidth: 3
    },
    text:{
        fontSize: 20,
        alignSelf: 'center'
    }
})