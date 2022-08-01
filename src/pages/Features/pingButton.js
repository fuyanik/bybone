import "./features.css";
import { useState } from "react";
import newLogo from "./images/newLogo.png";

const PingButton = ({left,top}) => { 

    const [isVisible, setİsVisible] = useState(false);

return(
 <div className="ping-button"
 style={{
  left: left,
  top: top
 }}


 
 >
    <div className="box"></div>
    <div className="box2"></div>

    <div
      className="plus"
      
      onMouseMove={() => setİsVisible(true)}
      onMouseLeave={() => setİsVisible(false)}
    >
 <img className="button-logo" src={newLogo} />
    </div>

    <div
      className="ping-button-card"
      style={{
        opacity: isVisible ? "1" : "0",
      }}
    >
      <h3> Yellow Sofa</h3>
      <p>
        Lorem ipsum These statements have not been evaluated by the FDA or
        NHS. This or curase.
      </p>
    </div>
  </div>
)

}

export default PingButton;