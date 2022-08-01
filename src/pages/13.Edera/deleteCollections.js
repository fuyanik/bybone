import {toast } from 'react-toastify';
import {storage,db} from '../../firebaseConfig';
import { deleteObject,ref } from 'firebase/storage';

import {deleteDoc,doc} from 'firebase/firestore';



const DeleteCollections = ({id, ImageUrl}) => {

const handleDelete = async() => { 

    try{
        await deleteDoc(doc(db,"Edera",id))
        toast("Başarıyla Silindi",{type:"success"});
        const storageRef = ref(storage, ImageUrl );
        await deleteObject(storageRef);
    }
    catch(err){
        toast("Error deleting article",{type:"error"});
        console.log(err);
    }
}

return(

    <>
       <button className="btn btn-danger" onClick={handleDelete}>X</button>
    
    </>
)



}

export default DeleteCollections;