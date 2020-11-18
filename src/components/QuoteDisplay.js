import React from "react";

class QuoteDisplay extends React.Component {
  render() {
    const quoteColor = this.props.displayColor;
    const html = document.documentElement;
    html.style.backgroundColor = quoteColor;

    return (
      <div style={{ backgroundColor: "white" }} className="quotebox">
        <div
          className="fadeIn"
          key={Math.random()}
          style={{ color: quoteColor }}
        >
          <h1 id="quote">"{this.props.quote}"</h1>
          <h5 id="author">
            -{this.props.author ? this.props.author : "Unknown"}-
          </h5>
        </div>
        <button
          style={{ backgroundColor: quoteColor }}
          id="newquote"
          onClick={this.props.handleClick}
        >
          New quote
        </button>
      </div>
    );
  }
}

export default QuoteDisplay;