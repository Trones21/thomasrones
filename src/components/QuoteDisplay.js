import React from "react";
import '../css/quoteDisplay.css';
import infoLogo from '../images/info.png';

class JavascriptDataDownloader {

  constructor(data={}) {
      this.data = data;
  }

  download (type_of = "text/plain", filename= "quotes.json") {
      let body = document.body;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([JSON.stringify(this.data, null, 2)], {
          type: type_of
      }));
      a.setAttribute("download", filename);
      body.appendChild(a);
      a.click();
      body.removeChild(a);
  }
} 

class QuoteDisplay extends React.Component {


  downloadQuotes = () => {
    new JavascriptDataDownloader(this.props.quotes).download();
  }

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
            style={{zIndex:6, marginLeft:'0.5vw'}}

          >
            <div className="tooltiptextBox">
              <div style={{ display: "flex", flexDirection: "column", alignItems:'center' }}>
                <p className="tooltipItem" style={{ margin: "2%" }}>Like these quotes? Download them here:</p>
                <button 
                className="btn" 
                style={{width:'70%'}}
                onClick={this.downloadQuotes}
                >JSON</button>
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