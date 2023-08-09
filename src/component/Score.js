import React, { useEffect, useState } from "react";
import Footer from "../component/Footer.js";
import Navbar from "../component/Navbar";
import "../css/score.css";
import "../css/style.css";
import { CheckScoreForScorePage, Checkuser } from "../api/hitapi";
import avatar from "../images/avatar.jpg";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const Score = () => {
  const [Showscore, setShowscore]= useState([]);
  const [score, setScore] = useState("");

  useEffect(() => {
    const ani = Cookies.get("ani");
    Checkuser(ani).then((response) => {
      console.log("r", response.data.Score);
      setShowscore(response.data.Score);
    });
    CheckUserScore();
  }, []);


  const CheckUserScore=()=>{
    const ani= Cookies.get("ani");
    CheckScoreForScorePage(ani).then((response)=>{
      setScore(response.data.Score);
      Cookies.set("Score",response.data.Score);
    })
  }

  console.log("Score", Showscore);
  return (
    <div>
      <Navbar />
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
            <img src={avatar} className="player-image" alt="image" />
            <br />
            <h1 title="Sarah Taylor" style={{ color: "white" }}>
              Gaurav Taylor
            </h1>
            <span className="sub-title">Gautay05</span>>
            <div class="btn-box d-flex justify-content-center">
              <span class="default-btn">Score : {score}</span>
            </div>
          </div>
        </div>
      </section>
      {/* End Page Title Area */}
      {/* Start Player Details Area */}
      <section className="player-details-area ptb-100">
        <div className="container">
          <div className="streams-list score-change">
            <div className="row">
              <h3 style={{ color: "white" }}>SCORE</h3>
              {Showscore.map((item) => {
                console.log("item", item);
                const ani = Cookies.get("ani");
                return (
                  <div className="col-lg-4 col-md-6">
                    <div className="single-live-stream-item">
                      <img src={item.imageLink} alt="image" />
                      <div className="content">
                        <h3 style={{ color: "white" }}>{item.gameName}</h3>
                        <ul className="meta">
                          <li>Score</li>
                          <li>{item.score}</li>
                        </ul>
                      </div>
                      <a href="#!!" className="video-btn">
                        <i className="flaticon-play-button" />
                      </a>
                      <Link
                        to={
                          item.gameLink +
                          "?userId=" +
                          ani +
                          "&gameId=" +
                          item.gameId
                        }
                        className="link-btn"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* End Player Details Area */}
      {/* Start Footer Area */}
      <Footer />
    </div>
  );
};

export default Score;
