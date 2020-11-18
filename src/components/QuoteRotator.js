import React from "react";
import QuoteDisplay from "./QuoteDisplay";


const quotes = [
	{
    "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "author": "Thomas Edison"
    }, {
    "quote": "You can observe a lot just by watching.",
    "author": "Yogi Berra"
    }, {
    "quote": "A house divided against itself cannot stand.",
    "author": "Abraham Lincoln"
    }]

class QuoteRotator extends React.Component {
    constructor() {
      super();
      this.state = {
        quote: quotes[0].quote,
        author: quotes[0].author,
      };
    }
    randomQuote() {
      const randomNumber = Math.floor(Math.random() * quotes.length);
      return quotes[randomNumber];
      
    }
    shuffleQuotes(array){
      return array.sort(()=>Math.random()-0.5)
    }

    componentDidMount(){
        this.timerID = setInterval(() =>{
        const generateRandomQuote = this.randomQuote();
        this.setState({
          quote: generateRandomQuote.quote,
          author: generateRandomQuote.author
        });
        this.shuffleQuotes(quotes)
      }, 10000);
    }

  
    handleClick = () => {
      const generateRandomQuote = this.randomQuote();
      this.setState({
        quote: generateRandomQuote.quote,
        author: generateRandomQuote.author
      });
      this.shuffleQuotes(quotes)
    };
  
    randomColor() {
      const color = `rgb(
        ${Math.floor(Math.random() * 155)},
        ${Math.floor(Math.random() * 155)},
        ${Math.floor(Math.random() * 155)})`;
      return color;
    }
    
    render() {
      return (
        <div>
          <QuoteDisplay
            displayColor='rgb(6, 54, 74)'
            handleClick={this.handleClick}
            {...this.state}
          />
        </div>
      );
    }
  }

  export default QuoteRotator;
  