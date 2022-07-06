import './collections.css';
import React, { useState, useEffect } from 'react';
import { Timestamp,collection,addDocument, addDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import { storage,db } from '../../firebaseConfig';
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';

  import 'react-toastify/dist/ReactToastify.css';

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
         alert("Please fill all the fields");
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
        console.log("asdsa")
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
            const articleRef = collection(db,"Articles");
            addDoc(articleRef,{
                title: formData.title,
                description: formData.description,
                ImageUrl: url,
                createdAt: Timestamp.now().toDate(),

            })
            .then(()=>{
        toast.success("Article added successfully");
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
                  <div className='progress-bar progress-bar-striped mt-0.5' style={{width:`${progress}%`}}>
                    {`uploading image ${progress}%`}
                  </div>
            </div>)}
           

            <button
             className='form-control btn-primary mt-2'
             onClick={handlePublish}
             
             >Publish</button>


             
             </div> 
            

           
        </div>
    )
}

export default AddCollections;