import React from 'react';
import { Link } from "react-router-dom";
import venues from "../asserts/images/black-and-white-flower.png";
import '../asserts/mybookings.css';
import Navbar from './Navbar';
const bcstyle = {
  backgroundColor: "orange",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '40vh',
  width:'100vw',
};

const MyBooking = ({ users = [],vendorbooked=[],setVendorbooked}) => {
  return (
    <div className="hcontainer">
      <div className="header" style={bcstyle}>
        <Navbar />
        <h2>Perfect Policy for me</h2>
      </div>
   <div className='mybook-container' style={{position:'absolute',top:'20%',left:'-10%',display:'flex'}}>
   <Link to="/venuesbookings" style={{color:'#000000',textDecoration:'none'}}>
  <div>QUOTED POLICIES<br></br>
  <img src={venues} style={{height:'180px',width:'180px'}} alt='venues' />
  </div>
</Link>
   </div>
    </div>
  );
};

export default MyBooking;
