import React from 'react';
import { Rnd } from 'react-rnd';
import './window.scss';

const MacWindow = ({children, width="40vw", x = 300, y = 50, height="40vh", windowName, setWindowsState}) => {
    return (
        <Rnd
        dragHandleClassName="window-nav"
        default={{
                width: width,
                height: height,
                x,
                y
            }}
        >
            <div className="window">
                <div className="window-nav">
                    <div className="dots">
                        <div 
                        onClick={() => setWindowsState(state => ({ ...state, [windowName]: false }))}
                        className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="title">
                        <p>arnavkhantwal - zsh</p>
                    </div>
                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
            
        </Rnd>
    )
}





export default MacWindow