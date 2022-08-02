import "../collections.css";
import React, { useState, useEffect } from 'react';
import { Timestamp,collection,addDocument, addDoc } from 'firebase/firestore';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { signOut } from "firebase/auth";
import { storage,db,auth } from '../../firebaseConfig';
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';



const AddCollections = () => { 



    const refo = React.useRef();

    const Datew = Date.now();
    console.log(Datew);

    const [formData, setFormData] = useState({
        
        titleENG:"",
        title: "",
        description:"",
        cbm:"",
        dimension:"",
        kg:"",
        pieces:"",
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
       
        { /*   if(formData.title === "" || formData.description === "" || formData.image === ""){
            alert("Lütfen Tüm Alanları Doldurunuz.");
       return;}  */  } 
 const storageRef = ref(storage, `/images/${Datew}${formData.image.name}` );
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
            titleENG:"",
            title: "",
            description:"",
            cbm:"",
            dimension:"",
            kg:"",
            pieces:"",
           
    }); 
        getDownloadURL(uploadImage.snapshot.ref)
        .then((url)=>{
            const articleRef = collection(db,"SmoothReaction");
            addDoc(articleRef,{
                titleENG: formData.titleENG,
                title: formData.title,
                description: formData.description,
                cbm: formData.cbm,
                dimension: formData.dimension,
                kg: formData.kg,
                pieces: formData.pieces,
                ImageUrl: url,
                createdAt: Timestamp.now().toDate(),

            })
            .then(()=>{
               
                setFormData({...formData, image: ""});
                refo.current.value = ""
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
           console.log(formData.image);
           

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
               

                <span>Ürün Adı:</span>
                <input 
                type="text"
                name="title"
                className="form-control" 
                value={formData.title} 
                onChange={(e) => handleChange(e) }
                
                />
             
                <span>Ürün Adı(İNGİLİZCE):</span>
                <input 
                type="text"
                name="titleENG"
                className="form-control" 
                value={formData.titleENG} 
                onChange={(e) => handleChange(e) }
                
                />
                   
               
                <span>Ürün Kodu:</span>
                <input 
                 type="text"
                 name="description"
                 className="form-control" 
                 value={formData.description} 
                 onChange={(e) => handleChange(e) }
                 />


               <span>CBM (Metreküp):</span>
                <input 
                 type="text"
                 name="cbm"
                 className="form-control" 
                 value={formData.cbm} 
                 onChange={(e) => handleChange(e) }
                 />

            

                <span>Brüt KG:</span>
                <input 
                 type="text"
                 name="kg"
                 className="form-control" 
                 value={formData.kg} 
                 onChange={(e) => handleChange(e) }
                 />

                <span>Koli İçi Adet:</span>
                <input 
                 type="text"
                 name="pieces"
                 className="form-control" 
                 value={formData.pieces} 
                 onChange={(e) => handleChange(e) }
                 />



              
                <span>Fotoğraf:</span>
                <input 
                
                type="file" 
                ref={refo}
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

            { /*<button
            style={{
                backgroundColor: "red"
            }}
             className='form-control-buttton btn-primary mt-2'
             onClick={()=>{signOut(auth)}}
             
        >Çıkış Yap</button>*/}



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