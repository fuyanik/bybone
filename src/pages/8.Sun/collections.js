import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import {db, auth} from "../../firebaseConfig";
import { useEffect,useState } from "react";
import Navbar from "../../components/1.Navbar/navbar";
import "../collections.css";
import AddCollections from "./addCollections";
import DeleteCollections from "./deleteCollections";
import {useAuthState} from "react-firebase-hooks/auth";

import { setGlobalState, useGlobalState } from "../../hookState.js";




const Sun = () => {
  
  //leangue control
  const[isTurkish] = useGlobalState("isTurkish");

  // user status control
  const [user] = useAuthState(auth);
  
  // all user data array
  const [articles, setArticles] = useState([]);
 
 
  useEffect(() => {
     const articleRef = collection(db, "Sun");
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
                  
                  {articles.map(({id,title,titleENG,description,ImageUrl,cbm,dimension,kg,pieces,createdAt}, idx) => {
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
                                  { isTurkish ? <h2 >{title}</h2> : <h2 >{titleENG}</h2>}  
                                    <p>{description}</p>
                                 </div> 
                             

                                  <div className={getClass4(idx)}>    

                                    <div className="collection-item-texts-right-items">

                                    { isTurkish ? <h2 >{title}</h2> : <h2 >{titleENG}</h2>}  
                                      
                                   
                                      <div >   { isTurkish ? <p> Ürün Kodu: </p> : <p> Product Code: </p>  }  <p> {description} </p>  </div>
                                      <div >  { isTurkish ?  <p> Brüt KG: </p> : <p> Gross KG: </p> }   <p> {kg} </p>  </div>
                                      <div>   { isTurkish ? <p> CBM(Metreküp): </p> :  <p> CBM: </p> }  <p> {cbm} </p>  </div>
                                      <div>  { isTurkish ? <p> Koli İçi Adet: </p> : <p> Pieces in Box:</p>  }  <p> {pieces} </p>  </div>
                                      
                                      
                                      
                                 
                                   
                                    

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

export default Sun;