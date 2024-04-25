import { FaRegSmileBeam } from "react-icons/fa";


const Location = () => {

    return(
        <>
        <center><h2 style={{color:"#803D3B" ,backgroundColor:"yellowgreen"}}>This Map will lead you to  your <br /> dream shoes <span style={{color:"red"}}><FaRegSmileBeam /></span></h2></center>
        <center> <br /> 
        <div >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.292763076436!2d77.42749657437447!3d23.232431258465915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42674cd1e311%3A0x5de763e9d7cd5c51!2sDB%20Mall%2C%20Zone-I%2C%20Maharana%20Pratap%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh%20462016!5e0!3m2!1sen!2sin!4v1713418461772!5m2!1sen!2sin" width="600" height="450"  allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{width:"65%",height:"500px"}}></iframe>
        </div>
        </center>
        </>
    )
}
export default Location;