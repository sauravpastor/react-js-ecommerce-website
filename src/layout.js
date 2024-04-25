import { Link, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';

import { FaCartShopping } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineManageSearch } from "react-icons/md";


const Layout = () => {
   let cartItemNo=0;
   const cartdata = useSelector((state)=>state.mycart.cart);
   if(cartdata.length>=1)
   {
      cartItemNo = cartdata.length;
   }

    return(
        <>
        <div id="wrapper">
             <div id="Header">
              <div>
                <img src="images/shoeLLLL-removebg-preview.png" height="120px" width="200px" style={{borderRadius:"15px", textShadow:"11.5px 11.5px blue"}}  />
                {/* <h1 style={{fontStyle: "italic", color: "blueviolet"}}>Stylish</h1>
                <p style={{color: "rgba(88, 87, 87, 0.473)"}}>Online Store</p> */}
                </div>
             <div>
                <ul>
                    <li>
                    <Link to="home" style={{color:"white" ,textDecoration:"none"}}>
                     Home
                     </Link>
                    </li>
                    <li>
                      <Link to="about" style={{color:"white" ,textDecoration:"none"}}>
                        About
                        </Link> 
                      </li>
                    <li>
                      <Link to="blogs" style={{color:"white" ,textDecoration:"none"}}>
                        Blogs
                        </Link> 
                      </li>
                    <li>
                      <Link to="contact" style={{color:"white" ,textDecoration:"none"}}>
                      Contact
                      </Link>
                      </li>
                    <li>
                      <Link to="search" style={{color:"white" ,textDecoration:"none"}}>
                      <MdOutlineManageSearch style={{fontSize:"30px"}}/>
                      </Link>
                    </li>
                    <li>
                      <Link to="location" style={{color:"white" ,textDecoration:"none"}}>
                      <FaMapLocationDot  style={{fontSize:"25px"}} />
                        </Link>
                      </li>
                    <li>
                      {cartItemNo}

                    <Link to="cartitem" style={{color:"white" ,fontSize:"20px"}}>
                    <FaCartShopping />
                    </Link>
                    </li>
                </ul>
             </div>
             </div>
             <br />
             <br />
             <br />
             <br />
             <br />
            <br />
          

       {/* ----------------------------------------- */}
          <Outlet/>


 {/* ---------------------------------- */}
 <br />
 <div className="footer">

  <div>
        <h3>Info</h3>
        <p>Track Your Order</p>
        <p>Our Blocks</p>
        <p>Privacy policy</p>
        <p>Shipping</p>
        <p>Contact Us</p>
        <p>Community</p>
      </div>
      <div>
        <h3>About</h3>
        <p>Histroy</p>
        <p>Our Team</p>
        <p>Services</p>
        <p>Company</p>
        <p>Wholesale</p>
        <p>Retail</p>
      </div>
      <div>
        <h3>Women Shoes</h3>
        <p>Track Your Order</p>
        <p>Our Blog</p>
        <p>Privacy policy</p>
        <p>Shipping</p>
        <p>Contact Us</p>
        <p>Help</p>
      </div>
      <div>
        <h3>Popular</h3>
        <p>Prices Drop</p>
        <p>New Products</p>
        <p>Best Sales</p>
        <p>Stores</p>
        <p>Login</p>
        <p>Cart</p>
      </div>
      <div>
        <h3>Mens Collection</h3>
        <p>Delivery</p>
        <p>About Us</p>
        <p>Shoes</p>
        <p>Contact Us</p>
      </div>
      <div>
        <h3>Get In Touch</h3>
        <p>
          Stylish Online Store 123 <br />
          Main Street, gaffarMarket - <br />
          dehli. Call us: (+33) 800 456 <br />
          789-987
        </p>
        <h4>contact@yourwebsite.com</h4> <br /> <br />
        <i style={{fontSize:"25px", margin:"10px"}}><FaFacebook /></i>
         <i style={{fontSize:"25px", margin:"10px"}}><FaInstagramSquare /></i>
         <i style={{fontSize:"25px", margin:"10px"}}><IoLogoYoutube /></i>
      </div>
    </div>
        </div>

        </>
    )
}

export default Layout;