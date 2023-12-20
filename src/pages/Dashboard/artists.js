import React, {useState, useEffect} from "react";
// import SlidingOverlayImage from '../../components/SlidingOverlayImage';
// import SlidingOverlayText from "../../components/SlidingOverlayText";

const Artists = () =>{  
    const [currentImage, setCurrentImage] = useState(0);
    const [currentText, setCurrentText] = useState(0);
    const images = ['https://www.prismamusicgroup.com/wp-content/uploads/2023/09/Foto-Avatar-5120-x-2880-47.png', 
                    'https://www.prismamusicgroup.com/wp-content/uploads/2023/09/Mellow-In-Blue-Avatar-square-scaled.jpg', 
                    'https://www.prismamusicgroup.com/wp-content/uploads/2023/09/Lewis--scaled.jpeg'];

    const texts = ['Poul Remann', 'Mellow in Blue', 'Lewis Kingshigh']
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setCurrentText((prevImage) => (prevImage + 1) % texts.length);
      }, 3000); // Change image every 2 seconds
  
      return () => clearInterval(interval);
    }, [images.length]);
  
    return (
        <div className="slider-container">
            {/* <SlidingOverlayImage images={images} alt="Image" /> */}
            <div className="image-slider">
                {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index}`}
                    className={index === currentImage ? 'active0' : ''}
                />
                ))}
            </div>
            <div>                
                <div className="name-animation">
                    <div className='text1'>Prisma Artists</div>
                    {texts.map((text, index) => (                        
                    <div key={index}
                     className={index === currentText ? 'active0' : ''}
                    >{text}</div>
                    ))
                    }
                </div>
            </div>
        </div>       

    );
};

export default Artists;

