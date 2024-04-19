import React from 'react';
import './Home.css';
import img1 from "../assests/about.jpg"
import Person from '@mui/icons-material/PersonAddAlt1Outlined';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Choose from '../components/Choose';

const Home = () => {
  return (
    /* 
    <div className='home-container'>
      <section>
       <div className='title-container'>
       <Title></Title>
       <h3></h3>
      </div>
     </section>
      <div className=''></div>
    </div>
    */
   <>
   <div className='hero'>
       <div className='title-left'>
        <h1>The Voice <span className='notes'>Notes</span></h1
        >
        <h3>Learn the music from the Masters</h3>
        <button> Start Learning</button>
       </div>
   </div>



   <div className='about-section'>
      <div className='ab-left'>
        <img src={img1} />
     </div>
     <div className='ab-right'>
       <h2>About Us</h2>
       <h5>Music is the divine way to tell beautiful, <br/>poetic things to the heart</h5>
       <p>At our academy, we are dedicated to providing top-notch music education and training to aspiring singers. </p>
       <button>Know More</button>
     </div>
    </div>



    <div className='choose'>
      <h1>Why Choose Our Academy</h1>
      
       <div className='choose-row'>
         <div className='choose-box'>
         <Choose 
         icon={<Person className='icon'/>}
         title="Best Teachers"
          />
         </div>
          <div className='choose-box'>
          <Choose 
         icon={<LocationCityIcon className='icon'/>} 
         title="State-of-the-Art Studios" 
         />
          </div>
          <div className='choose-box'>
          <Choose 
          icon={<LibraryMusicIcon className='i`con'/>}
         title="High-Quality Equipment" 
         />
          </div>
       </div>


    </div>

    <div className='Our Programs'>
      <h1>Our class is where your passions come into play every day.</h1>

    </div>
   </>
  )
}

export default Home;