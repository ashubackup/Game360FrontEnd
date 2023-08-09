import React, { useEffect, useState } from "react";
import ProfileImage from "../images/3.png";
import team1 from "../images/top-team-img1.png";
import team2 from "../images/top-team-img2.png";
import team3 from "../images/top-team-img3.png";
import team4 from "../images/top-team-img4.png";
import team5 from "../images/top-team-img5.png";
import Navbar from "../component/Navbar";
import Footer from "./Footer";
import { Leader } from "../api/hitapi";

const Leaderboard = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    Leader().then((response) => {
      console.log("response", response.data.Score);
      setList(response.data.Score);
    });
  }, []);
  return (
    <>
      <div>
        <Navbar />
        {/* Search Overlay */}
        <div className="search-overlay">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="search-overlay-layer" />
              <div className="search-overlay-layer" />
              <div className="search-overlay-layer" />
              <div className="search-overlay-close">
                <span className="search-overlay-close-line" />
                <span className="search-overlay-close-line" />
              </div>
              <div className="search-overlay-form">
                <form>
                  <input
                    type="text"
                    className="input-search"
                    placeholder="Search here..."
                  />
                  <button type="submit">
                    <i className="flaticon-search-1" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* End Search Overlay */}
        {/* Start Page Title Area */}
        <section className="page-title-area page-title-bg1">
          <div className="container">
            <div className="page-title-content">
              <br />
              <h1 title="Sarah Taylor" style={{ color: "white" }}>
                LEADERBOARD
              </h1>
            </div>
          </div>
        </section>
        {/* End Page Title Area */}
        {/* Start Player Details Area */}
        <section
          className="player-details-area ptb-100"
          style={{ color: "white" }}
        >
          <div className="container">
            <div className="row">
              {list.map((item, index) => {
                return(
                <div className="col-lg-6 col-md-12">
                  <div className="single-stream-schedule-box">
                    <span className="date">{index+1}</span>
                    <div className="content">
                      <span className="time">
                        <img src={team1} />
                      </span>
                      <h3>{item.score}</h3>
                    </div>
                    <a href="#!" className="link-btn" />
                  </div>
                </div>
                );
              })}

             
            </div>
          </div>
        </section>
        {/* End Player Details Area */}
        <Footer />
      </div>
    </>
  );
};

export default Leaderboard;
