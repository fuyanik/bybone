import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import {db} from "../../firebaseConfig";
import { useEffect,useState } from "react";
import Navbar from "../../components/1.Navbar/navbar";
import "./collections.css";
import AddCollections from "./addCollections";



const Collections = ({mainData}) => {

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

setArticles(articles);
console.log(articles);

})

},[]);



    return (
      <> 
      <Navbar/>
        <div className="collections"> 
        
        
        <AddCollections/>
              <div className="collection-items">
                  
                  {articles.map(({id,title,description,ImageUrl,createdAt}) => {
                     return (
                    <div className="collection-item" key={id}     >
            
                           <img className="collection-item-image" src={ImageUrl} />
          
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