import React, {useState, useEffect} from "react";
import Textanimation from "../../components/textanimation";
import './story.css'

const Article2 = () =>{
    
    return (
        <div className="introductionpage-body">
            <div className="introductionpage-content">
                <Textanimation factor={7.5} text={"We're dedicated to produce premium sounds. Our playlists range from world-class jazz to classical and soothing Spanish guitar tracks. Each piece reflects our unwavering commitment to quality and excellence."}/>
            </div>            
        </div>
    );

}

export default Article2;