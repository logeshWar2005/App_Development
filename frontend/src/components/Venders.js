import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { React, useState } from 'react';
import Modal from 'react-modal';
import bcimg from "../asserts/images/background.jpg";
import catering from '../asserts/images/PRAVEEN.jpg';
import DJ from "../asserts/images/LOKI.jpg";
import makeupimg from "../asserts/images/DEV.jpg";
import photograph from "../asserts/images/AHASH.jpg";
import venderbc from '../asserts/images/venderbc.png';
import '../asserts/venders.css';
import Dropdown from './Dropdown.js';
import Footer from './Footer.jsx';
import Navbar from './Navbar';
import VenderRegisteration from './RegistrationForms/VenderRegisteration.js';
function Venders({addUser}){
  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  }
  const bcstyle={
    backgroundColor: "orange",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh',
    width: '100vw', 
  };
  const customStyles = {
    content: {
      width: '60%',        
      height: '87%',      
      margin: 'auto',       
      display:'flex',
      paddingLeft: '40px',     
      borderRadius: '10px', 
      backgroundColor: '#f8f9fa',
    },

    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };
  return(
    <div class="hcontainer">
            <div class="header" style={bcstyle}>
              <Navbar/>

        <h2>About us</h2>
 </div>
      <div class="vcenter">
      
       <p class="popser">TEAM MEMBERS</p>

       <div class="vpopular">
       <Card sx={{ maxWidth: 325,marginLeft:'84px',boxShadow: '0 0 10px rgba(0, 0, 0, 0.566)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
    
          image={photograph}
          alt="green iguana"
        />
        <CardContent className='ccontent'>
          <Typography gutterBottom variant="h6" component="div">
            AHASHKUMAR S
          </Typography>
          <Typography variant="body3" color="text.secondary">
727822TUAD004          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
       <Card sx={{ maxWidth: 325 ,marginLeft:'34px',boxShadow: '0 0 10px rgba(0, 0, 0, 0.566)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={DJ}
          alt="green iguana"
        />
        <CardContent className='ccontent' style={{fontSize:'15px'}}>
          <Typography gutterBottom variant="h6" component="div">
            LOGESHWAR S
          </Typography>
          <Typography variant="body3" color="text.secondary">
727822TUAD029         </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
       <Card sx={{ maxWidth: 325 ,marginLeft:'34px',boxShadow: '0 0 10px rgba(0, 0, 0, 0.566)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={catering}
          alt="green iguana"
        />
        <CardContent className='ccontent' style={{fontSize:'15px'}}>
          <Typography gutterBottom variant="h6" component="div">
            PRAVEENKUMAR J
          </Typography>
          <Typography variant="body3" color="text.secondary">
727822TUAD037          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 325 ,marginLeft:'34px',boxShadow: '0 0 10px rgba(0, 0, 0, 0.566)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={makeupimg}
          alt="green iguana"
        />
        <CardContent className='ccontent' style={{fontSize:'15px'}}>
          <Typography gutterBottom variant="h6" component="div">
            DEV ANAND M
          </Typography>
          <Typography variant="body3" color="text.secondary">
727823TUAD601          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
        
                </div>
      </div>
      <Footer/>
    
        <Modal
        isOpen={visible}
       style={customStyles}
        onRequestClose={() => setVisible(false)}
        contentLabel="Request Quote Modal"
      >
        <img src={venderbc} style={{width:'40%',height:'60%',marginTop:'15%'}} alt='venderbc' />
        <VenderRegisteration onClose={() => setVisible(false)} addUser={addUser}/>
      </Modal>
      </div>
  );
};

export default Venders;


      