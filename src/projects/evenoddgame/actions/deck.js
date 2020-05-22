import {DECK, DECK_DRAW} from './types';

const API_ADDRESS ='https://deckofcardsapi.com/api';
export const fetchDeckSuccess =deckJson=>{
    const {remaining, deck_id}=deckJson;
    return {type: DECK.FETCH_SUCCESS, remaining, deck_id};
}
export const fetchDeckError = error =>{
    return {type:DECK.FETCH_ERROR, message:error.message};
}

export const fetchNewDeck =()=> dispatch=>{
   return  fetch(`${API_ADDRESS}/deck/new/shuffle/`)
    .then(//response => response.json()
        response=>{
            if(response.status !=200)
            {
                throw new Error('Unsuccessful request to deckofcardsapi.com');
            }
            return response.json();
        }    
    )
    .then(json =>
        {
            dispatch(fetchDeckSuccess(json))
        })
    .catch(error => dispatch(fetchDeckError(error)));
}
export const fetchDrawCard = deck_id => dispatch=>{
    console.log("deckid"+deck_id);
    //return fetch('https://deckofcardsapi.com/api/deck/'+deck_id+'/draw/') //https://deckofcardsapi.com/api/deck/v70eqt1fb3tg/draw/
    return fetch(`${API_ADDRESS}/deck/${deck_id}/draw/`)
    .then (response =>{
        if(response.status !=200)
        {
            throw new Error('Unsuccessful request to deckofcardsapi.com');
        }
        return response.json();

    })
    .then(json => {
        if(json.success == true)
        {
            dispatch({
                type:DECK_DRAW.FETCH_SUCCESS,
                cards: json.cards,
                remaining:json.remaining
            })
        }
        else
        {
            dispatch({
                type:DECK_DRAW.FETCH_GAME_END,
                remaining:json.remaining
            })
        }

    })
    .catch(error => dispatch({type:DECK_DRAW.FETCH_ERROR, message:error.message}));
}