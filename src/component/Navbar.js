import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/style.css';

const Navbar = () => {

  const [menu,setMenu] = useState('none');
  // let menuRef = useRef();
  const showMenu=()=> {

    console.log("inside showMenu Button");
 
    if(menu==='none')
    {
      setMenu('block');
      // handler();
    }
    else{
      setMenu('none');
    }
}

// let handler=(e)=>{
//   console.log("e",e)
//     if(menuRef.current.contains(e.target))
//     {
//       console.log(menu)
//       setMenu('none');
//       console.log(menuRef.current)
//     }
//     document.addEventListener("mousedown",handler)
// };


  return (
    <>
    {/* Start Navbar Area */}
    <div class="navbar-area">
    <div class="zelda-responsive-nav"  >
      <div class="container">
        <div class="zelda-responsive-menu mean-container">
          <div class="mean-bar">
            <button
              class="meanmenu-reveal"
              onClick={()=>showMenu()}
            //   style="background: ; color: ; right: 0; left: auto"
              style={{background: '' , color : '' , right: 0 , left: 'auto'}}
            >
              <span>
                <span>
                  <span></span>
                </span>
              </span>
            </button>
            <nav class="mean-nav">
              <ul class="navbar-nav" style={{display:`${menu}`}}>
                <li class="nav-item">
                  <Link to="/home" class="nav-link">
                    Home{" "}
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to="/Profile" class="nav-link">
                    Profile{" "}
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to="/Score" class="nav-link">
                    Score{" "}
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to="/Leader" class="nav-link">
                    Leaderboard{" "}
                  </Link>
                </li>

                <li class="nav-item mean-last">
                  <Link to="/Points" class="nav-link">
                    Points{" "}
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to="/Radeem" class="nav-link">
                    Redeem{" "}
                  </Link>
                </li>
              </ul>

              <div class="others-option d-flex align-items-center"></div>
            </nav>
          </div>
          <div class="logo" style={{color:'white'}}>
            <Link to="/home">
              <h6
                class="wow animate__animated animate__fadeInRight"
                data-wow-delay="00ms"
                data-wow-duration="1000ms"
                style={{color:'white'}}
                
              >
                GAME 360
              </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div class="zelda-nav" >
      <div class="container-fluid">
        <nav class="navbar navbar-expand-md navbar-light">
          <Link to="/home" class="navbar-brand" style={{color:'white'}}>
            <h6
              class="wow animate__animated animate__fadeInRight"
              data-wow-delay="00ms"
              data-wow-duration="1000ms"
            >
              GAME 360
            </h6>
          </Link>

          <div class="collapse navbar-collapse mean-menu">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/home" class="nav-link">
                  Home{" "}
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/Profile" class="nav-link">
                  Profile{" "}
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/Score" class="nav-link">
                  Score{" "}
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/Leader" class="nav-link">
                  Leaderboard{" "}
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/Points" class="nav-link">
                  Points{" "}
                </Link>
              </li>

              <li class="nav-item">
                  <Link to="/Radeem" class="nav-link">
                    Redeem{" "}
                  </Link>
                </li>
                
            </ul>

            <div class="others-option d-flex align-items-center">
              <div class="option-item">
                <div class="search-box">
                  <i class="flaticon-search-1"></i>
                </div>
              </div>

              <div class="option-item">
                <div class="side-menu-btn">
                  <i
                    class="flaticon-null-2"
                    data-bs-toggle="modal"
                    data-bs-target="#sidebarModal"
                  ></i>
                </div>
              </div>
            </div>

            <div class="dark-version-btn" style={{display : 'none'}}>
              <label id="switch" class="switch">
                <input
                  type="checkbox"
                  onchange="toggleTheme()"
                  id="slider"
                />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <div class="others-option-for-responsive">
      <div class="container">
        <div class="dot-menu">
          <div class="inner">
            <div class="circle circle-one"></div>
            <div class="circle circle-two"></div>
            <div class="circle circle-three"></div>
          </div>
        </div>

        <div class="container">
          <div class="option-inner">
            <div class="others-option">
              <div class="option-item">
                <div class="search-box">
                  <i class="flaticon-search-1"></i>
                </div>
              </div>

              <div class="option-item">
                <div class="side-menu-btn">
                  <i
                    class="flaticon-null-2"
                    data-bs-toggle="modal"
                    data-bs-target="#sidebarModal"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- End Navbar Area --> */}
  </>
  )
}

export default Navbar