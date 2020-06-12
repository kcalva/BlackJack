import React, { Component } from 'react'
import { StyleSheet, View, Text} from 'react-native' 

import Card from './Card'
import PushButton2 from './PushButton2'

export default class Hand extends Component{
    render(){
        displayHand =  (e,index)=>{
            return <Card key={index} cardIndex={e}/>
        }

        let value = this.props.handVal
        let buttonHidden = false

        if(value > 21){
            value = 'Bust'
            buttonHidden = true
        }

        else if(value === 21 && this.props.hand.length === 2){
            value = 'Blackjack'
            buttonHidden = true
        }

        return(
            <View>
                {this.props.isDealer? 
                    <View style={styles.dealershand}>
                        {this.props.score === 0 && this.props.bet === 0 ?
                            null: 
                            this.props.hand.map(displayHand)
                        }
                    </View>:
                    <View style={styles.playershand}>
                        <View style={{flexDirection:'row'}}>
                            {this.props.score === 0 && this.props.bet === 0?
                                null:
                                this.props.hand.map(displayHand)
                            }
                        </View>
                        {this.props.isDealer || (this.props.score === 0 && this.props.bet === 0)?
                            null:
                            <Text>
                                Score: {this.props.score}{'\n'}
                                Bet: {this.props.bet}
                            </Text>
                        }
                    </View>
                }
                <Text style={{alignSelf:'center'}}>
                    {(this.props.score === 0 && this.props.bet === 0)?
                        null:
                        value
                    }
                </Text>
                {this.props.isDealer || this.props.isPlayerDone || buttonHidden || value === 21 || (this.props.score === 0 && this.props.bet === 0)?
                    null:
                    <View>
                        <View style={{flexDirection:'row', justifyContent:'space-between',width:210,marginLeft: 105}}>
                            <PushButton2 onBetButton={this.props.onBet} text='bet 10+'/>
                            <PushButton2 onBetButton={this.props.onReset} text='reset'/>
                        </View>
                    </View>
                }
            </View>
        )
    }   
}

const styles = StyleSheet.create({
    dealershand:{
        flexDirection: 'row',
        justifyContent: 'center'
    },
    playershand:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
        marginTop: 25
    }
})