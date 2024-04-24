import React, { useState } from 'react';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/Bday_package1.png';
import image3 from '../assets/images/Bday_package2.png';
import image4 from '../assets/images/Bday_package3.png';
import '../assets/css/Birthday.css';
import AddOns from './AddOns';

function Birthday() {
  const [popupContent, setPopupContent] = useState(null);
  const [popupImage, setPopupImage] = useState(null); // State to track the selected image for popup

  const handleAddOnsClick = () => {
    window.history.pushState(null, '', '/addons'); // Replace '/addons' with the actual route to the addons page
    window.history.go();
  };

  const handleReadMoreClick = (content, image) => {
    setPopupContent(content);
    setPopupImage(image); // Set the selected image for popup
  };

  const handleClosePopup = () => {
    setPopupContent(null);
    setPopupImage(null); // Reset popup image
  };

  const handleViewAlbumsClick = (image) => {
    setPopupImage(image); // Set the selected image for popup
  };


  return (
    <div>
    <div className='birthday-page'>
      
      <div className="birthday-container" style={{ width:"90%", height: '20%' }}>
  <div className="birthday-image-container">
    <img src={image2} alt="Placeholder" />
  </div>
        <div className="birthday-text-container" >
          <h2 className="birthday-basic" style={{ top: "100%" }}>Basic Package</h2>
          <ul>
            <li>Back Drop Decoration</li>
            <li>Entrance Arch</li>
            <li>Welcome Board</li>
            <li>1 Feet Baby name light</li>
            <li>Balloon Bunches in the hall (if allowed at venue)</li>
            <li>Theme Based Cylinder Table</li>
          </ul>
          <div className="birthday-read-more">
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <button style={{ width: '150px', height: '40px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', outline: 'none' }} onClick={() => handleReadMoreClick("Theme Decoration(Standard Theme only)\nEnterance Arch\nWelcome Board\nBaby Milestone Board\nPhoto collage frame(Photos Should be given by Customer)\n2 Feet Baby Name LED Light - Max 8 letters\nBalloons Bunches in the Hall (If Allowed at Venue)\nTheme Based Cylinder Table\nCup Cake Stand & Cake Stand\nE invite\nStick Balloons (30 Nos)")}>
      Read More
    </button>
    <button style={{ width: '150px', height: '40px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', outline: 'none' }} onClick={() => handleViewAlbumsClick(image4)}>
      View Albums
    </button>
  </div>
</div>

            <div className="birthday-amount">Amount: $200</div>
            <button style={{ left: "30%",top:"95%"}} >
              Add To Cart
            </button>
            <button style={{ left: "50%", top: "95%" }} onClick={handleAddOnsClick}>
  Add-Ons
</button>
        </div>
      </div>
      <div className="birthday-container" style={{ width: "90%", height: '20%' }}>
        <div className="birthday-image-container">
          <img src={image3} alt="Another Placeholder" />
        </div>
        <div className="birthday-text-container">
          <h2 className="birthday-elite">Elite Package</h2>
          <ul>
            <li>Back Drop Decoration</li>
            <li>Entrance Arch</li>
            <li>Welcome Board</li>
            <li>2 Feet Baby name light</li>
            <li>Balloon Bunches in the hall (if allowed at venue)</li>
            <li>Theme Based Cylinder Table</li>
          </ul>
          <div className="birthday-read-more">
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <button style={{ width: '150px', height: '40px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', outline: 'none' }} onClick={() => handleReadMoreClick("Theme Decoration(Standard Theme only)\nEnterance Arch\nWelcome Board\nBaby Milestone Board\nPhoto collage frame(Photos Should be given by Customer)\n2 Feet Baby Name LED Light - Max 8 letters\nBalloons Bunches in the Hall (If Allowed at Venue)\nTheme Based Cylinder Table\nCup Cake Stand & Cake Stand\nE invite\nStick Balloons (30 Nos)")}>
      Read More
    </button>
    <button style={{ width: '150px', height: '40px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', outline: 'none' }} onClick={() => handleViewAlbumsClick(image4)}>
      View Albums
    </button>
  </div>
</div>

            <div className="birthday-amount">Amount: $300</div>
            <button style={{ left: "30%",top:"95%"}} >
              Add To Cart
            </button>
            <button style={{ left: "50%", top: "95%" }} onClick={handleAddOnsClick}>
  Add-Ons
</button>
          </div>
        
      </div>
      <div className="birthday-container" style={{ width: "90%", height: '20%' }}>
        <div className="birthday-image-container">
          <img src={image4} alt="Another Placeholder" />
        </div>
        <div className="birthday-text-container">
          <h2 className="birthday-elite">Celebrity Package</h2>
          <ul>
            <li>Back Drop Decoration</li>
            <li>Entrance Arch</li>
            <li>Welcome Board</li>
            <li>2 Feet Baby name light</li>
            <li>Balloon Bunches in the hall (if allowed at venue)</li>
            <li>Theme Based Cylinder Table</li>
          </ul>
         
<div className="birthday-read-more">
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <button style={{ width: '150px', height: '40px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', outline: 'none' }} onClick={() => handleReadMoreClick("Theme Decoration(Standard Theme only)\nEnterance Arch\nWelcome Board\nBaby Milestone Board\nPhoto collage frame(Photos Should be given by Customer)\n2 Feet Baby Name LED Light - Max 8 letters\nBalloons Bunches in the Hall (If Allowed at Venue)\nTheme Based Cylinder Table\nCup Cake Stand & Cake Stand\nE invite\nStick Balloons (30 Nos)")}>
      Read More
    </button>
    <button style={{ width: '150px', height: '40px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', outline: 'none' }} onClick={() => handleViewAlbumsClick(image4)}>
      View Albums
    </button>
  </div>
</div>

            <div className="birthday-amount">Amount: $300</div>
            <button style={{ left: "30%",top:"95%"}} >
              Add To Cart
            </button>
            <button style={{ left: "50%", top: "95%" }} onClick={handleAddOnsClick}>
  Add-Ons
</button>
          </div>
        
      </div>


      {popupContent && (
        <div className="birthday-popup">
          <div className="birthday-popup-content">
            <span className="birthday-close" onClick={handleClosePopup}>×</span>
            <p>
              {popupContent.split('\n').map((item, index) => (
                <span key={index}>
                  {item}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      )}

      {popupImage && (
        <div className="birthday-popup">
          <div className="birthday-popup-content">
            <span className="birthday-close" onClick={handleClosePopup}>×</span>
            <img src={popupImage} alt="Popup Image" style={{ maxWidth: "100%", maxHeight: "100%" }} />
          </div>
        </div>
      )}
    </div>
    {/* <AddOns/> */}
    </div>
    
  );
}

export default Birthday;