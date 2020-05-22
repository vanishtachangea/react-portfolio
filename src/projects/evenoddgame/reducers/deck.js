import {DECK, DECK_DRAW} from '../actions/types';
  import fetchStates from './fetchStates';
  
  export const DEFAULT_DECK = {
      deck_id: '',
      remaining: 0,
      fetchState:'',
      message:'', 
      cards : []
    }
  
  export const deckReducer = (state = DEFAULT_DECK, action) => {
    let remaining, deck_id, cards;  
   
    switch (action.type) {     
        case DECK.FETCH_SUCCESS:
        //const {remaining, deck_id}=action;
        ( {remaining, deck_id}=action);
        return{       
          ...state,remaining,deck_id, fetchState:fetchStates.success
        }
        case DECK.FETCH_ERROR:
        return {...state,message:action.message, fetchState:fetchStates.error}

        case DECK_DRAW.FETCH_SUCCESS:
        //( {cards, remaining}=action);
        ( {remaining, cards}=action);
        return {...state, cards, remaining,fetchState:fetchStates.success}
        case DECK_DRAW.FETCH_ERROR:
        return {...state, message:action.message, fetchState:fetchStates.error}
        case DECK_DRAW.FETCH_GAME_END:
        return {...state, message:action.message, fetchState:fetchStates.gameEnd}
        default:
          return state;
          break;
      }
    
    };
    export default deckReducer;