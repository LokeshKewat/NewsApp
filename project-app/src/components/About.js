import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="maindiv">
        <div className="aboutdiv">
          <div className="imgdiv">
            <img src={"../rajatji.png"} alt="logo" />
          </div>
          <div className="resume">
            <p>Hello there!</p>
            <h1>I'm Rajat Sharma</h1>
            <p>
              {" "}
              I was not born with a silver spoon. I come from an extremely humble background. I had seven siblings – six brothers and one sister, and imagine all nine of us including our parents sharing a 100 square feet room which we called home. Every day was a struggle for us.
            </p>
            <div className="buttonbox">
              <button className="btn0" type="submit">
                <a href="https://rajatsharma.in/Home/" target="blank">
                  KNOW MORE
                </a>
              </button>
              <button className="btn1" type="submit">
                <a href="https://rajatsharma.in/myopinion/" target="blank">
                  My Opinions
                </a>
              </button>
              <button className="btn2" type="submit">
                <a href="https://rajatsharma.in/photogallery/" target="blank">
                  Photo Gallery
                </a>
              </button>
              <button className="btn3" type="submit">
                <a href="https://rajatsharma.in/events/" target="blank">
                  Events
                </a>
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}
