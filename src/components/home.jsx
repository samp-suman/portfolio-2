import React from "react";

const Home = () => {
  return (
    <div>
      <div className="mi-home-area mi-padding-section">
        <div className="mi-home-particle">
          <canvas
            width="771"
            height="657"
            style={{ width: "100%", height: "100%" }}
          ></canvas>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  Hi, I am{" "}
                  <span className="color-theme">Suman Kumar Suman</span>
                </h1>
                <p>
                  I am a frontend web developer. I can provide clean code and
                  pixel perfect design. I also make website more &amp; more
                  interactive with web animations.
                </p>
                <ul className="mi-socialicons mi-socialicons-bordered">
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/in/samp-suman/"
                    >
                      <i className="lni-linkedin size-md "></i>
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://medium.com/@samp.suman"
                    >
                      <i className="lni-medium size-md "></i>
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://github.com/samp-suman"
                    >
                      <i className="lni-github size-md "></i>
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.instagram.com/samp_suman/"
                    >
                      <i className="lni-instagram size-md "></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
