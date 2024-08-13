import { faClipboard, faHouse, faShop, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';


import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../../asserts/Admin.css';
const Admin = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3060/api/admins')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredUsers = users.filter(user => 
    (user.name && user.name.toLowerCase().includes(search.toLowerCase())) ||
    (user.event && user.event.toLowerCase().includes(search.toLowerCase())) ||
    (user.number && user.number.toLowerCase().includes(search.toLowerCase())) ||
    (user.date && user.date.toLowerCase().includes(search.toLowerCase())) ||
    (user.totalmembers && user.totalmembers.toLowerCase().includes(search.toLowerCase())) ||
    (user.arrival && user.arrival.toLowerCase().includes(search.toLowerCase())) ||
    (user.departure && user.departure.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="admin-body">
      <div className="header">
        <Link to="/AdminUsers" style={{ textDecoration: 'none'}}><div><FontAwesomeIcon icon={faHouse}/><span style={{marginLeft:'10px'}}>DashBoard</span></div></Link>
        <Link to="/Admin" style={{ textDecoration: 'none' }}><div><FontAwesomeIcon icon={faClipboard}/><span style={{marginLeft:'10px'}}>Quoted Policies</span></div></Link>
        <Link to="/AdminVender" style={{ textDecoration: 'none' }}><div><FontAwesomeIcon icon={faUser}/><span style={{marginLeft:'10px'}}>Users</span></div></Link>
        
        <Link to="/SignIn" style={{ textDecoration: 'none' }}><div>Sign Out</div></Link>
      </div>
      <div className="Appbar">
        <p>Policies Quoted</p>
        <input type="text" name="search" onChange={handleSearchChange} value={search} placeholder="Search" />
      </div>
      <div className="form-container" style={{ marginLeft: '12%' }}>
        <div>
          <h2>LifeLong Insurance</h2>
          <table className='table table-striped'>
            <thead>
              <tr>
                <td className='font-weight-bold'>Name</td>
                <td className='font-weight-bold'>Total Family Members</td>
                <td className='font-weight-bold'>Address</td>
                <td className='font-weight-bold'>Years</td>
                <td className='font-weight-bold'>Age</td>
                <td className='font-weight-bold'>Mobile No</td>
                <td className='font-weight-bold'>Appointment Date</td>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.totalmembers}</td>
                    <td>{user.arrival}</td>
                    <td>{user.departure}</td>
                    <td>{user.event}</td>
                    <td>{user.number}</td>
                    <td>{user.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7}>No users</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
