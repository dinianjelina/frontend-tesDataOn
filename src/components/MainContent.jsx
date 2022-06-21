import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { FaRegCommentDots } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import img1 from './assets/img1.jpg';
import './MainContent.css';

const MainContent = () => {
  return (
    <section id="main">
      <div className="mainContainer">
        <div className="navLogout">
          <Link to="/">
            <div className="logoutIcon">
              <ArrowBackIcon />
            </div>
          </Link>
        </div>

        <div className="mainHeader">
          <h1>City News</h1>
        </div>

        <div className="mainContent">
          <div className="firstContent">
            <div className="imgFirstContent">
              <img src={img1} alt="img1" />
            </div>
            <div className="descFirstContent">
              <div className="headerFirstContent">
                <div className="profileFirstContent">
                  <img src={img1} alt="profile1" />
                </div>
                <div className="nameFirstContent">
                  <h4>Andree-Ann Labranche</h4>
                  <h5>18 Nov</h5>
                </div>
              </div>

              <div className="textFirstContent">
                <p>We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.</p>
              </div>

              <div className="iconFirstContent">
                <div className="iconShare">
                  <FiShare2 />
                </div>
                <div className="commentLike">
                  <div className="commentIcon">
                    <p>255</p>
                    <FaRegCommentDots />
                  </div>
                  <div className="likeIcon">
                    <p>4K</p>
                    <AiOutlineHeart />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="secondContent">
            <div className="imgSecondContent">
              <img src={img1} alt="img2" />
            </div>
            <div className="descSecondContent">
              <div className="headerSecondContent">
                <div className="nameSecondContent">
                  <h5>17 Nov</h5>
                  <h4>Adrien Stone</h4>
                </div>
                <div className="profileSecondContent">
                  <img src={img1} alt="profile2" />
                </div>
              </div>

              <div className="textSecondContent">
                <p>If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.</p>
              </div>
            </div>
          </div>

          <div className="thirdContent">
            <div className="imgThirdContent">
              <img src={img1} alt="img3" />
            </div>
            <div className="descThirdContent">
              <div className="headerThirdContent">
                <div className="profileThirdContent">
                  <img src={img1} alt="profile3" />
                </div>
                <div className="nameThirdContent">
                  <h5>18 Nov</h5>
                  <h4>Bernard Nolan</h4>
                </div>
              </div>

              <div className="textThirdContent">
                <p>You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.</p>
              </div>
            </div>
          </div>

          <div className="fourthContent">
            <div className="imgFourthContent">
              <img src={img1} alt="img4" />
            </div>
            <div className="descFourthContent">
              <div className="headerFourthContent">
                <div className="nameFourthContent">
                  <h5>17 Nov</h5>
                  <h4>Adrien Stone</h4>
                </div>
                <div className="profileFourthContent">
                  <img src={img1} alt="profile4" />
                </div>
              </div>

              <div className="textFourthContent">
                <p>If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.</p>
              </div>
            </div>
          </div>

          <div className="fifthContent">
            <div className="imgFifthContent">
              <img src={img1} alt="img5" />
            </div>
            <div className="descFifthContent">
              <div className="headerFifthContent">
                <div className="profileFifthContent">
                  <img src={img1} alt="profile5" />
                </div>
                <div className="nameFifthContent">
                  <h5>16 Nov</h5>
                  <h4>Bernard Nolan</h4>
                </div>
              </div>

              <div className="textFifthContent">
                <p>You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.</p>
              </div>
            </div>
          </div>

          <div className="sixthContent">
            <div className="imgSixthContent">
              <img src={img1} alt="img6" />
            </div>
            <div className="descSixthContent">
              <div className="headerSixthContent">
                <div className="nameSixthContent">
                  <h5>17 Nov</h5>
                  <h4>Adrien Stone</h4>
                </div>
                <div className="profileSixthContent">
                  <img src={img1} alt="profile6" />
                </div>
              </div>

              <div className="textSixthContent">
                <p>If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.</p>
              </div>
            </div>
          </div>

          <div className="seventhContent">
            <div className="imgSeventhContent">
              <img src={img1} alt="img7" />
            </div>
            <div className="descSeventhContent">
              <div className="headerSeventhContent">
                <div className="profileSeventhContent">
                  <img src={img1} alt="profile7" />
                </div>
                <div className="nameSeventhContent">
                  <h5>16 Nov</h5>
                  <h4>Bernard Nolan</h4>
                </div>
              </div>

              <div className="textSeventhContent">
                <p>You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.</p>
              </div>
            </div>
          </div>

          <button className="postNewsBtn">POST NEWS</button>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
