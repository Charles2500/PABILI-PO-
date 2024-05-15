import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './App.css';

function Appshop() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="App" section id='shop'>
      <h1 className="shops-text">Shops</h1>
      <Carousel responsive={responsive}>


        <div className="card card1">
          <div className="profile-banner">
          <a href="https://www.facebook.com/JollibeePhilippines">
            <div className="cover-photo"></div>
            <div className="profile-photo"></div>
            </a>
                <div className="name">Jollibee</div>
            </div>
          </div>
          
    
        <div className="card card2">
          <div className="profile-banner">
          <a href="https://www.facebook.com/McDo.ph">
            <div className="cover-photo1"></div>
            <div className="profile-photo1"></div>
            </a>
                <div className="name">McDonald's</div>
            </div>
          </div>
          
        
        <div className="card card3">
          <div className="profile-banner">
          <a href="https://www.facebook.com/kfcphilippines/?brand_redir=7144906559">
            <div className="cover-photo2"></div>
            <div className="profile-photo2">     </div>
            </a>
                <div className="name">KFC</div>
            </div>
          </div>
          
  
        <div className="card card4">
          <div className="profile-banner">
          <a href="https://www.facebook.com/chowkingph">
            <div className="cover-photo3"></div>
            <div className="profile-photo3">    </div>
            </a>
                <div className="name">ChowKing</div>
            </div>
          </div>
    

        <div className="card card5">
          <div className="profile-banner">
          <a href="https://www.facebook.com/burgerkingph">
            <div className="cover-photo4"></div>
            <div className="profile-photo4"></div>
            </a>
                <div className="name">BurgerKing</div>
            </div>
          </div>
        
      </Carousel>
    </div>
  );
}

export default Appshop;
