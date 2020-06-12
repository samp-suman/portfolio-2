import React from "react";

const AboutImage = (props) => {
  const handleClose = () => {
    if (props.imageClick) {
      props.imageClick = 0;
    }
  };

  return (
    <div className="fslightbox-container fslightbox-full-dimension fslightbox-fade-in-strong">
      <div className="fslightbox-nav">
        <div className="fslightbox-toolbar">
          <div
            className="fslightbox-toolbar-button fslightbox-flex-centered"
            title="Enter fullscreen"
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fslightbox-svg-path"
                d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"
              ></path>
            </svg>
          </div>
          <div
            className="fslightbox-toolbar-button fslightbox-flex-centered"
            title="Close"
            onClick={handleClose}
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fslightbox-svg-path"
                d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="fslightbox-absoluted fslightbox-full-dimension">
        <div
          className="fslightbox-source-outer fslightbox-absoluted fslightbox-full-dimension fslightbox-flex-centered"
          style={{ transform: "translateX(0px)" }}
        >
          <div className="fslightbox-fade-in-strong">
            <img
              className="fslightbox-source fslightbox-opacity-1"
              src="/images/about-image-lg.jpg"
              alt="About"
              style={{ width: "817px", height: "550.249px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutImage;
