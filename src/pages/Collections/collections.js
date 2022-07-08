import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import {db, auth} from "../../firebaseConfig";
import { useEffect,useState } from "react";
import Navbar from "../../components/1.Navbar/navbar";
import "../collections.css";
import AddCollections from "./addCollections";
import DeleteCollections from "./deleteCollections";
import {useAuthState} from "react-firebase-hooks/auth";



const Collections = () => {
  

const [user] = useAuthState(auth);
  const [articles, setArticles] = useState([]);
 
 
  useEffect(() => {
     const articleRef = collection(db, "Articles");
     const q = query(articleRef, orderBy("createdAt", "desc"));

         // Listen for updates and set the state.
          onSnapshot(q, (snapshot) => {
         const articles = snapshot.docs.map((doc) => ({
         id: doc.id,
        ...doc.data(),
          }));

             setArticles(articles); })
            
            
               },[]);


               const [clicked, setClicked] = useState({total: 0});
               const getClass = idx => (`item ${clicked[idx] ? 'collection-item-selected' : 'collection-item'}`);
               const getClass2 = idx => (`item ${clicked[idx] ? 'collection-item-image-selected' : 'collection-item-image'}`);
               const getClass3 = idx => (`item ${clicked[idx] ? ' collection-item-texts-head-selected' : ' collection-item-texts-head'}`);
               const getClass4 = idx => (`item ${clicked[idx] ? ' collection-item-texts-right-selected' : ' collection-item-texts-right'}`);

                console.log(user);
            
    return (
      <> 
      <Navbar/>
        <div className="collections"> 
        
        
    <AddCollections/>  
  
  { /*  <a href="/login" style={{
      cursor:"pointer", marginTop:"90px",
     }}>   <button className="login-button"> Giriş yap</button> </a> */  }
          
              <div className="collection-items">
                  
                  {articles.map(({id,title,description,ImageUrl,cbm,dimension,kg,pieces,createdAt}, idx) => {
                     return (
                      
                    <div   key={idx} 
                    onClick={() => setClicked(prev => ({
                      ...prev,
                    
                      [idx]: !prev[idx]
                    }))}
                    className={getClass(idx)}
                    
                    >
                     <DeleteCollections id={id} ImageUrl={ImageUrl}/> 
                    
                       
                         
                           <img  className={getClass2(idx)} src={ImageUrl} />
                                      
                           <div className="collection-item-texts"> 

                                 <div className={getClass3(idx)}>
                                    <h2 >{title}</h2>
                                    <p>{description}</p>
                                 </div> 
                             

                                  <div className={getClass4(idx)}>    

                                    <div className="collection-item-texts-right-items">

                                      <h2>{title}</h2>
                                      <span>_____________</span>
                                   
                                      <div > <p> Ürün Kodu: </p>  <p> {description} </p>  </div>
                                      <div > <p> Brüt KG: </p>  <p> {kg} </p>  </div>
                                      <div> <p> CBM(Metreküp): </p>  <p> {cbm} </p>  </div>
                                      <div> <p> Koli İçi Adet: </p>  <p> {pieces} </p>  </div>
                                      <div> <p> Ölçü: </p>  <p> {dimension} </p>  </div>
                                      
                                      
                                 
                                   
                                    

                                    </div> 
                                           
                                  </div> 
                                    { /* <p>{createdAt.toDate().toDateString()}</p> */ }
                             </div>
                    
                    </div>
          
          );
        })}
  
          

    

 

  
         




            
     
   

                    
                  
                    
                    
              </div>

        </div>
    
                   

        </>
    )
}

export default Collections;