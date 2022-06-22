import PingButton from "./pingButton";
import logo from "./images/logo.png";
import Navbar from '../../components/1.Navbar/navbar.js';
import featuresArrow from "./images/arrow.png";

const Features = () => { 

return (
  <div className="product-features">s
    <Navbar/>
    <img src={logo} className="App-logo" alt="logo" />
    <img src={featuresArrow} className="features-arrow-left" alt="logo" />
    <img src={featuresArrow} className="features-arrow-right" alt="logo" />
 
 
    

    

    <PingButton top={"100px"} left={"700px"} />

    <PingButton top={"400px"} left={"500px"} />
    <PingButton top={"500px"} left={"950px"} />
  </div>
);

}

export default Features;