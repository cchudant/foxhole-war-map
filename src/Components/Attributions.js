import React from "react";

class Attributions extends React.Component{
    render() {
        return (
            <div id='attributions'>
                <p>
                    Also check out <a href='http://foxholeglobal.com/'>Foxhole Global</a> by Kastow and <a href='https://foxholestats.com/'>Foxhole Stats</a> by Hayden.<br /> <br />

                    Discord for feedback: <a href='https://discordapp.com/invite/GpxzmSE'>Here</a>. 
                    Foxhole Official Discord: <a href='https://discordapp.com/invite/GpxzmSE'>Here</a>.<br />
                    Built using LeafletJS, React, and Redux. Data Source: <a href='https://github.com/clapfoot/warapi'>Foxhole WarAPI</a>.<br />
                    Foxhole is a registered trademark of Clapfoot Inc., used on this website with their permission.
                </p>
            </div>
        );
    }
}

export default Attributions;