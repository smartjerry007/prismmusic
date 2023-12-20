import React from "react";
import './dashboard.css'

const Playlists = () =>{

    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY; // Get the current scroll position
        if(scrollTop >=1000  && scrollTop <= 2500){
        const first_x = scrollTop/6-375;
        const second_x = scrollTop/6-225;
        document.getElementsByClassName('firstblock-image')[0].style.left = `${first_x}px`;
        document.getElementsByClassName('secondblock-image')[0].style.right = `${second_x}px`;
    }
      });

    return (
        <div>
            <div className="playlists-image">
                <div className="firstblock-image" >  
                    <div className="first-image1 iamge-button"></div>
                    <div className="first-image2 iamge-button"></div>
                    <div className="first-image3 iamge-button" ></div>
                    <div className="first-image4 iamge-button"></div>
                    <div className="first-image5 iamge-button"></div>
                    <div className="first-image6 iamge-button"></div>              
                </div>
                <div className="secondblock-image" >
                    <div className="second-image1 iamge-button"> </div>
                    <div className="second-image2 iamge-button"></div>
                    <div className="second-image3 iamge-button" ></div>
                    <div className="second-image4 iamge-button"></div>
                    <div className="second-image5 iamge-button"></div>
                    <div className="second-image6 iamge-button"></div>              
                </div>
            </div>
            <div className="playlists-button">
            <div className="playlists-button-content">
                <a href='#'>
                    View All Playlists
                    <span>
                        <svg width='20' height='20' viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M703.90625 865.90625l-39.9375-15.65625 148.6875-380.0625c6.84375-17.53125-2.4375-37.3125-20.34375-43.125l-260.0625-84.9375c-16.6875-5.4375-34.6875 3.1875-40.875 19.59375L361.8125 704.46875l-61.40625-23.15625 181.875-481.125c6.09375-16.21875 23.8125-24.84375 40.40625-19.78125l389.0625 120.1875c18.1875 5.625 27.84375 25.5 20.90625 43.3125l-199.125 509.0625c-4.6875 11.71875-17.90625 17.53125-29.625 12.9375z" fill="#ffffff"></path><path d="M241.0625 658.15625m-129.375 0a129.375 129.375 0 1 0 258.75 0 129.375 129.375 0 1 0-258.75 0Z" fill="#ffffff"></path><path d="M614.375 802.90625m-129.375 0a129.375 129.375 0 1 0 258.75 0 129.375 129.375 0 1 0-258.75 0Z" fill="#ffffff"></path><path d="M246.53333333 379.36666667L142.43333333 118.66666667c-6.8-16.9 2.4-36 19.8-41.3l107.9-32.9c14.4-4.4 29.7 2.5 36 16.2l13.2 28.8c7.5 16.3-0.9 35.4-17.9 41l-73.7 24.3c-6.9 2.3-10.5 9.9-7.8 16.6L290.33333333 350.96666667c2.1 5.4-0.5 11.4-5.9 13.6l-37.9 14.8z" fill="#ffffff"></path><path d="M211.53333333 379.36666667m-84.8 0a84.8 84.8 0 1 0 169.6 0 84.8 84.8 0 1 0-169.6 0Z" fill="#ffffff"></path></g></svg>
                    </span>
                </a>
            </div>  
        </div>
    </div>
    );
}

export default Playlists;
