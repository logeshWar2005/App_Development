
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import Modal from 'react-modal';
import cake from "../asserts/images/27814.jpg";
import bcimg from "../asserts/images/back1.jpg";
import band from "../asserts/images/64649.jpg";
import br from "../asserts/images/health.png";
import bookh from '../asserts/images/bookh.png';
import cater from "../asserts/images/EARTH.jpg";
import banquet from "../asserts/images/travel-insurance.png";
import cock from "../asserts/images/child.png";
import flower from "../asserts/images/fire.jpg";
import pool from "../asserts/images/payment-protection.png";
import quote from '../asserts/images/quoteh.png';
import rest from "../asserts/images/family.png";
import searchh from '../asserts/images/searchh.png';
import team from "../asserts/images/thermometer.png";
import venderbc from '../asserts/images/black-and-white-flower.png';
import eng from "../asserts/images/retire.png";
import wed from "../asserts/images/term.png";
import Footer from './Footer';
import Navbar from './Navbar';
import Registeration from './RegistrationForms/Registeration';
import VenderRegisteration from './RegistrationForms/VenderRegisteration';
const categories = [
  { img: wed, alt: "Term Insurance", text: "Term Insurance" },
  { img: br, alt: "Health Insurance", text: "Health Insurance" },
  { img: eng, alt: "Retirement Plan", text: "Retirement Plan" },
  { img: pool, alt: "Investment Plan", text: "Investment Plan" },
  { img: rest, alt: "Family Protection", text: "Family Protection" },
  { img: cock, alt: "Child Plan", text: "Child Plan" },
  { img: banquet, alt: "Travel Insurance", text: "Travel Insurance" },
  { img: team, alt: "Critical Illness Insurance", text: "Corporate Party" },
];
const vendors = [
  { img: band, alt: "CAR ACCIDENT", text: "CAR ACCIDENT" },
  { img: flower, alt: "FIRE ACCIDENT", text: "FIRE ACCIDENT" },
  { img: cake, alt: "FLOOD ACCIDENT", text: "FLOOD ACCIDENT" },
  { img: cater, alt: "SENIOR CITIZEN ACCIDENT", text: "SENIOR CITIZEN ACCIDENT" },

];
function Home({ setIsAuthenticated }) {
  const [visible, setVisible] = useState(false);
  const [openv, setOpenv] = useState(false);
  const navigate = useNavigate();

  const show = () => {
    navigate('/venues');
  };
  const sh = () => setOpenv(true);
  const customStyles = {
    content: {
      width: '31%',
      height: 'auto',
      margin: 'auto',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#f8f9fa',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };

  const customStyle = {
    content: {
      width: '67%',
      height: '95%',
      margin: 'auto',
      display: 'flex',
      paddingLeft: '40px',
      borderRadius: '10px',
      backgroundColor: '#f8f9fa',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };

  const bcstyle = {
    backgroundColor:"orange",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh',
  };
  return (
    <div className="hcontainer">
      <div className="header" style={bcstyle}>
        <Navbar />
        <h2>LIFE INSURANCE PORTAL.</h2>
      </div>

      <div className="hcenter">
        <table cellPadding="10%">
          <tbody>
            <tr>
              {categories.map(({ img, alt }) => (
                <td key={alt} style={{ textAlign: 'center' }}>
                  <img src={img} onClick={show} alt={alt} className="table-image" />
                  <p className="text">{alt}</p>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        <span className="category">  TYPES OF ACCIDENTAL PLANS</span>
        <div className="vender">
          <table cellPadding="10%">
            <tbody>
              <tr>
            
                {vendors.map(({ img, alt, text }) => (
                  <td key={alt} style={{ textAlign: 'center' }}>
                    <img src={img} onClick={sh} alt={alt} className="table-image" />
                    <p style={{marginTop:'10px'}} className="text">{text}</p>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className='howitworks'>
          <p>How It Works?</p>
          <div className='hw-container'>
            <div>
              <img src={searchh} alt="Browse Venues" className="table-image" />
              <h4>Browse Plans</h4>
              <p>Check out the best suited plan, compare plan, special offers and plan packages.</p>
            </div>
            <div>
              <img src={quote} alt="Request Quotes" className="table-image" />
              <h4>Request Quotes</h4>
              <p>Get custom quotes of your short-listed plans at the click of GET FREE QUOTES button.</p>
            </div>
            <div>
              <img src={bookh} alt="Book a Venue" className="table-image" />
              <h4>Book a appointment</h4>
              <p>Select and Book the perfect appointment in no time at all. Time is money, save both.</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
      <Modal
        isOpen={visible}
        style={customStyles}
        onRequestClose={() => setVisible(false)}
        contentLabel="Request Quote Modal"
      >
        <Registeration onClose={() => setVisible(false)} />
      </Modal> 
      <Modal
        isOpen={openv}
        style={customStyle}
        onRequestClose={() => setOpenv(false)}
        contentLabel="Vendor Registration Modal"
      >
        <img src={venderbc} style={{ width: '40%', height: '60%', marginTop: '15%' }} alt='Vendor Background' />
        <VenderRegisteration onClose={() => setOpenv(false)} />
      </Modal>
    </div>
  );
}

export default Home;