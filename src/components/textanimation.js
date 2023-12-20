import React, {useState, useEffect} from "react";
import './textanimation.css'

const Textanimation = (props) =>{
  const [scrollPosition, setScrollPosition] = useState(0);
  const [colorChangedIndices, setColorChangedIndices] = useState([]);
  
  // const text = "Prisma is a record label based in Stockholm. We collaborate with artist and producers across the globe, in our pursuit of releasing great music, primarily within the instrumental genre.";
  const colors = ['rgb(159, 159, 251)', 'rgb(159, 159, 251)', 'rgb(159, 159, 251)']; // Example colors

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const changeColor = (index) => {
    if (!colorChangedIndices.includes(index)) {
      setColorChangedIndices([...colorChangedIndices, index]);
    }
  };
  const factor = 7.5
  const shouldChangeColor = (index) => {
    return scrollPosition > (index * props.factor);  // Adjust sensitivity here
  };

  return (
    <div className="textanimation-body">
      <h4>
        {props.text.split('').map((char, index) => (
          <span
            key={index}
            style={{
              color: shouldChangeColor(index) ? colors[index % colors.length] : '#000',  // Change color based on the condition
              transition: 'color 0.5s'  // Add transition for smoother color change
            }}
            onClick={() => changeColor(index)} // Save change status when clicked
          >
            {char}
          </span>
        ))}
      </h4>
    </div>
  );

}

export default Textanimation;