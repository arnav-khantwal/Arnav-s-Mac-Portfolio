import React from 'react'
import "./Dock.scss"

const Dock = ({windowState, setWindowsState}) => {
    return (
        <footer className="dock">
            <div 
            onClick={() => {setWindowsState(state=>({...state, github: true }))}}
            className="icon github"><img src="/doc-icons/github.svg" alt="GitHub" /></div>

            <div
            onClick={() => {setWindowsState(state=>({...state, note: true }))}} 
            className="icon notes"><img src="/doc-icons/note.svg" alt="Notes" /></div>

            <div
            onClick={() => {setWindowsState(state=>({...state, resume: true }))}} 
            className="icon pdf"><img src="/doc-icons/pdf.svg" alt="PDF" /></div>

            <div
            onClick={()=>{window.open("https://calendar.google.com/","_blank")}}            
            className="icon calendar"><img src="/doc-icons/calender.svg" alt="Calendar" /></div>

            <div 
            onClick={() => {setWindowsState(state=>({...state, spotify: true }))}} 
            className="icon spotify"><img src="/doc-icons/spotify.svg" alt="Spotify" /></div>

            <div
            onClick={()=>{window.open("mailto:arnav.khantwal.ofc@gmail.com","_blank")}}
            className="icon mail"><img src="/doc-icons/mail.svg" alt="Mail" /></div>

            <div 
            onClick={() => {setWindowsState(state=>({...state, cli: true }))}} 
            className="icon cli"><img src="/doc-icons/cli.svg" alt="CLI" /></div>

            <div
            onClick={()=>{window.open("https://www.linkedin.com/in/arnav-khantwal-694502165/","_blank")}}
            className="icon link"><img src="/doc-icons/link.svg" alt="Link" /></div>

        </footer>
    )
}

export default Dock
