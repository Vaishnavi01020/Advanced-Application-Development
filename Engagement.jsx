import React, { useState } from 'react';
import image from '../assets/images/eng1.webp';
import image1 from '../assets/images/eng3.jpg';
import image2 from '../assets/images/eng4.jpg';
import '../assets/css/Engagement.css';

function Engagement() {
  const [popupContent, setPopupContent] = useState(null);
  const [popupImage, setPopupImage] = useState(null); // State to track the selected image for popup

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
    <div className='eng-page'>
      
      <div className="eng-container" style={{ width:"90%", height: '20%' }}>
  <div className="eng-image-container">
    <img src={image1} alt="Placeholder" />
  </div>
        <div className="eng-text-container" >
          <h2 className="eng-basic" style={{ top: "100%" }}>Basic Package</h2>
          <ul>
            <li>Budget wedding hall</li>
            <li>Name Board of BRIDE and Groom</li>
            <li>Breakfast-250 nos</li>
            <li>Traditional & Candid Photography</li>
            <li>MAC HD Makeup With Hairstyling (Bride & Groom)</li>
            <li>Muthurtha Malai-2 Nos</li>
          </ul>
          <div className="eng-read-more">
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <button style={{ width: '150px', height: '40px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', outline: 'none' }} onClick={() => handleReadMoreClick("Breakfast-500 nos\nLunch-300 nos\nEvening Snacks -300 nos\nDinner- 750 nos\nPhotography\nPre & Post Wedding Photoshoot\nTraditional & Candid Photography\nTraditional & Candid Videography\n12*36 Two Albums With 600 ImagesFull HD Video in Pen drive\nTwo photo frames\nled wall\ncinematic video\nBrIde & Groom Styling\nTraditional Makeup with hairstyle (matching venni) for muhurtham\nReception makeup and styling by reasoned artists (bride & Groom)\nMehandi By professional")}>
      Read More
    </button>
    <button style={{ width: '150px', height: '40px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', outline: 'none' }} onClick={() => handleViewAlbumsClick(image4)}>
      View Albums
    </button>
  </div>
</div>

            <div className="eng-amount">Amount: $200</div>
            <button style={{ left: "30%",top:"95%"}} >
              Add To Cart
            </button>
          
        </div>
      </div>
      <div className="eng-container" style={{ width: "90%", height: '20%' }}>
        <div className="eng-image-container">
          <img src={image2} alt="Another Placeholder" />
        </div>
        <div className="eng-text-container">
          <h2 className="eng-elite">Elite Package</h2>
          <ul>
            <li>Elite wedding hall</li>
            <li>Customized Name Board & Enterance</li>
            <li>Breakfast-500 nos</li>
            <li>Traditional & Candid Photography
</li>
            <li>MAC HD Makeup With Hairstyling (matching venni) for muhurtham</li>
            <li>Muthurtha Malai-2 Nos</li>
          </ul>
          <div className="eng-read-more">
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <button style={{ width: '150px', height: '40px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', outline: 'none' }} onClick={() => handleReadMoreClick("Customized Name Board & Enterance\nCustomized Enterance Arch with Family name\nCelebrity Mehandi Decoration\nCelebrity Reception Flower Decoration for stage\nCelebrity Muhurtham Flower Decoration for stage\nDecoration In theme\nDiwan Sofa\nBreakfast-500 nos\nLunch-300 nos\nEvening Snacks -300 nos\nDinner- 1000 nos")}>
      Read More
    </button>
    <button style={{ width: '150px', height: '40px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', outline: 'none' }} onClick={() => handleViewAlbumsClick(image4)}>
      View Albums
    </button>
  </div>
</div>

            <div className="eng-amount">Amount: $300</div>
            <button style={{ left: "30%",top:"95%"}} >
              Add To Cart
            </button>
          </div>
        
      </div>
      <div className="eng-container" style={{ width: "90%", height: '20%' }}>
        <div className="eng-image-container">
          <img src={image} alt="Another Placeholder" />
        </div>
        <div className="eng-text-container">
          <h2 className="eng-elite">Celebrity Package</h2>
          <ul>
            <li>Celebrity wedding hall</li>
            <li>Customized Name Board & Enterance
</li>
            <li>Breakfast-500 nos
</li>
            <li>Traditional & Candid Photography</li>
            <li>E Invite</li>
            <li>Traditional Makeup With Hairstyling (matching venni) for muhurtham</li>
          </ul>
         
<div className="eng-read-more">
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <button style={{ width: '150px', height: '40px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', outline: 'none' }} onClick={() => handleReadMoreClick("GARLANDS\nMuhurtha Malai-2 Nos\nMathu Malai- 2Nos\nnWelcome Roses\nMANGALA VATHIYAM\nBRIDE & GROOM ENTRY\nRETURN GIFTS\nThambulam Bags 250Nos\nCAKE\nDECORATIVE PLATES\nTraditional Plates (10 Numbers)\nENTERTAIMENT (ANY TWO)\nMirror Selfie Booth\nPortrait Drawing\nMehandi Stall\nBangle Stall\nINVITATIONS\nPrinted 300 Nos")}>
      Read More
    </button>
    <button style={{ width: '150px', height: '40px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', outline: 'none' }} onClick={() => handleViewAlbumsClick(image4)}>
      View Albums
    </button>
  </div>
</div>

            <div className="eng-amount">Amount: $300</div>
            <button style={{ left: "30%",top:"95%"}} >
              Add To Cart
            </button>
          </div>
        
      </div>


      {popupContent && (
        <div className="eng-popup">
          <div className="eng-popup-content">
            <span className="eng-close" onClick={handleClosePopup}>×</span>
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
        <div className="eng-popup">
          <div className="eng-popup-content">
            <span className="eng-close" onClick={handleClosePopup}>×</span>
            <img src={popupImage} alt="Popup Image" style={{ maxWidth: "100%", maxHeight: "100%" }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Engagement;