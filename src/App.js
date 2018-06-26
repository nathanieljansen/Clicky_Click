import React, { Component } from 'react';
import Image from './components/ImageCard';
import Wrapper from "./components/Wrapper";
import Instructions from "./components/Instructions";
import GameHeader from "./components/GameHeader";
// import GameFooter from "./components/GameFooter";




import json from './images.json'



class App extends Component {
  state = {
    cards: [...json]
  }


  // method click event on algorithm this.state to set state to the output of the algorithm
  render() {
    return (
      
      <Wrapper>
        < GameHeader>Nada</GameHeader>
        <Instructions>Click a Character But Only Once</Instructions>
     {this.state.cards.map(card => (
          <Image
          // 
            removeFriend={this.removeFriend}
            id={card.id}
            key={card.id}
            image={card.image}
          />
          
        ))}
        {/* <GameFooter></GameFooter> */}
        </Wrapper>
    
        
        
    );
  }
}

export default App;
