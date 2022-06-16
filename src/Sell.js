import React,{useState,useEffect} from 'react'
import {auth,db} from './FirebaseConfigs/firebaseConfig'
import { collection, getDocs, addDoc, arrayRemove,where,query } from "firebase/firestore";
import './Sell.css'

const Sell = () => {

  const [producttittle,setProductTittle]=useState("");
  const [producttype,setProductType]=useState("");
  const [description,setDescription]=useState("");
  const [brand,setBrand]=useState("");
  const [customersupport,setCustomersupport]=useState("");
  const [price,setPrice]=useState("");
  const [quantity,setQuantity]=useState("");
  const [warranty,setWarranty]=useState("");
  const [productimage,setProductImage]=useState("");

  function GetCurrentUser() {
    const [user, setUser] = useState("");
    const usersCollectionRef = collection(db, "users");
    useEffect(() => {
      auth.onAuthStateChanged(userlogged => {
        if (userlogged) {
          const getUsers = async () => {
            const q = query(
              collection(db, "user"),
              where("uid", "==", userlogged.uid)
            );
            const data = await getDocs(q);
            setUser(data.docs.map((doc) => ({...doc.data(), id:doc.id })));
          };
          getUsers();
        } else {
          setUser(null);
        }
      });
    }, []);
    return user
  }
  
  const loggeduser = GetCurrentUser();

  const types=['image/jpg','image/jpeg','image/png','image/PNG']
  const handleProductImg=(e)=>{
    e.preventDefault();
    let selectedFile=e.target.files[0];
    if(selectedFile){
      if(types.includes(selectedFile.type)){
        setProductImage(selectedFile);
      }
      else{
        setProductImage(null);
        alert("Please select a image file only");
      }
    }
    else{
      alert("Please select a file");
    }

  }

  const handleAddProduct=()=>{}

  return (
    <div className='sellBlock'>
    {/* <div>Sell</div> */}
    <h1>Sell Products on The all new SuKart</h1>
    <form className='seller-details-form' onSubmit={handleAddProduct}>

      <input
      type="text"
      onChange={e=>(setProductTittle(e.target.value))}
      placeholder="Product Tittle"
      />
      <input
      type="text"
      onChange={e=>(setProductType(e.target.value))}
      placeholder="Product Type"
      />
      <textarea
      type="text"
      onChange={e=>(setDescription(e.target.value))}
      placeholder="Product Description"
      />
      <input
      type="text"
      onChange={e=>(setBrand(e.target.value))}
      placeholder="Product Brand"
      />
      <input
      type="text"
      onChange={e=>(setCustomersupport(e.target.value))}
      placeholder="Product CustomerSupport"
      />
      <input
      type="number"
      onChange={e=>(setPrice(e.target.value))}
      placeholder="Product Price"
      />
      <input
      type="number"
      onChange={e=>(setQuantity(e.target.value))}
      placeholder="Quantity"
      />
      <input
      type="text"
      onChange={e=>(setWarranty(e.target.value))}
      placeholder="Product Warranty Details"
      />
      <input
      type="file"
      onChange={handleProductImg}
      placeholder="Please choose a file"
      />

    </form>
    <button className='Upload'>Add Product</button>
    </div>
  )
}

export default Sell