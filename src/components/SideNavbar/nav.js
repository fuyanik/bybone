import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function SideNavbar() {
  return (
    <div className="navigation">
   
      <a href="#header-route">
        <AiOutlineHome className="iconn active-nav" />
      </a>

      <a href="#product-route">
        <AiOutlineUser className="iconn" />
      </a>
    
      <a href="#product-route">
        <TiGroupOutline className="iconn" />
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className="iconn" />
      </a>
      <a href="#footer">
        <BsArrowDownCircle className="iconn" />
      </a>
   
    </div>
  );
}

export default SideNavbar;
