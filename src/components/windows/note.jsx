import React, { useEffect,useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Markdown from 'react-markdown';
import MacWindow from './MacWindow.jsx'
import "./note.scss"


const Note = ({windowName, setWindowsState}) =>{

    const [markdown, setMarkdown] = useState(null);

    useEffect(() => {
        fetch("/note.txt")
        .then(res => res.text())
        .then(text => setMarkdown(text))
    }, [])

    return (
        <MacWindow x={250} y={200} windowName={windowName} setWindowsState={setWindowsState}>
            <div className="note-window">
                {markdown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark}>{markdown}</SyntaxHighlighter> : <p>Loading...</p>}
            </div>
        </MacWindow>
    )
}

export default Note;
