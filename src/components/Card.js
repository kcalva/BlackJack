import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class Card extends Component{
    render(){
        let valueMap = ['A','2','3','4','5','6','7','8','9','T','J','Q','K']
        let suitMap = ['♠️','♣️','♥️','♦️'] 

        let cardIndex = this.props.cardIndex
        let valueIndex = cardIndex%13
        let suitIndex = Math.floor(cardIndex/13)

        return(
            <View style={styles.card}>
                <Text>
                    {valueMap[valueIndex]}{'\n'}{suitMap[suitIndex]}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: 'white',
        width: 74,
        height: 100,
        borderColor: 'black',
        borderRadius: 4, 
        borderWidth: 3,
        marginBottom: 5,
        overflow: 'hidden'
    }
})