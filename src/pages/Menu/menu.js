import React from "react";
import './menu.css'

const Menu = () =>{

    return(
        <div className="menu-body">
            <div className="menu-content">
                <div className="menu-lists">
                    <div><a href='/story'>Our Story</a></div>
                    <div><a href='/story'>The Artists</a></div>
                    <div><a href='/story'>Playlists</a></div>
                    <div><a href='/story'>Contacts</a></div>
                </div>
                <div className="menu-others">
                    <div>
                        <div>Norrsken House, 57C</div>
                        <div>Stockholm</div>
                        <div>Sweden</div>
                    </div>
                    <div>
                        <div><a class='menu-link' href='#'>Spotify</a></div>
                        <div><a class='menu-link' href='#'>Apple Music</a></div>
                        <div><a class='menu-link' href='#'>YouTube</a></div>
                        <div><a class='menu-link' href='#'>Pandora</a></div>
                        <div><a class='menu-link' href='#'>Deezer</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;