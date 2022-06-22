//import dropdownİmage from './dropdown.png'
//<img src={dropdownİmage} className ="dropdown-image" />
const NavbarDropdown = ({onMouse,onLeave,display}) => {

    return (

        <div className= { display ? "navbar-dropdown-hover"  :"navbar-dropdown"}
      
        onMouseMove={onMouse}
        onMouseLeave={onLeave}
        
        >
            <div className={ display ? "dropdown-item-hover" : "dropdown-items"}> 
             
               
               
               <div className='dropdown-line'> 

                <h4></h4>
                
               </div>
            
             </div> 
    
        </div>
    )
}

export default NavbarDropdown;
