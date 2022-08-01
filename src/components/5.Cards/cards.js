import "./cards.css"
import illüs1 from './illüs1.png';
import illüs2 from './illüs2.png';
import illüs3 from './illüs3.png';





const Cards =  () => { 

    return(
        
        <div id="cards"  > 
  
          <div className="cards-main"> 
          
           <div className="cardoq"> 
            <div className="cardo" data-aos="fade-right"  data-aos-duration="800"> 
               
               
               <img src={illüs1} className="cards-logo" />
          
          
             
            </div>
         </div>
           
         
           <div className="cardoq">
              <div className="cardo"   data-aos="fade-up"  data-aos-duration="1200"> 
                <img src={illüs3} className="cards-logo2" />
                 
            
               </div>
            </div>

          
          
             <div className="cardo"   data-aos="fade-left"  data-aos-duration="800"> 
             <img src={illüs2} className="cards-logo3" />
           
             </div>
      
        </div>
        
         
 
 
        </div>
    )


}

export default Cards;