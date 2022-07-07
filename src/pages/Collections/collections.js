import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import {db, auth} from "../../firebaseConfig";
import { useEffect,useState } from "react";
import Navbar from "../../components/1.Navbar/navbar";
import "./collections.css";
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

                console.log(user);
            
    return (
      <> 
      <Navbar/>
        <div className="collections"> 
        
        
     { user && <AddCollections/>  }  
     <a href="/giris" style={{
      cursor:"pointer", marginTop:"90px",
     }}>   <button className="login-button"> Giriş yap</button> </a>
          
              <div className="collection-items">
                  
                  {articles.map(({id,title,description,ImageUrl,createdAt}, idx) => {
                     return (
                    <div   key={idx} 
                    onClick={() => setClicked(prev => ({
                      ...prev,
                    
                      [idx]: !prev[idx]
                    }))}
                    className={getClass(idx)}
                    
                    >
                    
                    
                        { user &&  <DeleteCollections id={id} ImageUrl={ImageUrl}/>  }
                         
                           <img  className={getClass2(idx)} src={ImageUrl} />
          
                                 <div className="collection-item-texts"> 
                                    <h2 >{title}</h2>
                                    <p>{description}</p>
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