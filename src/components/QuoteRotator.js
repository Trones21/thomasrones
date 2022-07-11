import React from "react";
import QuoteDisplay from "./QuoteDisplay";


const quotes = [
  {
    "quote": "To unroll or not to unroll, that is the question",
    "author": ""
  }, {
    "quote": "Dependency injection is a 25-dollar term for a 5-cent concept.",
    "author": ""
  }, {
    "quote": "Resource Acquisition Is Initialization",
    "author": ""
  }, {
    "quote": "All patents really do is slow down competitors. It's like if you are a ship and you are dropping mines behind your ship to slow down other ships, you know, and we don't want to drop the mines. But I think true competitive advantage on the technology front is more about your rate of innovation than it is the degree to which you are slowing others down",
    "author": "Elon Musk"
  }, {
    "quote": "If you're really trying to control how your brand is presented at retail, how it's priced, how it's merchandised ans so forth, having thousands of wholesale partners is really antithetical to getting that done"
    , "author": "Matt Powell"
  },
  {
    "quote": "The purpose of bureaucracy is to compensate for incompetence and a lack of discipline.",
    "author": "Jim Collins"
  },


]

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
  shuffleQuotes(array) {
    return array.sort(() => Math.random() - 0.5)
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
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
          displayColor='white'
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
    );
  }
}

export default QuoteRotator;
