import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings';
import { fetchNewDeck } from '../actions/deck';
import fetchStates from '../reducers/fetchStates';
import Instructions from './Instructions';
import DrawCard from './DrawCard';
import Card from './Card';
import Guess from './Guess';
import GameState from './GameState';

class App extends Component {
  startGame = () => {
    this.props.startGame();
    this.props.fetchNewDeck();

  }
  render() {
    console.log('this!!', this);
    if (this.props.fetchState == fetchStates.error) {
      return (
        <div>
          <p>An error has occurred. Please try reloading the app.</p>
          <p>{this.props.message}</p>
        </div>
      )
    }
    else if (this.props.fetchState == fetchStates.gameEnd) {

      return (<div>

        <div>♣️ ♥️ Guess Even or Odds Cards ♠️ ♦️</div>
        <h3>Game is Over!</h3>
        <GameState />
        <br/>
        <button onClick={this.startGame}>Start Game</button>
      </div>)


    }
    return (
      <div>
        <div>♣️ ♥️ Guess Even or Odds Cards ♠️ ♦️</div>{

          this.props.gameStarted ? (
            <div>
              <h3>Game started!</h3>
              <GameState />
              {/* <br/> */}
              <Guess />
              <br />
              <DrawCard /><hr />
              <Card />
              <hr />
              <button onClick={this.props.cancelGame}>Cancel Game</button>
            </div>) : (
              <div>
                <h3>New Game!</h3>
                <br />

                <hr />
                <button onClick={this.startGame}>Start Game</button>
                <hr />
                <Instructions />
              </div>

            )
        }
      </div>
    )






  }
}
const mapStateToProps = state => {
  /*   console.log('state*: ', state);
    const { gameStarted, fetchState, message } = state.settings;
    const {fetchState,message} = state.deck;
   */
  const {
    settings: { gameStarted },
    deck: { fetchState, message }
  } = state;
  return { gameStarted, fetchState, message };
}
/* const mapDispatchToProps = dispatch => {
  return {
    startGame: () => dispatch(startGame()),
    cancelGame: () => dispatch(cancelGame()),
    fetchNewDeck: () => dispatch(fetchNewDeck())

  };
} */

//const componentConnector = connect(mapStateToProps, mapDispatchToProps);
const componentConnector = connect(mapStateToProps, { startGame, cancelGame, fetchNewDeck });

export default componentConnector(App);
