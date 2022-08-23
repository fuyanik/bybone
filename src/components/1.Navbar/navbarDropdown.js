import dropdownİmage from './images/dropdown.png'
import dropdownİmage2 from './images/dropdownİmage2.png'
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import newImage from "./images/newImage.png";
import newImage2 from "./images/newImage2.png";
import { setGlobalState, useGlobalState } from "../../hookState.js";



//<img src={dropdownİmage} className ="dropdown-image" />

const NavbarDropdown = ({onMouse,onLeave,display}) => {

     const[isTurkish] = useGlobalState("isTurkish");

    return (

        <div className= { display ? "navbar-dropdown-hover"  :"navbar-dropdown"}onMouseMove={onMouse}  onMouseLeave={onLeave}>
            <div className={ display ? "dropdown-item-hover" : "dropdown-items"}> 
           
      

        
                  <div className="dropdown-main-items"> 
     
      
                  <img src="https://i.im.ge/2022/08/23/OiPJPY.dropdownImage2.png" className ="dropdown-image" />
                      <span className='dropdown-divider'>______________________________</span>
                      <div className='fincan-line'></div>
                     

       {/* Dekorsuz*/}
                      <div className="dropdown-item-line"> 
                           <h4 className="dropdown-head"> {isTurkish ? "Dekorsuz" : "Undecorated"}</h4>
                           
                           <ul 
                           style={{
                              position:"relative",
                              right:"9.8vw"
                           }}
                           className="dropdown-list">
                       
                          
                           <Link to="/Island"  style={{   textDecoration: "none",  color: "white",   }}>  <div className='image-area7'> <li>Island</li>  {isTurkish ?  <img src={newImage2}/>  : <img src={newImage}/> }    </div> </Link>
                           <Link to="/Smooth"  style={{   textDecoration: "none",  color: "white",   }}>  <div className='image-area8'> <li>Smooth</li> {isTurkish ?  <img src={newImage2}/>  : <img src={newImage}/> }  </div> </Link>
                           <Link to="/gastroFlate"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Gastro Flate P.</li> </Link>
                          
                          
                           <Link to="/Helix"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Helix</li> </Link>
                           <Link to="/Zest"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Zest</li> </Link>
                           <Link to="/Arel"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Arel</li> </Link>
                           <Link to="/Gastro"  style={{   textDecoration: "none",  color: "white",   }}>   <div className='image-area9'> <li>Gastro</li> {isTurkish ?  <img src={newImage2}/>  : <img src={newImage}/> }  </div> </Link>
                           <Link to="/Gabbro"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Gabbro</li> </Link>
                           <Link to="/Flavor"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Flavor</li> </Link>
                               
                              
                               
                           </ul>
                            
                             
                            
               
                

         
                               

                      </div>

      {/* Harmony*/}
                      <div className="dropdown-item-line"> 
                           <h4 className="dropdown-head"> Harmony</h4>
                           
                           <ul className="dropdown-list">
                           <Link to="/rose"  style={{   textDecoration: "none",  color: "white",   }}>    <div className='image-area5'> <li>Rose</li> {isTurkish ?  <img src={newImage2}/>  : <img src={newImage}/> }  </div>  </Link>
                           <Link to="/tropical"  style={{   textDecoration: "none",  color: "white",   }}>   <div className='image-area6'> <li>Tropical</li> {isTurkish ?  <img src={newImage2}/>  : <img src={newImage}/> }  </div>  </Link>
                           <Link to="/ardent"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Ardent</li> </Link>
                           <Link to="/blance"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Balance</li> </Link>
                           <Link to="/breeze"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Breeze</li> </Link>
                           <Link to="/elegance"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Elegance</li> </Link>
                           <Link to="/enigma"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Enigma</li> </Link>
                           <Link to="/gleam"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Gleam</li> </Link>
                           <Link to="/Infinity"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Infinity</li> </Link>

                           <Link to="/sun"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Sun</li> </Link>
                           <Link to="/supreme"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Supreme</li> </Link>

                           <Link to="/vintage"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Vintage</li> </Link>
                           <Link to="/laterite"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Laterite</li> </Link>
                               
                              
                               
                            
                             
                            
               
                           </ul>
                

         
                               

                      </div>
                        
      {/* Tinta*/}
                      <div className="dropdown-item-line"> 
                           <h4 className="dropdown-head"> Tinta</h4>
                           
                           <ul className="dropdown-list"
                           style={{right: "80px"}}
                           
                           >

                            
                           <Link to="/armonia"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Armonia</li> </Link>
                           <Link to="/edera"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Edera</li> </Link>
                           <Link to="/ederacobalt"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Edera Cobalt</li> </Link>
                           <Link to="/kolezyum"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Kolezyum</li> </Link>
                           <Link to="/legna"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Legna</li> </Link>
                           <Link to="/rome"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Rome</li> </Link>
                           <Link to="/spazio"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Spazio</li> </Link>
                           <Link to="/tessera"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Tessera</li> </Link>
                            
                              
                               
                           </ul>

                      </div>

  {/* Cowry*/}
  <div className="dropdown-item-line"> 
                           <h4 className="dropdown-head"> Cowry</h4>
                           
                           <ul className="dropdown-list"
                             style={{right: "91px"}}
                           
                           >
                               
                               <Link to="/CowryBrick"  style={{   textDecoration: "none",  color: "white",   }}>      <div className='image-area3'> <li>Cowry Brick</li> {isTurkish ?  <img src={newImage2}/>  : <img src={newImage}/> }  </div>   </Link>
                               <Link to="/CowryPurple"  style={{   textDecoration: "none",  color: "white",   }}>       <div className='image-area4'> <li>Cowry Purple</li> {isTurkish ?  <img src={newImage2}/>  : <img src={newImage}/> }  </div> </Link>
                               <Link to="/CowryBlack"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Cowry Black</li> </Link>
                              <Link to="/CowryYellow"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Cowry Yellow</li> </Link>
                              <Link to="/"  style={{   textDecoration: "none",  color: "white", position:"relative",
                         top:"20px"  }}>   <li > {isTurkish ? `Cups&Places ➔` : `Fincanlar&Tabaklar ➔`}</li></Link>
                               
                           </ul>

                      </div>

     {/* Island*/}
                      <div className="dropdown-item-line"> 
                      <div className='image-area2'> <h4 className="dropdown-head"> Island</h4> {isTurkish ?  <img src={newImage2}/>  : <img src={newImage}/> }  </div>  
                           
                           <ul className="dropdown-list"
                             style={{right: "90px"}}
                           
                           >
                                
                               <Link to="/IslandOnix"  style={{   textDecoration: "none",  color: "white",   }}>   <li> Island Onix</li> </Link>
                               <Link to="/IslandOmbra"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Island Ombra</li> </Link>
                              <Link to="/IslandVelho"  style={{   textDecoration: "none",  color: "white",   }}>   <li> Island Velho</li> </Link>
                            
                               
                           </ul>

                      </div>
  
    {/* Smooth*/}
                      <div className="dropdown-item-line"> 
                        <div className='image-area'> <h4 className="dropdown-head"> Smooth</h4> {isTurkish ?  <img src={newImage2}/>  : <img src={newImage}/> }  </div>  
                           
                           <ul className="dropdown-list"
                             style={{right: "103px"}}
                           >
                                  
                               <Link to="/SmoothBlue"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Smooth Ambience Blue</li> </Link>
                               <Link to="/SmoothYellow"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Smooth Ambience Yellow</li> </Link>
                              <Link to="/SmoothReaction"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Smooth Reaction</li> </Link>
                            
                               
                           </ul>

                      </div>
                      






 
             
                  </div>
            
    
             </div> 
        </div>
    )
}

export default NavbarDropdown;
