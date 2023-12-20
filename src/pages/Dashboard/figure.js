import React, {useEffect, useState} from "react"

const Figure= () =>{
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY; // Get the current scroll position
        if(scrollTop >=1000  && scrollTop <= 2500){
        const first_x = scrollTop/6-375;
        document.getElementsByClassName('content-area')[0].style.top = `${first_x}px`;
        // document.getElementsByClassName('secondblock-image')[0].style.right = `${first_x}px`;
    }
      });

    return (
    <div className="figurepage-body">         
        <div className="content-area">
            <div className="content-title">Key figures</div>
            <div className="figurepage-content">
                <div className="streams-creators">
                    <div>
                        <div className="numbers">+400 million streams</div> 
                        <div>in total across streaming platforms</div>
                    </div>
                    <div>
                        <div className="numbers">+100 creators</div>
                        <div>across 6 different markets</div>
                    </div>
                </div>
                <div className="tracks-Atmos">
                    <div>
                        <div className="numbers">+4000</div> 
                        <div className="numbers content-track">tracks</div>
                        <div className="content-track">in our catalog</div> 
                    </div>
                    <div>
                        <div className="numbers">+Atmos</div>
                        <div>& HQ audio specialist</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="figurepage-footer">
            <div className="figurepagefooter-title">Subscribe & get news in your inbox</div>
            <div className="figurepagefooter-input-area">
                <div className="email-area">
                    <div><input type='text' value='your email' className="figurepagefooter-input"/></div>
                    <button className="figurepagefooter-button">
                        <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="max-md:h-4 max-md:w-auto"><rect x="12.3887" y="15.0249" width="16.7768" height="3.72834" transform="rotate(-135 12.3887 15.0249)" fill="#515151"></rect><rect x="0.529297" y="21.6164" width="16.7743" height="3.72834" transform="rotate(-45 0.529297 21.6164)" fill="#515151"></rect></svg>
                    </button>
                </div>            
                <div>
                    <input type='radio' />
                    <label>I accept Prisma Music Group's <a href="#">privacy policy</a>.</label>                
                </div>
            </div>
        </div>
    </div>
    
  );       
}

export default Figure;
