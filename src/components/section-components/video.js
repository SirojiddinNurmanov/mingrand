import React, { Component } from "react";

class Video extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="video-area bg-overlay">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center">
                <h2>The Mordan House Video</h2>
                <p>
                  Lorem ipsum dolor amet, consectetur adipisicing elit Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link
                  className="play-btn"
                  to="https://www.youtube.com/embed/Wimkqo8gDZ0"
                  data-effect="mfp-zoom-in"
                >
                  <i className="fa fa-play" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
