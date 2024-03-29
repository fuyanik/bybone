import "./footerImages.css";
import footerImagesImage from "./images/footerImagesImage.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import p1 from "./images/1.jpg";
import p2 from "./images/2.jpg";
import p3 from "./images/3.jpg";
import p4 from "./images/4.jpg";
import p5 from "./images/5.jpg";
import p6 from "./images/6.jpg";
import p7 from "./images/7.jpg";
import p8 from "./images/8.jpg";
import p9 from "./images/9.jpg";
import p10 from "./images/10.jpg";
import p11 from "./images/11.jpg";
import p12 from "./images/12.jpg";
import p13 from "./images/13.jpg";
import p14 from "./images/14.jpg";
import p15 from "./images/15.jpg";
import p16 from "./images/16.jpg";
import p17 from "./images/17.jpg";
import p18 from "./images/18.jpg";
import p19 from "./images/19.jpg";
import p20 from "./images/20.jpg";
import p21 from "./images/21.jpg";
import p22 from "./images/22.jpg";
import p23 from "./images/23.jpg";
import p24 from "./images/24.jpg";
import p25 from "./images/25.jpg";
import p26 from "./images/26.jpg";
import p27 from "./images/27.jpg";
import p28 from "./images/28.jpg";
import p29 from "./images/29.jpg";
import p30 from "./images/30.jpg";
import p31 from "./images/31.jpg";
import p32 from "./images/32.jpg";
import p33 from "./images/33.jpg";
import p34 from "./images/34.jpg";
import p35 from "./images/35.jpg";

import { setGlobalState, useGlobalState } from "../../hookState.js";
import {Routes, Route, Link, NavLink} from 'react-router-dom';


