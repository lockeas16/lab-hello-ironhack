import React from "react";

function Hero(){
  return(
    <section className="uk-section primary-back uk-section-large" uk-height-viewport="offset-top: true">
      <div className="uk-container uk-container-large">
          <div className="uk-grid-small uk-child-width-1-2" uk-grid="">
            <div>
              <h1 className="uk-text-bold uk-heading-large primary-color primary-font">
                Say Hello to ReactJS
              </h1>
              <h3 className="uk-text-lead uk-width-1-2 muted-color primary-font">
                You will learn a Frontend framework from scratch, to become a
                Ninja Developer.
              </h3>
              <button className="uk-button uk-button-secondary uk-button-large btn secondary-color uk-text-capitalize uk-text-bold text-large primary-font">
                Awesome!
              </button>
            </div>
            <div>
              <div className="uk-position-absolute uk-position-top-center react1">
                <img src="images/react-logo.svg" alt=""/>
              </div>
              <div className="uk-position-absolute uk-position-center react2">
                <img src="images/react-logo.svg" alt=""/>
              </div>
              <div className="uk-position-absolute uk-position-bottom-center react3">
                <img src="images/react-logo.svg" alt=""/>
              </div>
              <div className="uk-position-absolute uk-position-right react4">
                <img src="images/react-logo.svg" alt=""/>
              </div>
              <div className="uk-position-absolute uk-position-center-right react5">
                <img src="images/react-logo.svg" alt=""/>
              </div>
              <div className="uk-position-absolute uk-position-bottom-right react6">
                <img src="images/react-logo.svg" alt=""/>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Hero;