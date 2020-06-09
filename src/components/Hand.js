import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native' 

import Card from './Card'

export default class Hand extends Component{
    render(){
        displayHand =  (e,index)=>{
            return <Card key={index} cardIndex={e}/>
        }

        return(
            <View>
                <View style={styles.dealershand}>
                    {this.props.hand.map(displayHand)}
                </View>
            </View>
        )
    }   
}

const styles = StyleSheet.create({
    dealershand:{
        flexDirection: 'row',
        justifyContent: 'center'
    }
})