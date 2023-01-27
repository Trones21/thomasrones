import React from "react";
import '../css/quoteDisplay.css';
import infoLogo from '../images/info.png';

class QuoteDisplay extends React.Component {
  render() {
    const quoteColor = this.props.displayColor;
    const html = document.documentElement;
    html.style.backgroundColor = quoteColor;

    return (
      <div className="quoteBox">
        <div className="flexRowCenter">
          <span>Favorite Quotes</span>
          <div
            className="icon tooltip"
          >
            <div className="tooltiptextBox">
              <div style={{ display: "flex", flexDirection: "column", alignItems:'center' }}>
                <p className="tooltipItem" style={{ margin: "2%" }}>Like these quotes? Download them here:</p>
                <button className="btn" style={{width:'70%'}}>JSON</button>
              </div>
            </div>
            <img style={{ height: "32px" }} src={infoLogo} alt="Img"></img>

          </div>
        </div>
        <div
          className=""
          key={Math.random()}
          style={{ color: quoteColor }}
        >
          <div id="quote" className="quote">"{this.props.quote}"</div>
          <div id="author" className="quoteAuthor">
            -{this.props.author ? this.props.author : "Unknown"}-
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteDisplay;