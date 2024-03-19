import React from 'react';
import '../assets/css/Birthday.css'; // Import the CSS file
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';

function Wedding() {
  return (
    <div className="scrollable-container">
      <div className="birthday-decor">
        <h1>Birthday</h1>
      
        <div className="forms">
          <h2>birthday decorations</h2>
          <form>
            <h2>decor</h2>
            <img src={image1} alt="Birthday Image 1" />
          </form>
          <form>
            <h2>theme</h2>
            <img src={image2} alt="Birthday Image 2" />
          </form>
        </div>
        <div className="forms">
          <h2>birthday cakes</h2>
          <form>
            <h2>customized</h2>
            <img src={image1} alt="Birthday Image 1" />
          </form>
          <form>
            <h2>simple</h2>
            <img src={image2} alt="Birthday Image 2" />
          </form>
        </div>
        <div className="forms">
          <h2>return gifts</h2>
          <form>
            <h2>kids return gift</h2>
            <img src={image1} alt="Birthday Image 1" />
          </form>
          <form>
            <h2>flowers and plants</h2>
            <img src={image2} alt="Birthday Image 2" />
          </form>
        </div>
        <div className="forms">
          <h2>foods</h2>
          <form>
            <h2>vegetarian</h2>
            <img src={image1} alt="Birthday Image 1" />
          </form>
          <form>
            <h2>non-vegtarian</h2>
            <img src={image2} alt="Birthday Image 2" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Wedding;
