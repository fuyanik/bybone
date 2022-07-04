import Navbar from "../../components/1.Navbar/navbar";
import "./collections.css";



const Collections = ({mainData}) => {


    

 

  


    return (
        <div className="collections"> 
        <Navbar/>
        
              <div className="collection-items">
                  
              {mainData.map((data, index) => {
                     return (
                    <div className="collection-item"  key={index}   >
            
            <img className="collection-item-image" src={data.image} />
             <div className="collection-item-texts"> 
              <h2 >{data.header}</h2>
              <p>{data.text}</p>
             </div>
           </div>
          
          );
        })}
  
          
         

            
     
   

                    
                  
                    
                    
              </div>

        </div>
    
                   


    )
}

export default Collections;