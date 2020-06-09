import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'

import Hand from './Hand'
import PushButton from './PushButton'
import '../../actions'

import OmniAural from 'omniaural'

export default class Blackjack extends Component{
    constructor(){
        super()
        let cards = this.createCards()
        this.state = {}

        OmniAural.state.deck.set(cards)
        OmniAural.register(this,['dealersHand','deck','players'])
    }

    createCards = ()=>{
        let deckCount = 1 //To be able to create multiple decks
        let cardLength = 52 
        let newCards = []

        for(let i = 0; i < (cardLength * deckCount); i++){
            newCards.push(i)
        }

        return newCards
    }

    _onNewRound = ()=>{
        OmniAural.onNewRound()
    
        //Dealing the cards to dealers and players
        setTimeout(OmniAural.dealersHand,1000)
        setTimeout(OmniAural.dealersHand,2000)
        for(let i = 0; i < this.state.players.length; i++){
            setTimeout(()=>{OmniAural.playersHand(i)},1000)
            setTimeout(()=>{OmniAural.playersHand(i)},2000)
        }
    }

    _onAddPlayer = ()=>{
        OmniAural.onAddPlayer({hand:[]})
    }

    render(){
        player = (player,index)=>{
            return <Hand key={index} hand={player.hand}/>
        }

        return(
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.header}>
                    Blackjack
                </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <PushButton onButton={this._onNewRound} text='New Round'/>
                    <PushButton onButton={this._onAddPlayer} text='Add Player'/>
                </View>
                <View>
                    <Text style={styles.subHeader}>
                        Dealer:
                    </Text>
                    <Hand hand={this.state.dealersHand} 
                        isDealer={true}
                    />
                </View>
                <View>
                    <Text style={styles.subHeader}>
                        Players:
                    </Text>
                    {this.state.players.map(player)}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        //flex:1,
        backgroundColor: 'green'
    },
    header:{
        fontSize: 40,
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 20,
        // fontFamily: 'TradeWinds'
    },
    subHeader:{
        fontSize: 20,
        //fontFamily: 'Pacifico'
    }
})