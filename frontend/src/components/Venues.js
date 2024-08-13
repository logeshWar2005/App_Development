
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import bcimg from "../asserts/images/background.jpg";
import v1 from "../asserts/images/black-and-white-flower.png";
import v2 from "../asserts/images/v2.webp";
import v3 from "../asserts/images/v3.jpeg";
import '../asserts/venues.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Registration from './RegistrationForms/Registeration';

const venuesData = [
    {
      img:v1,
      name: "SecureLife Term Insurance",
      description: "A reliable term insurance plan that provides financial security for your loved ones in the event of your untimely demise. It offers a substantial lump sum payout to your beneficiaries, ensuring their financial needs are met."
    },
    {
      img:v1,
      name: "HealthGuard Health Insurance",
      description: "Comprehensive health insurance coverage designed to protect you and your family from the high costs of medical treatment. It includes hospitalization, surgeries, and coverage for critical illnesses, ensuring you receive the best care without financial strain."
    },
    {
      img:v1,
      name: "Golden Years Retirement Plan",
      description: "A retirement plan that helps you build a secure financial foundation for your golden years. With guaranteed returns and regular pension payouts, you can enjoy your retirement without worrying about financial stability."
    },
    {
      img:v1,
      name: "WealthPlus Investment Plan",
      description: "A dynamic investment plan that combines the benefits of life insurance with the potential for market-linked returns. It helps you grow your wealth while providing a safety net for your family's future."
    },
    {
      img:v1,
      name: "FamilyGuard Protection Plan",
      description: "A comprehensive protection plan that covers your entire family. It offers coverage for accidental death, health emergencies, and ensures that your family is financially protected against unforeseen events."
    },
    {
      img:v1,
      name: "BrightFuture Child Plan",
      description: "A child insurance plan that secures your child's financial future by providing funds for education, marriage, or other life milestones. It offers guaranteed returns to help you plan for your child's bright future."
    },
    {
      img:v1,
      name: "GlobeTrotter Travel Insurance",
      description: "An essential travel insurance plan that ensures you are covered during your international travels. It includes protection against medical emergencies, trip cancellations, and loss of baggage, giving you peace of mind while you explore the world."
    },
    {
      img:v1,
      name: "HealthShield Critical Illness Insurance",
      description: "A specialized insurance plan that provides a lump sum payout upon the diagnosis of a critical illness. It helps you manage the high costs of treatment and maintain financial stability during a challenging time."
    }
  ];
  
  
const Venues = () => {
  const bcstyle = {
    backgroundColor: "orange",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh',
    width: '100vw',
  };
  
  const customStyles = {
    content: {
      width: '65%',
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
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedVenue, setSelectedVenue] = useState(null);
  const itemsPerPage = 3;

  const filterByBudget = (price, selectedBudget) => {
    const priceValue = parseInt(price.replace(/[^0-9]/g, ''), 10);
    switch (selectedBudget) {
      case "Under 10000 Rs":
        return priceValue < 10000;
      case "10001 Rs to 20000 Rs":
        return priceValue >= 10001 && priceValue <= 20000;
        case "20001 Rs to 30000 Rs":
          return priceValue >= 20001 && priceValue <= 30000;
          case "30001 Rs to 50000 Rs":
            return priceValue >= 30001 && priceValue <= 50000;
            case "50001 Rs to 75000 Rs":
              return priceValue >= 50001 && priceValue <= 75000;
              case "100000 Rs +":
                return priceValue > 100000;
                default:
                  return true;
      }
  };

  const filterByRating = (rating, selectedRating) => {
    switch (selectedRating) {
      case "Under 1":
        return rating < 1;
        case "Between 1 and 2":
          return rating >= 1 && rating <= 2;
      case "Between 2 and 3":
        return rating >= 2 && rating <= 3;
      case "Between 3 and 4":
        return rating >= 3 && rating <= 4;
      case "Between 4 and 5":
        return rating >= 4 && rating <= 5;
        case "Above 5":
          return rating > 5;
      default:
        return true;
    }
  };

  const filteredVenues = venuesData.filter((venue) => {
    return (
      (!selectedCity || venue.location.includes(selectedCity)) &&
      (!selectedBudget || filterByBudget(venue.price, selectedBudget)) &&
      (!selectedRating || filterByRating(venue.rating, selectedRating))
    );
  });

  const paginatedVenues = filteredVenues.slice(currentIndex, currentIndex + itemsPerPage);

  useEffect(() => {
    setCurrentIndex(0); // Reset pagination when filters change
  }, [selectedCity, selectedBudget, selectedRating]);

  
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, filteredVenues.length - itemsPerPage));
  };
  
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const handleRequestQuote = (venue) => {
    setSelectedVenue(venue);
    setVisible(true);
  };
  
  return (
    <div className="hcontainer">
      <div className="header" style={bcstyle}>
        <Navbar />
        <h2>Find Your Perfect Policy</h2>
        
      </div>

      <div className="vscenter">
        
        {paginatedVenues.map((venue, index) => (
          <div className="scard" key={index}>
            <img src={venue.img} alt={`venue${index + 1}`} />
            <div className="content">
              <h2>{venue.name}</h2>
              <p>  <br/>{venue.description}</p>
             
             
  
              <button onClick={() => handleRequestQuote(venue)}>Request Quote</button>
            </div>
          </div>
        ))}
        <div className="pagination">
          <button onClick={handlePrevClick} style={{ marginLeft: '-78%' }}  disabled={currentIndex === 0}>Previous</button>
          <button onClick={handleNextClick} disabled={currentIndex + itemsPerPage >= filteredVenues.length} style={{ marginLeft: '240%' }} >Next</button>
        </div>
      </div>

      <Modal isOpen={visible} style={customStyles} onRequestClose={() => setVisible(false)}>
        <Registration selectedVenue={selectedVenue} onClose={() => setVisible(false)} />
      </Modal>

      <Footer />
    </div>
  );
};

export default Venues;
