import { ArcElement, BarElement, CategoryScale, Chart, LinearScale } from 'chart.js';
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { faClipboard, faHouse, faShop, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import '../../asserts/Admin.css';

Chart.register(ArcElement, BarElement, CategoryScale, LinearScale);

const AdminUsers = ({ users = [], vendorbooked = [], logins = [] }) => {
  const total = users.length + vendorbooked.length + logins.length;

  const pieData = {
    labels: ['Available', 'Booked', 'Vendors Booking', 'Total'],
    datasets: [
      {
        label: 'Status',
        data: [logins.length, users.length, vendorbooked.length, total],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',   // Cyan
          'rgba(54, 162, 235, 0.6)',   // Blue
          'rgba(255, 206, 86, 0.6)',   // Yellow
          'rgba(153, 102, 255, 0.6)',  // Purple
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ['Registered Users', 'Quoted', 'Ongoing Policies', 'Total Users'],
    datasets: [
      {
        label: 'Counts',
        data: [logins.length, users.length, vendorbooked.length, total],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',   // Cyan
          'rgba(54, 162, 235, 0.6)',   // Blue
          'rgba(255, 206, 86, 0.6)',   // Yellow
          'rgba(153, 102, 255, 0.6)',  // Purple
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const colors = [
    { color: 'rgba(75, 192, 192, 0.6)', name: 'Registered users' },
    { color: 'rgba(54, 162, 235, 0.6)', name: 'Quoted' },
    { color: 'rgba(255, 206, 86, 0.6)', name: 'Ongoing Policies' },
    { color: 'rgba(153, 102, 255, 0.6)', name: 'Total Users' },
  ];

  return (
    <div className="admin-body">
      <div className="header">
      <Link to="/AdminUsers" style={{ textDecoration: 'none'}}><div><FontAwesomeIcon icon={faHouse}/><span style={{marginLeft:'10px'}}>DashBoard</span></div></Link>
        <Link to="/Admin" style={{ textDecoration: 'none' }}><div><FontAwesomeIcon icon={faClipboard}/><span style={{marginLeft:'10px'}}>Quoted Policies</span></div></Link>
        <Link to="/AdminVender" style={{ textDecoration: 'none' }}><div><FontAwesomeIcon icon={faUser}/><span style={{marginLeft:'10px'}}>Users</span></div></Link>
 
        <Link to="/SignIn" style={{ textDecoration: 'none' }}>
          <div>Sign Out</div>
        </Link>
      </div>
      <div className="Appbar">
        <p>DashBoard</p>
        <input type="text" name="search" placeholder="Search" />
      </div>
      <div className="dashboard">
        <div className="st">
          <div>
            Registered users
            <h1>{logins.length}</h1>
          </div>
          <div>
            Quoted
            <h1>{users.length}</h1>
          </div>
          <div>
            Ongoing policies
            <h1>{vendorbooked.length}</h1>
          </div>
          <div>
            Total Users
            <h1>{total}</h1>
          </div>
        </div>
        <div className="admin-status">
          <Pie data={pieData} />
          <br />
          <ul style={{ marginLeft: '35px', marginTop: '90px' }}>
            {colors.map((item, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: item.color,
                    marginRight: '10px',
                  }}
                ></div>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="admin-chart">
          <Bar data={barData} style={{marginTop:'30px'}} />
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