const FooterImages = () => { 
    const[isTurkish] = useGlobalState("isTurkish");
    return(

        <div className="Footer-Images">

          <h1 data-aos="fade-up"  data-aos-duration="1100" data-aos-delay="000" className="footer-images-header">{isTurkish ? "KOLEKSİYON FOTOĞRAFLARI" :"COLLECTION IMAGES" }</h1>
           <div className="footer-images-main">
              <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src={footerImagesImage} className="footer-images-main-left"/>
              <div className="footer-images-main-right">
 
                  <Link style={{ textDecoration: "none"  }}   to="/IslandVelho" className="footer-images-main-right-items">  <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000"  src="https://i.im.ge/2022/08/12/OMJLL0.1.md.jpg"  alt="image"  />  <p>Island Velho</p>  </Link>
                  <Link style={{ textDecoration: "none"  }}   to="/IslandOmbra" className="footer-images-main-right-items">  <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMJ5PG.2.md.jpg" alt="image"  /> <p>Island Ombra</p> </Link>
                  <Link style={{ textDecoration: "none"  }}   to="IslandOnix" className="footer-images-main-right-items">  <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMJ0qL.3.md.jpg" alt="image"  /> <p>Island onix</p> </Link>
                  <Link style={{ textDecoration: "none"  }}  to="/Island" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMJhnc.4.md.jpg" alt="image"  /> <p>Island</p> </Link>
                  <Link style={{ textDecoration: "none"  }}  to="/SmoothYellow" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMJU3T.5.md.jpg" alt="image"  /> <p>Smooth Amb. Yellow</p> </Link>
                  <Link style={{ textDecoration: "none"  }}  to="/SmoothBlue" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMJtLz.6.md.jpg" alt="image" /> <p>Smooth Amb. Blue</p> </Link>
                  <Link style={{ textDecoration: "none"  }}  to="/SmoothReaction" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMJA4F.7-smooth-reaction.md.jpg" alt="image" /> <p>Smooth Reaction</p> </Link>
                  <Link style={{ textDecoration: "none"  }}  to="/Smooth" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMJEqK.8.md.jpg" alt="image" /> <p>Smooth</p> </Link>

                  <Link style={{ textDecoration: "none"  }}   to="/GastroPlate" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMJy36.9.md.jpg" alt="image" /><p>Gastro Plate</p></Link>


                     
                  <Link style={{ textDecoration: "none"  }}  to="/CowryPurple" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMJ3zX.10.md.jpg" alt="image" /> <p>Cowry Purple</p> </Link>
                  <Link style={{ textDecoration: "none"  }}  to="/CowryYellow" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMJZ34.11.md.jpg" alt="image" /> <p>Cowry Yellow</p> </Link>
                  <Link style={{ textDecoration: "none"  }}  to="/CowryBrick" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMJbF8.12.md.jpg" alt="image" /> <p>Cowry Brick</p> </Link>
                  <Link style={{ textDecoration: "none"  }}  to="/CowryBlack" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMJK4C.13.md.jpg" alt="image" /> <p>Cowery Black</p> </Link>
                  <Link style={{ textDecoration: "none"  }}  to="/rome" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMJWUD.14.md.jpg" alt="image" /> <p>Rome</p> </Link>
                  <Link style={{ textDecoration: "none"  }}  to="/tessera" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMJgWM.15.md.jpg" alt="image" /> <p>Tessera</p> </Link>

                  <Link style={{ textDecoration: "none"  }}   to="/edera" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMJzzP.16.md.jpg" alt="image" /><p>Edera</p></Link>
                  <Link style={{ textDecoration: "none"  }}  to="/ederacobalt" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMJGY0.17.md.jpg" alt="image" /><p>Edera Cobalt</p></Link>
                  <Link style={{ textDecoration: "none"  }}  to="/armonia" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMJpO1.18.md.jpg" alt="image" /><p>Armonia</p></Link>
                  <Link style={{ textDecoration: "none"  }}  to="/spazio" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMJJWm.19.md.jpg" alt="image" /><p>Spazio</p></Link>
                  <Link style={{ textDecoration: "none"  }}  to="/legna"className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMJvjf.20.md.jpg" alt="image" /><p>Legna</p></Link>
                  <Link style={{ textDecoration: "none"  }}  to="/kolezyum" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMJBUW.21.md.jpg" alt="image" /><p>Kolezyum</p></Link>
                  <Link style={{ textDecoration: "none"  }}  to="/infinity" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMJ4or.22.md.jpg" alt="image" /><p>Infinity</p></Link>

                  <Link style={{ textDecoration: "none"  }}  to="/elegance" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMJeBT.23.md.jpg" alt="image" />  <p>Elegance</p> </Link>
                  <Link style={{ textDecoration: "none"  }}  to="/supreme" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMnQsc.24.md.jpg" alt="image" /> <p>Supreme</p> </Link>
                  <Link style={{ textDecoration: "none"  }}  to="/rose" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMnrma.25.md.jpg" alt="image" /> <p>Rose</p> </Link>
                  <Link style={{ textDecoration: "none"  }}  to="/tropical" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMnozG.26.md.jpg" alt="image" /> <p>Tropical</p> </Link>
                  <Link style={{ textDecoration: "none"  }}   to="/ardent"className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMnlOx.27.md.jpg" alt="image" /> <p>Ardent</p> </Link>
                  <Link style={{ textDecoration: "none"  }}  to="/enigma" className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMnuWJ.28.md.jpg" alt="image" /> <p>Enigma</p> </Link>
                  <Link style={{ textDecoration: "none"  }}   to="/vintage"className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMn1hS.29.md.jpg" alt="image" /> <p>Vintage</p> </Link>

                  <Link style={{ textDecoration: "none"  }}   to="/breeze"className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMnD1X.30.md.jpg" alt="image"  /><p>Breeze</p></Link>
                  <Link style={{ textDecoration: "none"  }}   to="/blance"className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMnOoy.31.md.jpg" alt="image" /><p>Balance</p></Link>
                  <Link style={{ textDecoration: "none"  }}   to="/laterite"className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMnaH9.32.md.jpg" alt="image"  /><p>Laterite</p></Link>
                  <Link style={{ textDecoration: "none"  }}   to="/sun"className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMnLZh.33.md.jpg" alt="image" /><p>Sun</p></Link>
                  <Link style={{ textDecoration: "none"  }}   to="/gleam"className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMn2Yz.34.md.jpg" alt="image" /><p>Gleam</p></Link>
                  <Link style={{ textDecoration: "none"  }}   to="/dekorsuz"className="footer-images-main-right-items"> <LazyLoadImage data-aos="fade-up"  data-aos-duration="1300" data-aos-delay="000" src="https://i.im.ge/2022/08/12/OMnIm8.35.md.jpg" alt="image" /><p>{ isTurkish ?"Dekorsuz" : "Undecorated"}</p></Link>
              



              </div>
           </div>

        </div>


    )
}

export default FooterImages