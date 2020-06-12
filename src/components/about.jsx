import React, { Component } from "react";
import AboutImage from "./aboutImage";

class About extends Component {
  state = {
    imageClick: 0,
  };

  isImageClicked = () => {
    console.log("image clicked");
    this.setState({ imageClick: 1 });
  };

  handleImageClick = () => {
    if (this.state.imageClick) {
      return <AboutImage imageClick={this.state.imageClick} />;
    } else {
      return null;
    }
  };

  render() {
    const aboutImage = this.handleImageClick();
    return (
      <div>
        <div className="mi-about-area mi-section mi-padding-top">
          <div className="container">
            <div className="mi-sectiontitle">
              <h2>About Me</h2>
              <span>About Me</span>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="mi-about-image">
                  <img alt="about" src={"images/about-image.jpg"} />
                  <span className="mi-about-image-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                  </span>
                  {aboutImage}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mi-about-content">
                  <h3>
                    I am <span className="color-theme">Suman</span>
                  </h3>
                  <p>
                    I am a frontend web developer. I can provide clean code and
                    pixel perfect design. I also make website more &amp; more
                    interactive with web animations.
                  </p>
                  <ul>
                    <li>
                      <b>Full Name</b> Suman Kumar Suman
                    </li>
                    <li>
                      <b>Age</b> 20 Years
                    </li>
                    <li>
                      <b>Nationality</b> Indian
                    </li>
                    <li>
                      <b>Languages</b> Hindi, English
                    </li>
                    <li>
                      <b>Address</b> Nawada, Bihar, India
                    </li>
                    <li>
                      <b>Freelance</b> Available
                    </li>
                  </ul>
                  <a className="mi-button disabled" href="/files/empty.pdf">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mi-service-area mi-section mi-padding-top">
          <div className="container">
            <div className="mi-sectiontitle">
              <h2>Services</h2>
              <span>Services</span>
            </div>
            <div className="mi-service-wrapper">
              <div className="row mt-30-reverse">
                <div className="col-lg-4 col-md-6 col-12 mt-30">
                  <div className="mi-service">
                    <span className="mi-service-icon">
                      <i className="lni-color-pallet size-md "></i>
                    </span>
                    <h5>Web Design</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem tenetur ratione quod.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mt-30">
                  <div className="mi-service">
                    <span className="mi-service-icon">
                      <i className="lni-code size-md "></i>
                    </span>
                    <h5>Web Development</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem tenetur ratione quod.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mt-30">
                  <div className="mi-service">
                    <span className="mi-service-icon">
                      <i className="lni-mobile size-md "></i>
                    </span>
                    <h5>Mobile Application</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem tenetur ratione quod.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Reviews section */}
        <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <div className="mi-sectiontitle">
              <h2>Clients</h2>
              <span>Clients</span>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
