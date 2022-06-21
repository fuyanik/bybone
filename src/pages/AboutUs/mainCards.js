import "./aboutUs.css"
import keyicon from "./images/keyicon.jpg"
const MainCards = () => { 

 return (
    <div className="main-cards">
        
      <img  src={keyicon}  className="main-cards-icon"
      style={{width: "35px", height: "35px"}}
      />
         <div className="main-cards-texts">
            
           <h4> Fast and Secure </h4>
           <p> 	

             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>    
         </div>



    </div> 
 )

}

export default MainCards;