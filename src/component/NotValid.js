import React from 'react';
// import '../css/notvalid.css';
import '../css/radeem.css';
import '../css/style.css';

const NotValid = () => {
  return (
    <>
   
   <div className="hero-banner-area jarallax">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 d-flex justify-content-center">
            <div className="hero-banner-content">
              <div className="content">
                <span className="sub-title d-flex justify-content-center">Please Enter valid Number</span>
                <h1 className=" d-flex justify-content-center" style={{color:'white'}}> Retry</h1>
                <div className="btn-box d-flex justify-content-center">
                  {/* <a href="#!" className="default-btn">Redeem</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="jarallax-container-0" style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: -100}}>
      </div>
    </div>
     </>
  )
}

export default NotValid