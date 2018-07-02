import React, { Component } from 'react';
import Image from './components/ImageCard';
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import GameHeader from "./components/GameHeader";
import GameFooter from "./components/GameFooter";
import images from './images.json'
import {Chance} from 'chance';

const chance = new Chance()

class App extends Component {
  state = {
    cards: images,
    score: 0,
    highscore: 0,
    clickCount: 0,
  }

  handleClick = id  => {
    
    console.log(this.state.cards.indexOf(id))
    if (this.state.cards.indexOf(id) === -1) {
      this.shuffle();
      this.setState({ 
        card: 1 });
        this.handleIncrement();
    } else {
    this.loser()
    this.setState({
      cards: (id =1 ),
      score: this.state.score + 1
    })
    
  }
}

  shuffle = () => {
this.setState({
  cards: chance.shuffle(this.state.cards)
})
  }

  loser = () => {
    if (this.state.clickCount === 1) {
      alert("eat my dick")
    }
  }

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore
    });
    if (newScore >= this.state.topScore) {
      this.setState({ highscore: newScore });
    }
    else if (newScore === 12) {
      
      alert("You win!");
    }
    this.shuffle();
  };


  // method click event on algorithm this.state to set state to the output of the algorithm
  render() {
    return (
      
      <Wrapper>
        < GameHeader >Clicky Game</GameHeader>
        <Score score={this.state.score} highscore={this.state.highscore}> </Score>
     {this.state.cards.map(card => (
          <Image
          // 
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
            handleClick={this.handleClick}
          />
          
        ))}
         <GameFooter></GameFooter>
        </Wrapper>
    
        
        
    );
  }
}

export default App;
