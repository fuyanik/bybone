import "../collections.css";
import React, { useState, useEffect } from 'react';
import { Timestamp,collection,addDocument, addDoc } from 'firebase/firestore';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { signOut } from "firebase/auth";
import { storage,db,auth } from '../../firebaseConfig';
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';



const AddCollections = () => { 

    const [formData, setFormData] = useState({

        title: "",
        description:"",
        image: "",
        createdAt: Timestamp.now().toDate,
    })

    const[progress, setProgress] = useState(0);
 
    const handleChange = (e) => { 

        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleImageChange = (e) => { 

        setFormData({...formData, image: e.target.files[0]})
     }

     const handlePublish = () => { 
          if(formData.title === "" || formData.description === "" || formData.image === ""){
         alert("Lütfen Tüm Alanları Doldurunuz.");
         return;
}
 const storageRef = ref(storage, `/images/${formData.image.name}` );
   const uploadImage =  uploadBytesResumable(storageRef, formData.image)
   
   uploadImage.on("state_changed", 
    (snapshot)=>{ 
        const progressPercent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      setProgress(progressPercent);
    },
    (err)=>{ 
       
        console.log(err);
    },
    ()=> { 
        setFormData({
        title: "",
        description:"",
        image: "",
    }); 
        getDownloadURL(uploadImage.snapshot.ref)
        .then((url)=>{
            const articleRef = collection(db,"Blance");
            addDoc(articleRef,{
                title: formData.title,
                description: formData.description,
                ImageUrl: url,
                createdAt: Timestamp.now().toDate(),

            })
            .then(()=>{
               
        
                toast.success('Dosya Başarıyla Yüklendi.', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
           setProgress(0);

            }).catch((err)=>{
                toast("Error adding article", {type: "error"});
            })
        }   )
}
    );
   };
     


    return (

        <div className='add-collections'>
           
              <div className='form-area'>
               
                <span>Title</span>
                <input 
                type="text"
                name="title"
                className="form-control" 
                value={formData.title} 
                onChange={(e) => handleChange(e) }
                
                />
               
                <span>Description</span>
                <input 
                 type="text"
                 name="description"
                 className="form-control" 
                 value={formData.description} 
                 onChange={(e) => handleChange(e) }
                 />
              
                <span>Image</span>
                <input 
                type="file" 
                name="image" 
                accept="image/*" 
                className="form-control" 
                onChange={(e) => handleImageChange(e) }
                />
            {progress === 0 ? null : ( 
            
            <div className='progress'>
                  <div className='progress-bar' style={{width:`${progress}%`}}>
                    {`uploading image ${progress}%`}
                  </div>
            </div>)}
           

            <button
             className='form-control-buttton btn-primary mt-2'
             onClick={handlePublish}
             
             >Yükle</button>

            <button
            style={{
                backgroundColor: "red"
            }}
             className='form-control-buttton btn-primary mt-2'
             onClick={()=>{signOut(auth)}}
             
             >Çıkış Yap</button>



<ToastContainer
position="bottom-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>


             
             </div> 
            

           
        </div>
    )
}

export default AddCollections;