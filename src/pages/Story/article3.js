import React, {useState, useEffect} from "react";
import Textanimation from "../../components/textanimation";
import './story.css'

const Article3 = () =>{
    
    return (
        <div className="introductionpage-body">
            <div className="introductionpage-content">
                <Textanimation factor={22} text={"Prisma artists have been involved in groundbreaking research concerning “music as medicine”. In 2016 that resulted in winning a grammy award."}/>
            </div>            
        </div>
    );

}

export default Article3;