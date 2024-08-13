import React from 'react';
import bcimg from "../asserts/images/background.jpg";
import '../asserts/mybookings.css';
import Dropdown from './Dropdown';
import Navbar from './Navbar';

const bcstyle = {
  backgroundColor: "orange",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '40vh',
};

const MyBooking = ({ users = [],setUsers}) => {
  const handleCancel = (bookingId, index) => {
    fetch(`http://localhost:3060/api/admins/${bookingId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        const updatedUsers = users.filter((_, i) => i !== index); // remove the canceled booking from state
        setUsers(updatedUsers); // update the users state
      } else {
        console.error('Failed to cancel booking');
      }
    })
    .catch(error => console.error('Error:', error));
  };
  return (
    <div className="hcontainer">
      <div className="header" style={bcstyle}>
        <Navbar />
        <h2>LIVE LONG.LIVE HAPPY.</h2>
        
      </div>
      <div className='details'>
        {users.length > 0 ? (
          <ul>
            {users.map((booking, index) => (
              <li style={{listStyleType:'none'}}>
                  <div className="mybookings" key={index}>
                  <img src={booking.venueImage} alt="Venue" style={{ width: '260px', height: '250px' }} />
                  <div className='book-contents'>
                    <div className='1'>
                  <h4>Total Family Members:<span>{booking.totalmembers}</span></h4>
                  <h4>Age:<span>{booking.event}</span></h4>
                  <h4>Appointment Date:<span>{booking.date}</span></h4>
                  </div>
                  <div className='2'>
                  <h4>Address:<span>{booking.arrival}</span></h4>
                  <h4>Years:<span>{booking.departure}</span></h4>
                  <h4>Policy:<span>{booking.venueName}</span></h4>
                  </div>
                  <div className='bt' style={{width:'100%',height:'5%'}}>
                  <button 
                        style={{ width: '11%', height: '34%', position: 'relative', left: '118%', top: '44%' }} 
                        onClick={() => handleCancel(booking.id, index)} // pass booking ID and index
                      >
                        Cancel
                      </button>
                  </div>
                  </div>
              </div>
                </li>
            ))}
          </ul>
        ) : (
          <p>No policies quoted yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyBooking;
