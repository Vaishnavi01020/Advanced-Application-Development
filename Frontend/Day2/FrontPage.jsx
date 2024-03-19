import React, { useState } from 'react';
import '../assets/css/FrontPage.css';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg'; // Assuming different image for responsiveness

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [image1, image2];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className="container">
      <div className="sliding-window"> {/* New class for sliding container */}
        <div className="slideshow-container">
          {images.map((img, index) => (
            <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              <img src={img} alt={`Image ${index + 1}`} />
            </div>
          ))}
          <button className="prev" onClick={prevSlide}>&#10094;</button>
          <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
      </div>
      <div className="forms">
        <div className="form">
          <h1>Form 1</h1>
          <img src={image1} alt="Image 1" />
          <form>{/* Form fields */}</form>
        </div>
        <div className="form">
          <h1>Form 2</h1>
          <img src={image2} alt="Image 2" />
          <form>{/* Form fields */}</form>
        </div>
        {/* Add more forms here */}
      </div>
    </div>
  );
}

export default App;
