import React, {useState, useEffect} from "react";
import Textanimation from "../../components/textanimation";
import './dashboard.css'

const Introduction = () =>{
    
    return (
        <div className="introductionpage-body">
            <div className="introductionpage-content">
                <Textanimation factor={7.5}text={"Prisma is a record label based in Stockholm. We collaborate with artist and producers across the globe, in our pursuit of releasing great music, primarily within the instrumental genre."}/>
            </div>            
        </div>
    );

}

export default Introduction;