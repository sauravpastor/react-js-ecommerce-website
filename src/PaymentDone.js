import LoaderComp from "./Loader";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartEmpty } from "./cartSlice";


const PaymentDone = () => {
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        },1000)
        dispatch(cartEmpty());
    },[]);

    return(
        <>
        <center>
        {/* <div style={{height:"400px" , width:"80%",borderRadius:"15px"}}> */}
       <br /> <br />
     {  isLoading ?  <div style={{margin:"auto", width:"200px"}}>
        <h1 style={{color:"green"}}>  Your Payment Being Process
         </h1>
        <LoaderComp/> 
        </div>   : (
            
            <div className="paymt" >
        <h2 align="center">  Your Payment Succesfully Done <br/> <br />
        Your Product will we send within 6 to 7 working Days</h2>
     </div>

     ) }
         {/* </div> */}
         </center>
        </>
    )
}

export default PaymentDone;