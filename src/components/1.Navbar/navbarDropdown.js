const NavbarDropdown = ({onMouse,onLeave,height,border}) => {

    return (

        <div className="navbar-dropdown"
        style={{
            height: height,
            borderTop: border,
        }}
        onMouseMove={onMouse}
        onMouseLeave={onLeave}
        
        > 
        
          
        
        </div>
    )
}

export default NavbarDropdown;
