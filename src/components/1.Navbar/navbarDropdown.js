import dropdownİmage from './images/dropdown.png'
import dropdownİmage2 from './images/dropdownİmage2.png'
import {Routes, Route, Link, NavLink} from 'react-router-dom';
//<img src={dropdownİmage} className ="dropdown-image" />

const NavbarDropdown = ({onMouse,onLeave,display}) => {

    return (

        <div className= { display ? "navbar-dropdown-hover"  :"navbar-dropdown"}onMouseMove={onMouse}  onMouseLeave={onLeave}>
            <div className={ display ? "dropdown-item-hover" : "dropdown-items"}> 

        
                  <div className="dropdown-main-items"> 
     
      
                  <img src={dropdownİmage2} className ="dropdown-image" />
                      <span className='dropdown-divider'>___________________________,___</span>
                      
                      <div className="dropdown-item-line"> 
                           <h4 className="dropdown-head"> Harmony</h4>
                           
                           <ul className="dropdown-list">
                       
                           <Link to="/ardent"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Ardent</li> </Link>
                           <Link to="/blance"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Blance</li> </Link>
                           <Link to="/breeze"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Breeze</li> </Link>
                           <Link to="/elegance"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Elegance</li> </Link>
                           <Link to="/enigma"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Enigma</li> </Link>
                           <Link to="/gleam"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Gleam</li> </Link>
                           <Link to="/Infinity"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Infinity</li> </Link>
                           <Link to="/rose"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Rose</li> </Link>
                           <Link to="/sun"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Sun</li> </Link>
                           <Link to="/supreme"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Supreme</li> </Link>
                           <Link to="/tropical"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Tropical</li> </Link>
                               
                              
                               
                            
                             
                            
               
                           </ul>
                

         
                               

                      </div>
                        
                      <div className="dropdown-item-line"> 
                           <h4 className="dropdown-head"> Tinta</h4>
                           
                           <ul className="dropdown-list"
                           style={{right: "80px"}}
                           
                           >

                            
                           <Link to="/armonia"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Armonia</li> </Link>
                           <Link to="/edera"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Edera</li> </Link>
                           <Link to="/ederacobalt"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Edera Cobalt</li> </Link>
                           <Link to="/kolezyum"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Kolezyum</li> </Link>
                           <Link to="/ardent"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Legna</li> </Link>
                           <Link to="/rome"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Rome</li> </Link>
                           <Link to="/spazio"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Spazio</li> </Link>
                           <Link to="/tessera"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Tessera</li> </Link>
                            
                              
                               
                           </ul>

                      </div>


                      <div className="dropdown-item-line"> 
                           <h4 className="dropdown-head"> Island</h4>
                           
                           <ul className="dropdown-list"
                             style={{right: "90px"}}
                           
                           >
                                <Link to="/ısland"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Island</li> </Link>
                               <Link to="/ıslandombra"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Island Ombra</li> </Link>
                               <Link to="/ıslandonix"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Island Onix</li> </Link>
                              <Link to="/ıslandvelho"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Island Velho</li> </Link>
                            
                               
                           </ul>

                      </div>

                      <div className="dropdown-item-line"> 
                           <h4 className="dropdown-head"> Cowry</h4>
                           
                           <ul className="dropdown-list"
                             style={{right: "91px"}}
                           
                           >
                                <Link to="/cowryblack"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Cowry Black</li> </Link>
                               <Link to="/cowrybrick"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Cowry Brick</li> </Link>
                               <Link to="/cowrypurple"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Cowry Purple</li> </Link>
                              <Link to="/cowryyellow"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Cowry Yellow</li> </Link>
                            
                               
                           </ul>

                      </div>

                      <div className="dropdown-item-line"> 
                           <h4 className="dropdown-head"> Smooth</h4>
                           
                           <ul className="dropdown-list"
                             style={{right: "103px"}}
                           >
                                   <Link to="/smooth"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Smooth</li> </Link>
                               <Link to="/smoothblue"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Smooth Ambience Blue</li> </Link>
                               <Link to="/smoothyellow"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Smooth Ambience Yellow</li> </Link>
                              <Link to="/smoothreaction"  style={{   textDecoration: "none",  color: "white",   }}>   <li>Smooth Reaction</li> </Link>
                            
                               
                           </ul>

                      </div>






 
             
                  </div>
            
    
             </div> 
        </div>
    )
}

export default NavbarDropdown;
