import React, { useEffect, useRef, useState } from "react";
import Navbar from "../component/Navbar.js";
import ProfileImage from '../images/3.png';
import '../css/profile.css';
import { Checkuser } from "../api/hitapi.js";
import Footer from "../component//Footer.js";
import avatar from '../images/avatar.jpg';
import avatar1 from '../images/avatar1.jpg';

import Cookies from "js-cookie";
import { BiSolidEdit } from 'react-icons/bi';
import classNames from "classnames";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Button } from "bootstrap";
import MyVerticallyCenteredModal from "./Test.js";

const Profile = () => {

  const [record,setRecord]= useState([]);
  const [currentPoint,setcurrentPoint] = useState([]);
  const owlCarouselRef = useRef(null);
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(()=>
  {

    const ani = Cookies.get("ani");
    Checkuser(ani).then((response)=>{
      console.log("Score",response.data);
      setRecord(response.data.sumScore);
      setcurrentPoint(response.data.Points.points);
    
      Cookies.set("point",response.data.Points.points);
      Cookies.set("score",response.data.sumScore);
    })
  },[])


  const options = {
    center: false,
    items: 4,
    loop: true,
    margin: 5,
    stagePadding: 15,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      600: {
        items: 3,
      },
      700: {
        items: 3,
      }
    },
  };


  const AddClass=()=>{
    var element = document.getElementById("myDIV");

    console.log("AddClass",element);
    
    
  }

  const number = Cookies.get("ani");
  const score = Cookies.get("score");
  const point = Cookies.get("point");

  const[hide,setHide]=useState(false);

  return (
    <>
      {/* <!-- Start Navbar Area --> */}
     
    <Navbar />
      {/* <!-- Search Overlay --> */}
      <div class="search-overlay">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="search-overlay-layer"></div>
            <div class="search-overlay-layer"></div>
            <div class="search-overlay-layer"></div>

            <div class="search-overlay-close">
              <span class="search-overlay-close-line"></span>
              <span class="search-overlay-close-line"></span>
            </div>

            <div class="search-overlay-form">
              <form>
                <input
                  type="text"
                  class="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i class="flaticon-search-1"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Search Overlay --> */}

      {/* <!-- Start Page Title Area --> */}
      <section class="page-title-area page-title-bg1">
        <div class="container">
          <div class="page-title-content img-box">
            <img src={avatar} class="player-image" alt="image" />
            <div onClick={()=>setHide(!hide)}  class="edit-box"><BiSolidEdit /></div>
            <br />
            <h1 title="Sarah Taylor" style={{color:'white'}}>Player</h1>
            <span class="sub-title">{number}</span>
          
            <div className={classNames(hide &&'cus-icon-box','')} id="myDIV">
              <div class="cus-icon-box-inner">
              <OwlCarousel
                ref={owlCarouselRef}
                className="story owl-carousel owl-theme"
                {...options}
              >
                <div class="icon-box-inner">

                  <img src={avatar1} class="player-image" alt="image" />
                </div>
                <div class="icon-box-inner">
                  <img src={avatar} class="player-image" alt="image" />
                </div>
                <div class="icon-box-inner">
                  <img src={avatar} class="player-image" alt="image" />
                </div>
                </OwlCarousel>
              </div>
              <div class="edit-name"><span><input type="text" /></span></div>
              <div class="edit-btn"><button type="button">Save</button></div>
            </div>
          </div>         
        </div>
        
      </section>
      {/* <!-- End Page Title Area --> */}

      {/* <!-- Start Player Details Area --> */}
      <section class="player-details-area ptb-100">
        <div class="container">
          <div class="player-details-desc">
            <ul class="player-meta">
              <li>
                <div class="icon">
                  <i class="flaticon-3d"></i>
                </div>
                Highest Score
                <span>{record}</span>
              </li>

              <li>
                <div class="icon">
                  <i class="flaticon-network"></i>
                </div>
                Points
                <span>{currentPoint}</span>
              </li>

              <li>
                <div class="icon">
                  <i class="flaticon-fall"></i>
                </div>
                Comments
                <span>70</span>
              </li>

              <li>
                <div class="icon">
                  <i class="flaticon-game-computer"></i>
                </div>
                WIN RATIO
                <span>74.8%</span>
              </li>

              <li>
                <div class="icon">
                  <i class="flaticon-network"></i>
                </div>
                Follow
                <div class="social">
                  <a href="#">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="bx bxl-twitter"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- End Player Details Area --> */}

     <Footer />

     <Button variant="primary" onClick={() => setModalShow(true)}>
            Launch vertically centered modal
          </Button>
    
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
    </>
  );
};

export default Profile;
