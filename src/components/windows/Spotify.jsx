import React from 'react'
import MacWindow from './MacWindow'
import "./spotify.scss";

const Spotify = ({windowName, setWindowsState}) => {
    return (
        <MacWindow  x={1000} y={160} width='30vw' height='60vh' windowName={windowName} setWindowsState={setWindowsState}>
            <div className="spotify-window">
                <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} 
                src="https://open.spotify.com/embed/playlist/37i9dQZEVXbNG2KDcFcKOF?utm_source=generator&si=7bd8f4ea6d704f3f" 
                width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; 
                fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </MacWindow>
    )
}

export default Spotify
