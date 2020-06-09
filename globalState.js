import OmniAural from 'omniaural';

OmniAural.initGlobalState({
    deck: [],
    players:
    [
        {
            hand: [],
            isDone: false,
            handResult: null,
            score: 100,
            bet: 0
        }
    ],
    dealersHand: [],
    allDone: false
})