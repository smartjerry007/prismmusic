import React from "react";
import Landingpage from './landing'
import Introduction from './introduction'
import Playlists from './playlists'
import Artists from './artists';
import Video from './video';
import Figure from './figure';


const Dashboard = () =>{

    return(
        <div>
            <Landingpage />
            <Introduction />
            <Playlists />
            <Artists />
            <Video />
            <Figure />
        </div>

    );
};

export default Dashboard;