import React, {useState, useEffect} from "react";
import './story.css'

const Grammy = () => {
    const [scale, setScale] = useState(0.002);

    useEffect(() => {
      const handleScroll = () => {
        // Update the scale based on the scroll position
        const newScale = 0.03 + window.scrollY * 0.001; // Adjust the scale factor as needed
        setScale(newScale);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
   
      return (
          <div className="grammy-body">
              <div className="grammy-image" style={{ transform: `scale(${scale})` }}>
                    <div className="grammy-letter" style={{ transform: `scale(${scale})` }}>Grammy</div>                
              </div>
              
          </div>
      );
};

export default Grammy;