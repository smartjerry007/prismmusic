import React, {useState, useEffect} from "react";
import './dashboard.css'

const Video = () =>{
    
    const [scale, setScale] = useState(0.002);

  useEffect(() => {
    const handleScroll = () => {
      // Update the scale based on the scroll position
      const newScale = 0.03 + window.scrollY * 0.0004; // Adjust the scale factor as needed
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
    return (
        <div className="videopage-body">
            <div className="videopage-content" style={{ transform: `scale(${scale})` }}>                
            </div>
            
        </div>
    );

}

export default Video;