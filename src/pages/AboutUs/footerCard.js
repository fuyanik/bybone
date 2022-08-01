import './aboutUs.css'


const FooterCard = ({logo,header,text}) => {

    return (

        <div className='footer-card'>
            
            <div className='footer-card-head'> 
                <img src={logo} className="footer-card-head-logo" alt="logo" 
                
                />
                <h4>{header}</h4>
            </div>
            
           <p>{text}</p>             
            

           
           
            
         </div>
    )
}

export default FooterCard;