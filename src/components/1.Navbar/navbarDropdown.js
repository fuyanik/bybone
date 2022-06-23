import dropdownİmage from './images/dropdown.png'
import dropdownİmage2 from './images/dropdownİmage2.png'
//<img src={dropdownİmage} className ="dropdown-image" />

const NavbarDropdown = ({onMouse,onLeave,display}) => {

    return (

        <div className= { display ? "navbar-dropdown-hover"  :"navbar-dropdown"}onMouseMove={onMouse}  onMouseLeave={onLeave}>
            <div className={ display ? "dropdown-item-hover" : "dropdown-items"}> 

        
                  <div className="dropdown-main-items"> 
     
      
                  <img src={dropdownİmage2} className ="dropdown-image" />
                      <span className='dropdown-divider'>______________________________</span>
                      
                      <div className="dropdown-item-line"> 
                           <h4 className="dropdown-head"> Harmony</h4>
                           
                           <ul className="dropdown-list">
                               <li>Ardent</li>
                               <li>Blance</li>
                               <li>Bleezze</li>
                               <li>Elegance</li>
                               <li>Enigme</li>
                               <li>Gleam</li>
                               <li>Infinity</li>
                               <li>Laterite</li>
                               <li>Rose</li>
                               <li>Sun</li>
                               <li>Supreme</li>
                               <li>Tropical</li>
                               
                           </ul>

                      </div>
                        
                      <div className="dropdown-item-line"> 
                           <h4 className="dropdown-head"> Tinta</h4>
                           
                           <ul className="dropdown-list"
                           style={{right: "80px"}}
                           
                           >

                            
                               <li>Ardent</li>
                               <li>Blance</li>
                               <li>Bleezze</li>
                               <li>Elegance</li>
                               <li>Enigme</li>
                               <li>Gleam</li>
                               <li>Infinity</li>
                               <li>Laterite</li>
                              
                               
                           </ul>

                      </div>


                      <div className="dropdown-item-line"> 
                           <h4 className="dropdown-head"> Island</h4>
                           
                           <ul className="dropdown-list"
                             style={{right: "90px"}}
                           
                           >
                               <li>Ardent</li>
                               <li>Blance</li>
                               <li>Bleezze</li>
                               <li>Elegance</li>
                               <li>Enigme</li>
                               <li>Gleam</li>
                               <li>Infinity</li>
                            
                               
                           </ul>

                      </div>

                      <div className="dropdown-item-line"> 
                           <h4 className="dropdown-head"> Cowry</h4>
                           
                           <ul className="dropdown-list"
                             style={{right: "91px"}}
                           
                           >
                               <li>Ardent</li>
                               <li>Blance</li>
                               <li>Bleezze</li>
                               <li>Elegance</li>
                            
                               
                           </ul>

                      </div>

                      <div className="dropdown-item-line"> 
                           <h4 className="dropdown-head"> Smooth</h4>
                           
                           <ul className="dropdown-list"
                             style={{right: "103px"}}
                           >
                               <li>Ardent</li>
                               <li>Blance</li>
                               <li>Bleezze</li>
                               <li>Elegance</li>
                            
                               
                           </ul>

                      </div>






 
             
                  </div>
            
    
             </div> 
        </div>
    )
}

export default NavbarDropdown;
