import OmniAural from 'omniaural'

const onNewRound = ()=>{
    //clear all players hands
    let players = OmniAural.state.players.value()
    for(let i = 0; i < players.length; i++){
        players[i].hand = []
    }

    //Shuffles the deck
    let shuffleDeck = OmniAural.state.deck.value()
    for(let i = 0; i < shuffleDeck.length; i++){
        let rand = Math.floor(Math.random() * shuffleDeck.length)
        let temp = shuffleDeck[rand]
        shuffleDeck[rand] = shuffleDeck[i]
        shuffleDeck[i] = temp
    }
    
    //Updating the states globally (clearing the game and shuffled the deck)
    OmniAural.state.players.set(players)
    OmniAural.state.dealersHand.set([])
    OmniAural.state.deck.set(shuffleDeck)
}

const onAddPlayer = (newPlayer)=>{
    let prevPlayer = OmniAural.state.players.value()
    OmniAural.state.players.set([...prevPlayer,newPlayer])    
}

const dealersHand = ()=>{
    let card = OmniAural.state.deck.value().pop()
    OmniAural.state.dealersHand.value().push(card)
    OmniAural.state.dealersHand.set(OmniAural.state.dealersHand.value())
    OmniAural.state.deck.set(OmniAural.state.deck.value())
}

const playersHand = (playerIndex)=>{
    let card = OmniAural.state.deck.value().pop()
    let newPlayers = OmniAural.state.players.value()
    let player = newPlayers[playerIndex]
    player.hand.push(card)

    OmniAural.state.players.set(newPlayers)
    OmniAural.state.deck.set(OmniAural.state.deck.value())
}

OmniAural.addActions(onNewRound, onAddPlayer, dealersHand, playersHand)