import { faClipboard, faHouse, faShop, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../asserts/Admin.css';

const VendorsBooked = ({ vendorbooked = [] }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredUsers = vendorbooked.filter(user => 
    (user.rname && user.rname.toLowerCase().includes(search.toLowerCase())) ||
    (user.remail && user.remail.toLowerCase().includes(search.toLowerCase())) ||
    (user.revent && user.revent.toLowerCase().includes(search.toLowerCase())) ||
    (user.rmobile && user.rmobile.toLowerCase().includes(search.toLowerCase())) ||
    (user.rdate && user.rdate.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="admin-body">
      <div className="header">
      <Link to="/AdminUsers" style={{ textDecoration: 'none'}}><div><FontAwesomeIcon icon={faHouse}/><span style={{marginLeft:'10px'}}>DashBoard</span></div></Link>
        <Link to="/Admin" style={{ textDecoration: 'none' }}><div><FontAwesomeIcon icon={faClipboard}/><span style={{marginLeft:'10px'}}>Bookings</span></div></Link>
        <Link to="/AdminVender" style={{ textDecoration: 'none' }}><div><FontAwesomeIcon icon={faUser}/><span style={{marginLeft:'10px'}}>Users</span></div></Link>
        <Link to="/vendorbooked" style={{ textDecoration: 'none' }}><div><FontAwesomeIcon icon={faShop}/><span style={{marginLeft:'10px'}}>Vendors Booked</span></div></Link>
        
        <Link to="/signin" style={{ textDecoration: 'none' }}><div>Sign Out</div></Link>
      </div>
      <div className="Appbar">
        <p>Vendors Booked</p>
        <input type="text" name="search" onChange={handleSearchChange} value={search} placeholder="Search" />
      </div>
      <div className="form-container" style={{ marginLeft: '12%' }}>
        <div>
          <h2>Vendors Booked</h2>
          <table className='table table-striped'>
            <thead>
              <tr>
                <td className='font-weight-bold'>Name</td>
                <td className='font-weight-bold'>Email</td>
                <td className='font-weight-bold'>Event</td>
                <td className='font-weight-bold'>Location</td>
                <td className='font-weight-bold'>Mobile No</td>
                <td className='font-weight-bold'>Date</td>
              </tr>
            </thead>
            <tbody>
              {vendorbooked.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.rname}</td>
                    <td>{user.remail}</td>
                    <td>{user.revent}</td>
                    <td>{user.rlocation}</td>
                    <td>{user.rmobile}</td>
                    <td>{user.rdate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6}>No users</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VendorsBooked;
