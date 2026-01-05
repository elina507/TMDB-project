import React from "react";
import "./Businnes.scss";
import img1 from "../../../assets/images/img1.svg";
import img2 from "../../../assets/images/img2.svg";
import img3 from "../../../assets/images/img3.svg";
import img4 from "../../../assets/images/img4.svg";
import studios from "../../../assets/images/studios.svg";
import chili from "../../../assets/images/chili.svg";
import clix from "../../../assets/images/clix.png";
import epam from "../../../assets/images/epam.svg";
import filmin from "../../../assets/images/filmin.svg";
import freecast from "../../../assets/images/freecast.svg";
import hypelist from "../../../assets/images/hypelist.png";
import play from "../../../assets/images/play.png";
import kt from "../../../assets/images/kt.svg";
import boxd from "../../../assets/images/boxd.svg"
import never from "../../../assets/images/never.svg"
import plex from "../../../assets/images/plex.svg"
import quickline from "../../../assets/images/quickline.svg"
import trakt from "../../../assets/images/trakt.svg"
import ugreen from "../../../assets/images/ugreen.svg"
import vid from "../../../assets/images/vidangel.svg"
import tvnu from "../../../assets/images/tvnu.png"

const Busennes = () => {
  return (
    <div id="businnes">
      <div className="container">
        <div className="businnes">
          <h3>API for Business</h3>
          <h1>
            Harness the Power & Reach <br /> of TMDB
          </h1>
          <button>Contact us to learn more</button>
          <p>
            <span>The Movie Database</span> is excited to introduce our API for
            Business! For <br />
            over 17 years, TMDB has been developing a standalone movie and{" "}
            <br /> TV database that has grown to be one of the most complete
            sources <br /> of metadata on the internet. With a strong
            international focus—39 <br />
            languages supported & users in more than 180 countries—our depth{" "}
            <br />
            and breadth of data is unmatched.
          </p>
          <div className="texts">
            <div className="text">
              <img src={img1} alt="img1" />
              <p>
                <span>A commercially available API</span> that allows you to use
                our <br /> data and images to enhance the appeal,
                discoverability, <br /> and engagement of your product or
                service.
              </p>
            </div>
            <div className="text">
              <img src={img2} alt="img2" />
              <p>
                <span> A deep and robust database </span>that is continuously
                updated <br /> and expanded upon by community contributions.
              </p>
            </div>
          </div>
          <div className="texts">
            <div className="text">
              <img src={img3} alt="img3" />
              <p>
                <span>A cost-effective implementation</span> that is simple to
                launch <br /> and integrates easily with other platforms.
              </p>
            </div>
            <div className="text">
              <img src={img4} alt="img4" />
              <p>
                <span> Exceptional availability and uptime.</span> TMDB is built
                to be <br /> reliable and with over a decade of trust and
                testing to our
                <br /> name.
              </p>
            </div>
          </div>
          <h2>Trusted by These Lovely Brands</h2>
          <div className="images">
            <img src={studios} alt="studios" />
            <img src={chili} alt="chili" />
            <img src={clix} alt="clix" />
            <img src={epam} alt="epam" />
            <img src={filmin} alt="filmin" />
            <img src={freecast} alt="freecast" />
            <img src={hypelist} alt="hypelist" />
            <img src={play} alt="play" />
            <img src={kt} alt="kt" />
            <img src={boxd} alt="boxd" />
            <img src={never} alt="never" />
            <img src={plex} alt="plex" />
            <img src={quickline} alt="quickline" />
            <img src={trakt} alt="trakt" />
            <img src={ugreen} alt="ugreen" />
            <img src={vid} alt="vidangel" />
            <img src={tvnu} alt="tvnu" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Busennes;
