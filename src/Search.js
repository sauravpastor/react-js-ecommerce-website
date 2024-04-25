import axios from "axios";
import { useState } from "react";

import { useDispatch } from 'react-redux';
import { addtoCart } from "./cartSlice";

const Search=()=>{
    const [txtdata, setTxtdata]= useState("");
    const [mydata, setMydata]= useState([]);
    const dispatch= useDispatch();

    const searchData=(e)=>{
 
        setTxtdata(e.target.value);
        let url="http://localhost:4000/product/";
        axios.get(url).then((res)=>{
            setMydata(res.data);
        })      
    }

   
    const ans= mydata.map((key)=>{
                    let mybrand= key.brand.toUpperCase();
                    let status= mybrand.includes(txtdata.toUpperCase());
                    

         if(status)
         {
           return(
            <>
                <div className="Searchitems">
                    <img src={"images/"+key.image}  width="250" height="200"  />
                    <h1> Name :  {key.name} </h1>
                    <h2> Price :  {key.price} </h2>
                    <h2> Brand:  {key.brand} </h2>
                    <button onClick={()=>{dispatch(addtoCart({id:key.id, name:key.name, price:key.price, image:key.image, brand:key.brand }))}}  style={{backgroundColor: "#3468C0", color:"white",borderRadius:"5px",padding:"1px",width:"80px",height:"30px"}}> Add to Cart</button>
                </div>
            </>  
            
           )
        }
    });


    return(
        <>
        <center>
        <br/><br/>
         <h1> Search </h1>
         <input type="text" value={txtdata} placeholder="Brand" onChange={searchData} style={{padding:"4px",borderRadius:"8px"}} /> 

        </center>

        <div id="content">
            <br /><br />
               <h3 style={{background:"#A5DD9B",textAlign:"center"}}> Search Results</h3>
               <br />
               <div id="products">
                  {ans}        
               </div>
           </div>
        
        
        </>
    )
}

export default Search;